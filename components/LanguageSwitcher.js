// Language Switcher component for Balatro Calculator
function createLanguageSwitcher() {
  return `
    <div class="language-switcher">
      <button class="language-btn" data-lang="en">English</button>
      <button class="language-btn" data-lang="zh">中文</button>
    </div>
  `;
}

// 选择当前语言按钮
function setActiveLanguage(language) {
  document.querySelectorAll('.language-btn').forEach(btn => {
    if (btn.dataset.lang === language) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}
