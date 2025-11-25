// Default to the Strapi backend port used in this workspace (1337).
// Keep using env override when available (STRAPI_URL).
export const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

export async function strapiFetch(path, opts = {}) {
  const url = `${STRAPI_URL}${path}${path.includes('?') ? '&' : '?'}populate=*`;
  const defaultHeaders = { 'Content-Type': 'application/json' };
  const fetchOpts = {
    headers: { ...(opts.headers || {}), ...defaultHeaders },
    method: opts.method || 'GET',
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  };

  try {
    const res = await fetch(url, fetchOpts);
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Strapi request failed ${res.status} ${res.statusText}: ${text}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('strapiFetch error:', err.message);
    throw err;
  }
}
