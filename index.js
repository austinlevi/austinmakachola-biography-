function toggleSection(id, btn) {
  const section = document.getElementById(id);
  const isVisible = section.style.display === "block";

  section.style.display = isVisible ? "none" : "block";

  // Toggle the .open class for chevron rotation
  if (isVisible) {
    btn.classList.remove("open");
  } else {
    btn.classList.add("open");
  }
}
