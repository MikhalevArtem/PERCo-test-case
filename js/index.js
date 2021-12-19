const lightbox = document.querySelector(".lightbox");
const lightboxOverlay = lightbox.querySelector(".lightbox__overlay");
let lightboxImage = lightbox.querySelector(".lightbox__img > img");
const lightboxClose = lightbox.querySelector(".lightbox__close");
const images = document.querySelectorAll(".gallery__img");
const transitionTime = 300; //время анимации лайтбокса

function openLightbox(path) {
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
  lightboxImage.setAttribute("src", path);
  lightbox.classList.add("lightbox_open");
  document.body.style.paddingRight = lockPaddingValue;
  document.body.style.overflow = "hidden";
}

function closeLightbox(transitionTime) {
  lightbox.classList.remove("lightbox_open");
  setTimeout(() => {
    lightboxImage.setAttribute("src", "");
    document.body.style.paddingRight = "";
    document.body.style.overflow = "";
  }, transitionTime);
}

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    e.preventDefault();
    let path = image.querySelector(".gallery__img > img").getAttribute("src");
    openLightbox(path);
  });
});

lightboxClose.addEventListener("click", (e) => {
  e.preventDefault();
  closeLightbox(transitionTime);
});

lightboxOverlay.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target === lightboxOverlay) {
    closeLightbox(transitionTime);
  }
});
