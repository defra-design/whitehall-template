


//InteractionObserver for the guidance page
//source https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

const numSteps = 20.0;

let boxElement;
let prevRatio = 0.0;

// Set things up
window.addEventListener("load", (event) => {
  boxElement = document.querySelector(".govspeak");

  createObserver();
}, false);



function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}


function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i=1.0; i<=numSteps; i++) {
    let ratio = i/numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      document.getElementById("backToTop").classList.remove("govuk-sticky-element--hidden");
    } else {
      document.getElementById("backToTop").classList.add("govuk-sticky-element--hidden");
    }

    prevRatio = entry.intersectionRatio;
  });
}
