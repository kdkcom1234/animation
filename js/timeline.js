(function () {
  const containers = document.querySelectorAll('.timeline .container');

  function move(entries) {
    if (entries[0].isIntersecting) {
      const container = entries[0].target;
      container.classList.add('fade-in');
    }
  }

  containers.forEach((container) => {
    const observer = new IntersectionObserver(move, { threshold: 0.2 });
    observer.observe(container);
  });
})();
