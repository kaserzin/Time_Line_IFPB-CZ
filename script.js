document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item-linha-tempo");

  const observerOptions = {
    root: null, 
    threshold: 0.1, 
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      } else {
        entry.target.classList.remove("fade-in");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  items.forEach((item) => observer.observe(item));
});
