import type { APIRoute } from 'astro';
import { kurzprofil } from '../lib/llms';

export const GET: APIRoute = ({ site }) => new Response(kurzprofil(site!), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
