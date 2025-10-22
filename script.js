// Save as: script.js
// Simple interactivity: theme toggle, year, copy/download profile

(function(){
  // Populate current year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Theme toggle: toggles a light-ish class for quick demonstration
  const themeBtn = document.getElementById('themeToggle');
  themeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-mode');
    // store preference (local)
    if(document.documentElement.classList.contains('light-mode')){
      localStorage.setItem('theme','light');
    } else {
      localStorage.removeItem('theme');
    }
  });

  // Restore theme from local storage
  if(localStorage.getItem('theme') === 'light'){
    document.documentElement.classList.add('light-mode');
  }

  // Create a JSON summary from the page (copy/download)
  const profile = {
    name: "Junaid Siddiqui",
    location: "India",
    college: "Anjuman-I-Islam’s M. H. Saboo Siddik College of Engineering",
    projects: [
      "DeepFake Detection (images & video)",
      "Health Chatbot (React + Gemini API)",
      "AES symmetric encryption + Chatbot",
      "E-Way Bill UI clone (HTML/CSS/JS + PHP + MySQL)",
      "Computer Graphics experiments (Bezier, Bresenham, Mid-point algorithms)"
    ],
    skills: ["Java","C","C++","Python","JavaScript","PHP","SQL","HTML","CSS","React"],
    tools: ["VS Code","Chrome","Turbo C++","MySQL","Git"],
    notes: [
      "Works on academic experiments: stacks (linked-list), BST, circular queue, line clipping algorithms",
      "Preparing presentations, PPT & viva for projects",
      "Creating small GUI apps & games (Java, Snake game enhancements)"
    ],
    devices: {laptop:"Lenovo", phone:"Samsung Guru"}
  };

  const copyBtn = document.getElementById('copyProfile');
  const downloadBtn = document.getElementById('downloadBtn');

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(profile, null, 2));
      copyBtn.textContent = 'Copied!';
      setTimeout(()=> copyBtn.textContent = 'Copy Summary JSON', 1500);
    } catch (err) {
      copyBtn.textContent = 'Copy failed';
      console.error(err);
      setTimeout(()=> copyBtn.textContent = 'Copy Summary JSON', 1500);
    }
  });

  downloadBtn.addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(profile, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'junaid_profile.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });

  // Small accessibility improvement: focus outline visible when using keyboard
  document.body.addEventListener('keyup', (e) => {
    if(e.key === 'Tab') document.documentElement.classList.add('show-focus');
  });
})();
