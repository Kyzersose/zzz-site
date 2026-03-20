/* ==========================================
   zzzzzzzzzzzzzzzz.com — Main JavaScript
   ========================================== */

// Generate twinkling stars
const starsEl = document.getElementById('stars');
if (starsEl) {
  for (let i = 0; i < 120; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 2.5 + 0.5;
    s.style.cssText = [
      `width:${size}px`,
      `height:${size}px`,
      `top:${Math.random() * 100}%`,
      `left:${Math.random() * 100}%`,
      `--d:${2 + Math.random() * 4}s`,
      `--delay:-${Math.random() * 4}s`,
      `opacity:${Math.random() * 0.5 + 0.1}`
    ].join(';');
    starsEl.appendChild(s);
  }
}

// Cite modal
function openCite() {
  document.getElementById('citeOverlay').classList.add('open');
}

function closeCite() {
  document.getElementById('citeOverlay').classList.remove('open');
}

function closeCiteIfBg(e) {
  if (e.target === document.getElementById('citeOverlay')) closeCite();
}

function switchTab(fmt, btn) {
  document.querySelectorAll('.cite-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.cite-format').forEach(f => f.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('fmt-' + fmt).classList.add('active');
}

function copyText(id, btn) {
  const text = document.getElementById(id).textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 2000);
  });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCite();
});
