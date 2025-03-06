// Particle animation
function createParticles() {
    const particles = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            transition: transform 1s ease;
        `;
        
        const startPos = Math.random() * 100;
        particle.style.left = startPos + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        particles.appendChild(particle);
        
        setInterval(() => {
            const newPos = (startPos + (Math.random() * 20 - 10)) % 100;
            particle.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
            particle.style.opacity = Math.random();
        }, 2000);
    }
}

// Tips data
const tips = [
    {
        id: 1,
        title: "Awareness is Key",
        description: "Stay alert and aware of your surroundings at all times. Avoid distractions like looking at your phone while walking. Trust your instincts - if something feels wrong, it probably is.",
        icon: "👀"
    },
    {
        id: 2,
        title: "Basic Stance",
        description: "Keep your feet shoulder-width apart, knees slightly bent. This gives you better balance and allows you to move quickly in any direction if needed.",
        icon: "🧍"
    },
    {
        id: 3,
        title: "Escape Routes",
        description: "Always be aware of potential escape routes. Running away from danger is often the smartest form of self-defense.",
        icon: "🏃"
    },
    {
        id: 4,
        title: "Travel in Groups",
        description: "Whenever possible, walk with friends or in well-populated areas. Attackers are less likely to target groups.",
        icon: "👥"
    },
    {
        id: 5,
        title: "Stay Calm",
        description: "If confronted, try to remain calm. Clear thinking is crucial for making good decisions under pressure.",
        icon: "🧘"
    },
    {
        id: 6,
        title: "Vulnerable Points",
        description: "If you must defend yourself, target vulnerable areas: eyes, throat, groin. Use the element of surprise to create an opportunity to escape.",
        icon: "⚠"
    }
];

// Initialize particles
createParticles();

// Create tip cards with animation
const tipsGrid = document.getElementById('tipsGrid');
tips.forEach((tip, index) => {
    const tipCard = document.createElement('div');
    tipCard.className = 'tip-card';
    tipCard.innerHTML = `
        <div class="tip-icon">${tip.icon}</div>
        <h3>${tip.title}</h3>
        <p>${tip.description}</p>
    `;
    tipCard.addEventListener('click', () => openModal(tip));
    tipsGrid.appendChild(tipCard);
    
    // Animate cards on scroll
    setTimeout(() => {
        tipCard.classList.add('visible');
    }, index * 200);
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.tip-card').forEach(card => {
    observer.observe(card);
});

// Enhanced modal functionality
const modal = document.getElementById('tipModal');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeButton = document.querySelector('.close-button');
const modalButton = document.querySelector('.modal-button');

function openModal(tip) {
    modalIcon.textContent = tip.icon;
    modalTitle.textContent = tip.title;
    modalDescription.textContent = tip.description;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Trigger animation
    requestAnimationFrame(() => {
        modal.classList.add('active');
    });
}

function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

closeButton.addEventListener('click', closeModal);
modalButton.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    const hero = document.querySelector('.hero');
    hero.style.backgroundPositionY = `${scroll * 0.5}px`;
});
