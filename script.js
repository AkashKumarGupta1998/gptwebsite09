// ===== Scroll to Top Button =====
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '↑';
scrollBtn.id = 'backToTop';
document.body.appendChild(scrollBtn);

scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '30px';
scrollBtn.style.right = '30px';
scrollBtn.style.padding = '10px 15px';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.fontSize = '18px';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.backgroundColor = '#00adb5';
scrollBtn.style.color = '#121212';
scrollBtn.style.display = 'none';
scrollBtn.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
scrollBtn.style.zIndex = '999';

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
};

scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ===== Future: Theme toggle, animations, etc. can go here =====
