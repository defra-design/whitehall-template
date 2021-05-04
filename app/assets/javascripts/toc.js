//InteractionObserver for the guidance page
const contents = document.querySelectorAll('.responsive-bottom-margin');
observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry.intersectionRatio);
    if (entry.intersectionRatio > 0) {
      console.log('in the view');
      document.getElementById("backToTop").classList.remove("govuk-sticky-element--hidden");
    } else {
      console.log('out of view');
      document.getElementById("backToTop").classList.add("govuk-sticky-element--hidden");
    }
  });
});

window.onload = function() {
document.getElementById("backToTop").classList.add("govuk-sticky-element--hidden");
};



contents.forEach(contents => {
  observer.observe(contents);
});
