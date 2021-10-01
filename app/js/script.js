const main_section = document.querySelector(".hero");
const toggle_btn = document.querySelector(".toggle_btn");
function toggle() {
  if (main_section.classList.contains("light-theme")) {
    main_section.classList.remove("light-theme");
    main_section.classList.add("dark-theme");
  } else {
    main_section.classList.remove("dark-theme");
    main_section.classList.add("light-theme");
  }
}
