
const heading = document.querySelector('#hero-title');
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      heading.animate([{ opacity: .3, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 700, easing: 'ease-out' });
      observer.disconnect();
    }
  });
  observer.observe(heading);
}
