const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO = 'odearsan01-create/Desa_Bokor';
const PATH = 'js/data.json';
const BRANCH = 'main';

module.exports = async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    if (!GITHUB_TOKEN) {
      return res.status(500).json({ error: 'Missing GITHUB_TOKEN environment variable on Vercel' });
    }

    const state = req.body;
    if (!state) {
      return res.status(400).json({ error: 'Missing request body' });
    }

    const fileContent = JSON.stringify(state, null, 2);
    const contentBase64 = Buffer.from(fileContent).toString('base64');

    // 1. Dapatkan SHA dari file js/data.json yang sudah ada (jika ada)
    const getUrl = `https://api.github.com/repos/${REPO}/contents/${PATH}?ref=${BRANCH}`;
    const headers = {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Vercel-Serverless-Function'
    };

    let sha = null;
    try {
      const getRes = await fetch(getUrl, { headers });
      if (getRes.ok) {
        const fileInfo = await getRes.json();
        sha = fileInfo.sha;
      }
    } catch (e) {
      console.error('Error fetching file SHA:', e);
    }

    // 2. Tulis file baru atau update file lama di GitHub
    const putUrl = `https://api.github.com/repos/${REPO}/contents/${PATH}`;
    const putBody = {
      message: 'Update state from Admin Panel [skip ci]',
      content: contentBase64,
      branch: BRANCH
    };
    if (sha) {
      putBody.sha = sha;
    }

    const putRes = await fetch(putUrl, {
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(putBody)
    });

    if (!putRes.ok) {
      const errorText = await putRes.text();
      return res.status(putRes.status).json({ error: `GitHub API error: ${errorText}` });
    }

    const putData = await putRes.json();
    return res.status(200).json({ success: true, commit: putData.commit.sha });

  } catch (err) {
    console.error('Serverless function error:', err);
    return res.status(500).json({ error: err.message });
  }
};
