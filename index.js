function toggleSection(id, button) {
  const content = document.getElementById(id);
  const chevron = button.querySelector('.chevron');
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
  chevron.classList.toggle('rotate');
}