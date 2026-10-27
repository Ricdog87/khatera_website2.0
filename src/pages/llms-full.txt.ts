import type { APIRoute } from 'astro';
import { volltext } from '../lib/llms';

export const GET: APIRoute = async ({ site }) => new Response(await volltext(site!), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
