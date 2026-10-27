# SEO-Check der gebauten Seite: Links, Titel, Descriptions, H1, Alt-Texte, strukturierte Daten
# Aufruf: python3 -I scripts/seo-check.py .vercel/output/static
import sys, os, re, json, html
root = sys.argv[1]
pages = {}
for d, _, files in os.walk(root):
    for f in files:
        if f.endswith('.html'):
            p = os.path.join(d, f)
            rel = '/' + os.path.relpath(p, root)
            url = rel[:-len('/index.html')] if rel.endswith('/index.html') else rel[:-5]
            pages[url or '/'] = open(p, encoding='utf-8').read()
statics = set()
for d, _, files in os.walk(root):
    for f in files:
        statics.add('/' + os.path.relpath(os.path.join(d, f), root))
redirect = lambda s: 'http-equiv="refresh"' in s
probleme, titel, descs = [], {}, {}
for url, s in sorted(pages.items()):
    if redirect(s): continue
    t = html.unescape((re.search(r'<title>(.*?)</title>', s, re.S) or [None, ''])[1])
    dsc = html.unescape((re.search(r'<meta name="description" content="([^"]*)"', s) or [None, ''])[1])
    h1 = len(re.findall(r'<h1[\s>]', s))
    noindex = 'noindex' in (re.search(r'<meta name="robots" content="([^"]*)"', s) or [None, ''])[1]
    if not noindex:
        titel.setdefault(t, []).append(url); descs.setdefault(dsc, []).append(url)
        if len(t) > 65: probleme.append(f'{url}: Titel {len(t)} Zeichen: {t}')
        if not 70 <= len(dsc) <= 160: probleme.append(f'{url}: Description {len(dsc)} Zeichen')
    if h1 != 1: probleme.append(f'{url}: {h1} H1')
    for img in re.findall(r'<img [^>]*>', s):
        if not re.search(r'\salt(=|\s|>|/)', img): probleme.append(f'{url}: Bild ohne alt')
    for m in re.findall(r'<script type="application/ld\+json">(.*?)</script>', s, re.S):
        try: json.loads(m)
        except Exception as e: probleme.append(f'{url}: JSON-LD ungültig {e}')
    for href in re.findall(r'href="(/[^"#?]*)', s):
        h = href.rstrip('/') or '/'
        if h in pages or href in statics or h.startswith('/_astro'): continue
        probleme.append(f'{url}: toter Link {href}')
for t, u in titel.items():
    if len(u) > 1: probleme.append(f'Doppelter Titel "{t}": {u}')
for t, u in descs.items():
    if len(u) > 1: probleme.append(f'Doppelte Description: {u}')
print(f'{sum(1 for s in pages.values() if not redirect(s))} Seiten geprüft')
print('\n'.join(sorted(set(probleme))) or 'Keine Probleme')
