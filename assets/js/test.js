const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
// for (let i = 0; i < navigationLinks.length; i++) {
//   navigationLinks[i].addEventListener("click", function () {
//     for (let i = 0; i < pages.length; i++) {
//       if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
//         pages[i].classList.add("active");
//         navigationLinks[i].classList.add("active");
//         window.scrollTo(0, 0);
//       } else {
//         pages[i].classList.remove("active");
//         navigationLinks[i].classList.remove("active");
//       }
//     }
//   });
// }

// console.log(navigationLinks.length)
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    // console.log(navigationLinks[i]);
    for (let i = 0; i < pages.length; i++) {
    //   console.log(pages[i].dataset.page);
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        // console.log(this.innerHTML.toLowerCase(),'heml' )
        // console.log(pages[i].dataset.page)
        // console.log(pages[i])
        // console.log(navigationLinks[i])
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });

  // console.log(i)
}
