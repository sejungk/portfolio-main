document.addEventListener('DOMContentLoaded', () => {
  const projectLinks = document.querySelectorAll('.main__project-links');
  const linkColors = [
    '#ADE3F0', '#F6C0C0', '#C2B6E5', '#E3B8E3', '#B2BBDC', '#EDBD9A', '#EFE7BB'
  ];

  projectLinks.forEach((link, index) => {
    link.addEventListener('mouseover', () => {
      link.style.backgroundColor = linkColors[index];
    });

    link.addEventListener('mouseout', () => {
      link.style.backgroundColor = ''; // Reset to default background
    });
  });
});
