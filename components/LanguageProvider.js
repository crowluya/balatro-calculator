// Language Provider for Balatro Calculator
// 语言管理和翻译加载功能

// 默认语言和翻译数据
let currentLanguage = 'en';
let translations = {};

// 初始化语言
async function initLanguage() {
  // 尝试从localStorage获取语言偏好
  const savedLanguage = localStorage.getItem('balatroCalculatorLanguage');
  
  // 如果有保存的语言偏好，使用它
  if (savedLanguage) {
    currentLanguage = savedLanguage;
  } else {
    // 否则尝试检测浏览器语言
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'zh') {
      currentLanguage = 'zh';
    }
  }
  
  // 加载翻译
  await loadTranslations(currentLanguage);
  
  // 设置HTML的lang属性
  document.documentElement.lang = currentLanguage;
  
  // 激活语言按钮
  setActiveLanguage(currentLanguage);
  
  // 应用翻译
  translatePage();
}

// 加载翻译文件
async function loadTranslations(lang) {
  try {
    const response = await fetch(`translations/${lang}.json`);
    translations = await response.json();
  } catch (error) {
    console.error('Error loading translations:', error);
    // 加载失败时回退到英文
    if (lang !== 'en') {
      currentLanguage = 'en';
      await loadTranslations('en');
    }
  }
}

// 切换语言
async function switchLanguage(lang) {
  if (lang === currentLanguage) return;
  
  currentLanguage = lang;
  
  // 保存语言偏好
  localStorage.setItem('balatroCalculatorLanguage', lang);
  
  // 加载新语言的翻译
  await loadTranslations(lang);
  
  // 更新HTML的lang属性
  document.documentElement.lang = lang;
  
  // 激活语言按钮
  setActiveLanguage(lang);
  
  // 应用翻译
  translatePage();
}

// 获取翻译
function t(key) {
  // 支持使用点符号获取嵌套属性，如"header.calculator"
  const keys = key.split('.');
  let value = translations;
  
  for (const k of keys) {
    if (value && value[k] !== undefined) {
      value = value[k];
    } else {
      // 找不到翻译时返回key
      return key;
    }
  }
  
  return value;
}

// 翻译页面
function translatePage() {
  // 翻译所有带有data-i18n属性的元素
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = t(key);
  });
  
  // 翻译特定元素
  translateSpecificElements();
}

// 翻译特定元素
function translateSpecificElements() {
  // Header部分
  document.querySelectorAll('#header-component a').forEach(link => {
    const href = link.getAttribute('href');
    switch (href) {
      case '#calculator':
        link.textContent = t('header.calculator');
        break;
      case '#features':
        link.textContent = t('header.features');
        break;
      case '#guide':
        link.textContent = t('header.howToUse');
        break;
      case 'balatro-calculator.html':
        link.textContent = t('header.fullVersion');
        break;
    }
  });
  
  // 计算器部分
  const calculatorSection = document.querySelector('#calculator-section-component');
  if (calculatorSection) {
    const title = calculatorSection.querySelector('h2');
    if (title) title.textContent = t('calculator.title');
    
    const desc = calculatorSection.querySelector('p');
    if (desc) desc.textContent = t('calculator.description');
    
    const ctaButton = calculatorSection.querySelector('.cta-button');
    if (ctaButton) ctaButton.textContent = t('calculator.ctaButton');
  }
  
  // 特性部分
  const featuresSection = document.querySelector('#features-section-component');
  if (featuresSection) {
    const title = featuresSection.querySelector('h2');
    if (title) title.textContent = t('features.title');
    
    // 特性卡片
    const featureCards = featuresSection.querySelectorAll('.feature-card');
    if (featureCards.length === 4) {
      // 精确计算
      featureCards[0].querySelector('h3').textContent = t('features.cards.precision.title');
      featureCards[0].querySelector('p').textContent = t('features.cards.precision.description');
      
      // Joker优化
      featureCards[1].querySelector('h3').textContent = t('features.cards.joker.title');
      featureCards[1].querySelector('p').textContent = t('features.cards.joker.description');
      
      // 手牌优化
      featureCards[2].querySelector('h3').textContent = t('features.cards.hand.title');
      featureCards[2].querySelector('p').textContent = t('features.cards.hand.description');
      
      // 特殊牌组
      featureCards[3].querySelector('h3').textContent = t('features.cards.deck.title');
      featureCards[3].querySelector('p').textContent = t('features.cards.deck.description');
    }
    
    // 使用指南
    const guide = featuresSection.querySelector('.features-guide');
    if (guide) {
      guide.querySelector('h3').textContent = t('features.guide.title');
      const steps = guide.querySelectorAll('li');
      const translatedSteps = t('features.guide.steps');
      if (steps.length === translatedSteps.length) {
        steps.forEach((step, index) => {
          step.textContent = translatedSteps[index];
        });
      }
    }
  }
  
  // SEO内容部分
  const seoSection = document.querySelector('#seo-content-component');
  if (seoSection) {
    const articles = seoSection.querySelectorAll('article');
    if (articles.length >= 3) {
      // 第一篇文章
      articles[0].querySelector('h2').textContent = t('seo.article1.title');
      articles[0].querySelector('p').textContent = t('seo.article1.content');
      
      // 第二篇文章
      articles[1].querySelector('h2').textContent = t('seo.article2.title');
      articles[1].querySelector('p').textContent = t('seo.article2.content');
      
      // 第三篇文章
      articles[2].querySelector('h2').textContent = t('seo.article3.title');
      articles[2].querySelector('p').textContent = t('seo.article3.content');
    }
    
    // 相关搜索
    const relatedSearches = seoSection.querySelector('.seo-keywords h3');
    if (relatedSearches) relatedSearches.textContent = t('seo.relatedSearches');
  }
  
  // Footer部分
  const footer = document.querySelector('#footer-component');
  if (footer) {
    const copyright = footer.querySelector('.footer-copyright p:first-child');
    if (copyright) copyright.textContent = t('footer.copyright');
    
    const original = footer.querySelector('.footer-copyright p:last-child');
    if (original) original.textContent = t('footer.original');
  }
}
