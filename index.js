function toggleSection(id, btn) {
  const section = document.getElementById(id);
  const isVisible = section.style.display === "block";
  
  section.style.display = isVisible ? "none" : "block";

  // Toggle button chevron
  const allButtons = document.querySelectorAll("button");
  allButtons.forEach(b => b.classList.remove("open"));
  
  if (!isVisible) {
    btn.classList.add("open");
  }
}
