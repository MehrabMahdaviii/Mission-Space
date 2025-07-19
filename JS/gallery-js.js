
document.addEventListener("DOMContentLoaded", () => {
  const mainImg = document.querySelector(".main-img");
  const caption = document.querySelector(".caption");
  const thumbs = document.querySelectorAll(".img-1");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");



  const images = Array.from(thumbs);
  let currentIndex = 0;

  function updateMain(index) {
    const current = images[index];
  
    mainImg.classList.add("fade");
  
    setTimeout(() => {
      mainImg.src = current.src;
      mainImg.classList.remove("fade");
  
      caption.classList.remove("show");
      setTimeout(() => {
        caption.textContent = current.getAttribute("data-caption");
        caption.classList.add("show");
      }, 200);
    }, 200); 
    
  
    images.forEach(img => img.classList.remove("active"));
    current.classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateMain(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateMain(currentIndex);
  });

  images.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      currentIndex = index;
      updateMain(currentIndex);
    });
  });

  updateMain(currentIndex);
});



