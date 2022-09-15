// The list of skill to display.
// `value` must be in range [0; 100].
const skills = {
  'skills-app': {
    Rust: { value: 80, color: '#D21D3B' },
    'C#': { value: 70, color: '#A179DC' },
    'C/C++': { value: 60, color: '#76B3F5' },
  },
  'skills-web': {
    HTML: { value: 80, color: '#F06529' },
    CSS: { value: 65, color: '#2965F1' },
    JavaScript: { value: 90, color: '#F0DB4F' },
    TypeScript: { value: 90, color: '#007ACC' },
    Boostrap: { value: 40, color: '#712CF9', link: 'https://getbootstrap.com/' },
    NodeJs: { value: 70, color: '#68A063', link: 'https://nodejs.org/' },
  },
  'skills-science': {
    Python: { value: 70, color: '#FFD242' },
    Jupyter: { value: 80, color: '#F37726', link: 'https://jupyter.org/' },
  },
  'skills-game-engine': {
    Unity: { value: 80, color: '#E0E0E0', link: 'https://unity.com/' },
    Bevy: { value: 60, color: '#E0E0E0', link: 'https://bevyengine.org/' },
  },
};

window.addEventListener('page-rendered', function () {
  // The radius of the skill meter
  const radius = 52;
  const size = 2 * radius + 10;
  const stroke_dasharray = 2 * Math.PI * radius;

  // Use an intersection observer to start the animation when the
  // skill meter is visible.
  const startAnimation = (entries, _) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.toggle('animated', true);
      }
    });
  };
  const options = { root: null, rootMargin: '0px', threshold: 0.2 };
  const observer = new IntersectionObserver(startAnimation, options);

  // Create a style sheet to store keyframes to animate skill meters.
  const style = document.createElement('style');

  for (let skill_div of document.querySelectorAll('.skills')) {
    let skills_values = skills[skill_div.id];
    if (skills_values === undefined) {
      continue;
    }
    for (let [name, { value, color, link }] of Object.entries(skills_values)) {
      let safe_name = name.replace(/\W/g, '_');
      const keyframes_name = `skill-meter-progress-${safe_name}`;
      const filling = stroke_dasharray * ((100 - value) / 100);

      const skill_meter = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      skill_meter.classList.add('skill-meter');
      skill_meter.setAttribute('width', size);
      skill_meter.setAttribute('height', size);

      let text = `<text fill="#ffffff" font-size="14" font-family="Verdana" x="57" y="57" text-anchor="middle" dy=".3em">${name}</text>`;

      if (link !== undefined) {
        text = `<a href="${link}" target="_blank">${text}</a>`;
      }

      skill_meter.innerHTML = `
<circle class="skill-meter-bg" cx="57" cy="57" r="52" fill="none" stroke-width="10px"></circle>
<circle class="skill-value" cx="57" cy="57" r="52" fill="none" stroke-width="10px" 
  stroke="${color}" stroke-linecap="round" 
  stroke-dasharray="${stroke_dasharray}" stroke-dashoffset="${filling}"
></circle>
${text}`;

      style.innerHTML += `
@keyframes ${keyframes_name} {
  from {
    stroke-dashoffset: ${stroke_dasharray};
  }
  to {
    stroke-dashoffset: ${filling};
  }
}`;

      skill_meter.style.setProperty('--animation', keyframes_name);

      skill_div.appendChild(skill_meter);
      observer.observe(skill_meter);
    }
  }

  //WebKit Hack
  style.appendChild(document.createTextNode(''));
  document.head.appendChild(style);
});
