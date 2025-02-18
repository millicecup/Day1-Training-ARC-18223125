// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })
  
  // Slider functionality
  function createSlider(sliderId) {
    const slider = document.getElementById(sliderId)
    const slides = slider.querySelectorAll(".slide")
    const prevButton = slider.parentElement.querySelector(".prev")
    const nextButton = slider.parentElement.querySelector(".next")
    let currentIndex = 0
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index)
      })
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length
      showSlide(currentIndex)
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length
      showSlide(currentIndex)
    }
  
    prevButton.addEventListener("click", prevSlide)
    nextButton.addEventListener("click", nextSlide)
  
    showSlide(currentIndex)
  }
  
  // Initialize sliders
  createSlider("skills-slider")
  createSlider("projects-slider")
  
  