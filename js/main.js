// 轮播图功能
const heroCarousel = document.querySelector('.hero-carousel');

if (heroCarousel) {
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.indicator');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      stopAutoSlide();
      startAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      stopAutoSlide();
      startAutoSlide();
    });
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      showSlide(index);
      stopAutoSlide();
      startAutoSlide();
    });
  });

  heroCarousel.addEventListener('mouseenter', stopAutoSlide);
  heroCarousel.addEventListener('mouseleave', startAutoSlide);

  startAutoSlide();
}

// 导航栏汉堡菜单
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // 点击导航链接后关闭菜单
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// 导航栏滚动效果
const navbar = document.querySelector('.navbar');

if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// 平滑滚动
const smoothLinks = document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// 项目筛选功能
function initFilterFunctionality() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // 移除所有按钮的active类
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // 添加当前按钮的active类
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        if (projectCards.length > 0) {
          projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        }
      });
    });
  }
}



// 表单提交功能
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 获取表单数据
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // 简单的表单验证
    if (!name || !email || !message) {
      alert('请填写所有必填字段');
      return;
    }
    
    // 模拟表单提交
    alert('消息已发送！我们会尽快与您联系。');
    contactForm.reset();
  });
}

// 生成项目卡片
function generateProjectCards() {
  const projectGrid = document.querySelector('.project-grid');
  if (!projectGrid || typeof projects === 'undefined') return;
  
  projectGrid.innerHTML = '';
  
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', project.category);
    
    card.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">
          ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          ${project.live ? `<a href="${project.live}" class="project-link" target="_blank">查看演示</a>` : ''}
          ${project.github ? `<a href="${project.github}" class="project-link" target="_blank">GitHub</a>` : ''}
        </div>
      </div>
    `;
    
    projectGrid.appendChild(card);
  });
}

// 生成技能
function generateSkills() {
  const skillsContainer = document.querySelector('.skills-container');
  if (!skillsContainer || typeof skills === 'undefined') return;
  
  skillsContainer.innerHTML = '';
  
  skills.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.className = 'skill-category';
    
    categoryElement.innerHTML = `
      <h3>${category.name}</h3>
      <ul class="skill-list">
        ${category.items.map(item => `
          <li>${item}</li>
        `).join('')}
      </ul>
    `;
    
    skillsContainer.appendChild(categoryElement);
  });
}

// 生成经历
function generateExperience() {
  const experienceContainer = document.querySelector('.experience');
  if (!experienceContainer || typeof experience === 'undefined') return;
  
  const experienceList = document.createElement('div');
  experienceList.className = 'experience-list';
  
  experience.forEach(item => {
    const experienceItem = document.createElement('div');
    experienceItem.className = 'experience-item';
    
    experienceItem.innerHTML = `
      <h4>${item.title}</h4>
      <div class="company">${item.company}</div>
      <div class="date">${item.date}</div>
      <p>${item.description}</p>
    `;
    
    experienceList.appendChild(experienceItem);
  });
  
  experienceContainer.appendChild(experienceList);
}

// 页面加载完成后执行
window.addEventListener('DOMContentLoaded', () => {
  generateProjectCards();
  generateSkills();
  generateExperience();
  initFilterFunctionality();
});