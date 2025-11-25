import { STRAPI_URL } from '../../lib/strapi';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const { name, email, phone, job_title, cover_letter } = req.body || {};
  if (!name || !email || !job_title) {
    return res.status(400).json({ message: 'Missing required fields: name, email, job_title' });
  }

  try {
    const apiRes = await fetch(`${STRAPI_URL}/api/career-applications`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: { name, email, phone, job_title, cover_letter } }),
    });

    if (!apiRes.ok) {
      const text = await apiRes.text();
      return res.status(500).json({ message: 'Strapi error: ' + text });
    }

    const data = await apiRes.json();
    return res.status(200).json({ ok: true, data });
  } catch (err) {
    console.error('apply API error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
}
