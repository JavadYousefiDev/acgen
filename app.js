// Main Program:
function generate() {
    const count = parseInt(document.getElementById("count").value);
    const start = document.getElementById("start").value;
    const output = document.getElementById("output");

    const match = start.match(/(.*?)(\d+)$/);
    if (!match) {
      alert("Username must end with a number and cannot be empty.");
      return;
    }

    const prefix = match[1];
    let startNum = parseInt(match[2]);

    let result = "";

    for (let i = 0; i < count; i++) {
      const username = prefix + (startNum + i);
      const password = Math.floor(1000 + Math.random() * 9000);
      result += `${username},${password}\n`;
    }

    output.value = result;
  }

  function copyToClipboard() {
    const textarea = document.getElementById("output");
    textarea.select();
    document.execCommand("copy");
    alert("Copied!");
  }

  function downloadFile() {
    const textarea = document.getElementById("output");
    const blob = new Blob([textarea.value], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'usernames.txt';
    link.click();
  }

  // --------------------------------

  // Page Loader:
  window.onload = function () {
    const text = document.getElementById('text');
    const dotsContainer = document.getElementById('dots-container');
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    const container = document.querySelector('.container');

    setTimeout(() => {
      text.style.opacity = 1;
    }, 100);

    setTimeout(() => {
      text.style.opacity = 0;
    }, 2000);

    setTimeout(() => {
      text.classList.add('hidden');
      dotsContainer.classList.remove('hidden');
      dotsContainer.style.opacity = 1;
    }, 3500);

    setTimeout(() => {
      dotsContainer.style.opacity = 0;
    }, 5500);

    setTimeout(() => {
      loader.style.display = 'none';
      content.classList.remove('hidden');
      content.classList.add('visible');
      container.style.display = 'flex';
    }, 6500);

  };