export const goTo = (id) => {
  const target = document.getElementById(id);
  if (!target) return;
  if (window.portfolioScrollTo) {
    window.portfolioScrollTo(target);
    return;
  }
  target.scrollIntoView({ behavior: "smooth", block: "start" });
};
