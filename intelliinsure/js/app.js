/* ============================================
   IntelliInsure Systems — Core JS
   ============================================ */

/* ── Active nav highlighting ── */
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sb-link').forEach(a => {
    const href = a.getAttribute('href')?.split('/').pop();
    if (href === page) {
      document.querySelectorAll('.sb-link').forEach(l => l.classList.remove('active'));
      a.classList.add('active');
    }
  });
})();

/* ── Date stamp ── */
(function () {
  const el = document.getElementById('today');
  if (el) {
    el.textContent = new Date().toLocaleDateString('en-IN', {
      weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
    });
  }
})();

/* ── Animate bar fills ── */
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.bar-fill[data-w]').forEach(b => {
    const w = b.dataset.w;
    b.style.width = '0';
    setTimeout(() => { b.style.width = w; }, 200);
  });
});

/* ── Claude API helper ── */
async function ai(userPrompt, systemPrompt = '') {
  const body = {
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1000,
    messages: [{ role: 'user', content: userPrompt }]
  };
  if (systemPrompt) body.system = systemPrompt;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error?.message || `HTTP ${res.status}`);
  }
  const data = await res.json();
  return data.content?.map(b => b.text || '').join('') || '';
}

/* ── Loading state helper ── */
function setLoad(id, on) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('on', on);
}

/* ── Show result ── */
function showResult(id, text) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = 'block';
  el.querySelector('.result-box').textContent = text;
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ── Toast ── */
function toast(msg, type = 'ok') {
  document.querySelector('.toast')?.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  t.style.cssText = `background:${type === 'ok' ? '#00c9a7' : '#ef4444'};color:${type === 'ok' ? '#0d1117' : '#fff'};`;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2800);
}

/* ── Copy ── */
function copyEl(id) {
  const el = document.getElementById(id);
  if (!el) return;
  navigator.clipboard.writeText(el.textContent).then(() => toast('Copied!'));
}
