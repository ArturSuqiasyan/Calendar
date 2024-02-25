
const images = [
    'image1',
    'image2',
    'image3',

  ];
  
  let currentIndex = 0;
  const sliderImg = document.getElementById('sliderImg');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  
  function updateImage() {
    sliderImg.src = images[currentIndex];
  }
  
 
  nextBtn.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    updateImage();
  });
  

  prevBtn.addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    updateImage();
  });
  
  
  updateImage();

