//InteractionObserver for the guidance page
const contents = document.querySelectorAll('#main-content > div:nth-child(1), #main-content > div:nth-child(2), #contents div nav, #main-content > div:nth-child(4)')
observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      document.getElementById("backToTop").classList.add("govuk-sticky-element--hidden");
    } else {
      document.getElementById("backToTop").classList.remove("govuk-sticky-element--hidden");
    }
  });
});

window.onload = function() {
document.getElementById("backToTop").classList.add("govuk-sticky-element--hidden");
};



contents.forEach(contents => {
  observer.observe(contents);
});
