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
    const response = await fetch("https://d31a-2409-40d4-15b-15da-bce1-7a46-3f5d-8100.ngrok-free.app/get-images", {
      headers: { "ngrok-skip-browser-warning": "true" },
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const contentType = response.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      console.error("Raw Response:", await response.text());
      throw new Error("Expected JSON, but got a different response.");
    }

    const imagePaths = await response.json();
    imagePaths.forEach((path) => {
      galleryContainer.innerHTML += `
        <div class="swiper-slide">
          <div class="image-wrapper">
            <img src="${path}" alt="Gallery Image">
          </div>
        </div>`;
    });

    new Swiper(".swiper", {
      direction: "horizontal",
      loop: true,
      slidesPerView: 3,
      spaceBetween: 20,
      autoplay: { delay: 2000, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
      effect: "coverflow",
      speed: 1500,
      coverflowEffect: { rotate: 33, stretch: 0, depth: 100, modifier: 1, slideShadows: true },
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


