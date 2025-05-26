function calculateLove() {
  const name1 = document.getElementById('name1').value.trim().toLowerCase();
  const name2 = document.getElementById('name2').value.trim().toLowerCase();

  if (!name1 || !name2) {
    alert("Please enter both names!");
    return;
  }

  if (name1 === name2) {
    showResult(100, "Wow! Dono naam ek jaise hain — apne aap se pyar bhi zaruri hai!");
    return;
  }

  const specialCouples = [
    {
      names: ['romeo', 'juliet'],
      lovePercent: 100,
      message: "A timeless love story!"
    },
    {
      names: ['shiva', 'parvati'],
      lovePercent: 95,
      message: "Divine connection!"
    },
    {
      names: ['jack', 'rose'],
      lovePercent: 90,
      message: "A love that survived all storms."
    },
    {
      names: ['raj', 'simran'],
      lovePercent: 99,
      message: "DDLJ vibes forever!"
    }
  ];

  for (let couple of specialCouples) {
    if (
      couple.names.includes(name1) &&
      couple.names.includes(name2) &&
      name1 !== name2
    ) {
      showResult(couple.lovePercent, couple.message);
      return;
    }
  }

  let score = 0;
  for (let i = 0; i < Math.min(name1.length, name2.length); i++) {
    score += Math.abs(name1.charCodeAt(i) - name2.charCodeAt(i));
  }

  let lovePercent = Math.max(0, 100 - score % 101);
  showResult(lovePercent);
}

function showResult(lovePercent, specialMessage = '') {
  let heartsCount = Math.floor(lovePercent / 10);
  let hearts = '❤️'.repeat(heartsCount);

  document.getElementById('result').innerHTML = `
    <div>Your love compatibility is: <strong>${lovePercent}%</strong></div>
    <div class="heart">${hearts}</div>
    ${specialMessage ? `<div style="margin-top:15px; font-size:1.2em; color:#ff3399;">${specialMessage}</div>` : ''}
  `;
}