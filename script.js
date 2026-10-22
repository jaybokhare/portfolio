document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Replace this placeholder with your real social profile link before publishing.');
  });
});
