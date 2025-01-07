// Counter Animation Logic
const counters = document.querySelectorAll(".white-bar h1");
const targetNumbers = [1500, 30]; // Replace with your target numbers
const duration = 2000; // Total time for all counters to complete in milliseconds

function countUp(counter, targetNumber, steps, intervalTime) {
    let currentCount = 0;
    const increment = Math.ceil(targetNumber / steps); // Calculate increment per step

    const count = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetNumber) {
            currentCount = targetNumber; // Ensure it doesn't exceed the target
            clearInterval(count);
        }
        counter.textContent = currentCount + "+";
    }, intervalTime);
}

function syncCounters(counters, targetNumbers, duration) {
    const steps = 100; // Total steps for the counter animation
    const intervalTime = duration / steps; // Time per step for synchronization

    counters.forEach((counter, index) => {
        countUp(counter, targetNumbers[index], steps, intervalTime);
    });
}

// Start synchronized counters
syncCounters(counters, targetNumbers, duration);



// Dynamic Image Loader
const galleryContainer = document.getElementById("galleryContainer");

const fetchImages = async () => {
  try {
    // Fetch image paths from the server
    // const response = await fetch("http://192.168.164.103:5000/get-images");
    const response = await fetch("https://d31a-2409-40d4-15b-15da-bce1-7a46-3f5d-8100.ngrok-free.app/get-images");
    const imagePaths = await response.json();

    // Dynamically create Swiper slides for each image
    imagePaths.forEach((path) => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");
      slide.innerHTML = `
                <div class="image-wrapper">
                    <img src="${path}" alt="Gallery Image">
                </div>`;
      galleryContainer.appendChild(slide);
    });

// Initialize Swiper after images are loaded
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20, // Add spacing between slides
  autoplay: {
    delay: 2000, // Set autoplay delay
    disableOnInteraction: false, // Autoplay continues after interaction
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "coverflow", // You can change this to 'coverflow' or other effects
  speed: 1500, // Set transition speed in ms
  coverflowEffect: { // If you decide to use 'coverflow'
    rotate: 33,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

  } catch (error) {
    console.error("Error fetching images:", error);
  }
};

// Call the function to load images
fetchImages();


// Initialize Swiper after images are loaded
const swiper2 = new Swiper(".swiper2", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 2000, // Set autoplay delay
    disableOnInteraction: false, // Autoplay continues after interaction
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade", // Use fade effect for smooth transitions (other options: 'slide', 'cube', 'coverflow', 'flip')
  fadeEffect: {
    crossFade: true, // Enables cross-fade effect between slides
  },
  speed: 1000, // Set transition speed in ms
});


