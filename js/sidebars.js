/* global bootstrap: false */
(() => {
  'use strict';
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
})();

const sidebar = document.querySelector('#sidebar');
const toggleSidebarBtn = document.querySelector('.toggle-sidebar');

if (localStorage.getItem('sidebarSmall') === 'true') {
  sidebar.classList.add('sidebar-small');
} else {
  sidebar.classList.remove('sidebar-small');
}

const toggleSidebar = () => {
  if (localStorage.getItem('sidebarSmall') === 'true') {
    sidebar.classList.remove('sidebar-small');
    localStorage.setItem('sidebarSmall', 'false');
  } else {
    sidebar.classList.add('sidebar-small');
    localStorage.setItem('sidebarSmall', 'true');
  }
};

toggleSidebarBtn.addEventListener('click', toggleSidebar);
