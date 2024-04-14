const $ = document;
const mainTextElem = $.getElementById ( "main-text" );
const openMenuBtn = $.getElementById ( "open-menu-btn" );
const closeMenuBtn = $.getElementById ( "close-menu-btn" );
const menuItemsBox = $.getElementById ( "menu-items" );

window.addEventListener ("scroll", () => {
  const headerTitle = $.getElementById ( "header-title" );
  const moon = $.getElementById ( "moon" );
  const frontMountain = $.getElementById ( "front-mountain" );
  // const leftCloud = $.getElementById ( "left-cloud" );
  // const rightCloud = $.getElementById ( "right-cloud" );
  const mainTitleElem = $.getElementById ( "main-title" );
  const footerMoon = $.getElementById ( "footer-moon" );
  const scrollPosition = window.scrollY;

  headerTitle.style.transform = `translateY(${scrollPosition * 0.60}%)`;
  moon.style.transform = `translateY(${scrollPosition * 1}%)`;
  frontMountain.style.transform = `translateY(${scrollPosition * 0.25}%)`;
  // leftCloud.style.transform = `translateX(-${scrollPosition * 0.60}%)`;
  // rightCloud.style.transform = `translateX(${scrollPosition * 0.60}%)`;
  window.innerWidth > 900 ? mainTitleElem.style.transform = `translateX(${scrollPosition * 0.04}%)` : mainTitleElem.style.textAlign = "center";
  footerMoon.style.transform = `translate(-50%, -50%) rotate(${scrollPosition * 0.25}deg)`;
});


mainTextElem.addEventListener ("scroll", function () {
  const mainProgressTextElem = $.getElementById ( "main-progress-text" );

  mainProgressTextElem.style.width = `${ ( this.scrollTop / (this.scrollHeight - this.clientHeight) ) * 100 }%`;
});


openMenuBtn.addEventListener ("click", () => {
  openMenuBtn.classList.add("hidden");
  closeMenuBtn.classList.remove("hidden");
  menuItemsBox.className = "flex gap-4 flex-col items-center bg-darkPurple ring-2 ring-white w-40 h-screen absolute right-0 bottom-0 top-0 p-4 z-30";
});

closeMenuBtn.addEventListener ("click", () => {
  closeMenuBtn.classList.add("hidden");
  openMenuBtn.classList.remove("hidden");
  menuItemsBox.className = "flex gap-4 flex-col items-center bg-darkPurple ring-2 ring-white w-40 h-screen absolute right-0 bottom-0 top-0 p-4 z-30 hidden";
});
