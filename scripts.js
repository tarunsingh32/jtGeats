
document.addEventListener("DOMContentLoaded", () => {
  const carouselInner = document.querySelector("#carouselInner");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  let currentIndex = 0;

  const updateCarousel = () => {
    const totalItems = document.querySelectorAll(".food-item").length;
    const itemsVisible = 3;

    if (currentIndex < 0) {
      currentIndex = 0; 
    } else if (currentIndex > totalItems - itemsVisible) {
      currentIndex = totalItems - itemsVisible; 
    }

    const offset = -currentIndex * (100 / itemsVisible);
    carouselInner.style.transform = `translateX(${offset}%)`;
  };

  prevButton.addEventListener("click", () => {
    currentIndex -= 1; 
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentIndex += 1; 
    updateCarousel();
  });

  updateCarousel(); 
});

document.getElementById('play-button').addEventListener('click', () => {
  const video = document.createElement('video');
  video.src = '';
  video.controls = true;
  video.autoplay = true;
  document.querySelector('.video-thumbnail').innerHTML = '';
  document.querySelector('.video-thumbnail').appendChild(video);
});


var modal = document.getElementById('requestDishModal');


var btn = document.getElementById('requestDishBtn');


var span = document.getElementsByClassName('close')[0];


var cancelBtn = document.getElementById('cancelBtn');
 
btn.onclick = function() {
    modal.style.display = 'block';
}


span.onclick = function() {
    modal.style.display = 'none';
}


cancelBtn.onclick = function() {
    modal.style.display = 'none';
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


var cartModal = document.getElementById('cartModal');


var cartIconButton = document.getElementById('cartIcon');


var closeCartModalButton = document.getElementsByClassName('close-cart-modal')[0];


var backToMenuButton = document.getElementById('backToMenuButton');


cartIconButton.onclick = function() {
    cartModal.style.display = 'flex';
}

closeCartModalButton.onclick = function() {
    cartModal.style.display = 'none';
}

backToMenuButton.onclick = function() {
    cartModal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == cartModal) {
        cartModal.style.display = 'none';
    }
}



