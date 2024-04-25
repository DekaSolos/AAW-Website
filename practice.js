document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slides > div");
    const topImage = document.querySelector(".RBXwindow img");
    const topImageContainer = document.querySelector(".RBXwindow");
    const topInnerSquare = document.querySelector('.RBXwindow .before')
    const marketFilters = document.querySelector(".MarketFilters");
    const sliderContainer = document.querySelector(".slides");
    
    // Switch background gradient
    const objGradients = {
      gradient1: 'linear-gradient(43deg, rgba(164,127,220,1) 0%, rgba(11,24,22,1) 100%)',
      gradient2: 'linear-gradient(43deg, rgba(255,255,255,1) 0%, rgba(8,8,8,1) 100%)',
      gradient3: 'linear-gradient(90deg, rgba(47,56,47,1) 16%, rgba(5,22,14,1) 67%)',
      gradient4: 'linear-gradient(43deg, rgba(176,220,127,1) 0%, rgba(115,51,109,1) 100%)',
      gradient5: 'linear-gradient(43deg, rgba(220,168,127,1) 0%, rgba(57,54,253,1) 100%)',
    };
    
    // Switch top image
    const objImages = {
      image1: '/img/image_1',
      image2: '/img/image_2',
      image3: '/img/image_3',
      image4: '/img/image_4',
      image5: '/img/image_5',
    }
  
    // Switch box-shadow for top image
    const objBoxShadowTopImage = {
        boxShadowTopImage1: '0px 0px 20px rgba(25, 151, 247, 0.76)',
        boxShadowTopImage2: '0px 0px 20px rgba(170, 140, 42, 0.76)',
        boxShadowTopImage3: '0px 0px 20px rgba(14, 108, 22, 0.76)',
        boxShadowTopImage4: '0px 0px 20px rgba(87, 204, 97, 0.76)',
        boxShadowTopImage5: '0px 0px 20px rgba(224, 151, 109, 0.76)',
    };
  
    // Switch border top image
    const objBorderTopImage = {
      borderTopImage1: '#5099b4',
      borderTopImage2: '#c94a98',
      borderTopImage3: '#05677a',
      borderTopImage4: '#bf83a4',
      borderTopImage5: '#124a87',
    }
  
    // Switch border slider
    const objBorderSlided = {
      borderSlider1: '5px solid #5099b4',
      borderSlider2: '5px solid #c94a98',
      borderSlider3: '5px solid #05677a',
      borderSlider4: '5px solid #bf83a4',
      borderSlider5: '5px solid #124a87',
    };
  
    // Switch border inner top image
    const objInnerSquareTopBackground = {
      backgroundInnerSquare1: 'red',
      backgroundInnerSquare2: 'white',
      backgroundInnerSquare3: 'green',
      backgroundInnerSquare4: 'blue',
      backgroundInnerSquare5: 'orange',
    };
  
  
    
    // Function to update the slider and top image based on the clicked index
    const updateSlider = (index) => {
      console.log(`Updating to slide ${index + 1}`);
      
      //! Update the background gradient for .MarketFilters
      const gradientKey = `gradient${index + 1}`;
      const newGradient = objGradients[gradientKey];
      marketFilters.style.background = newGradient;
  
      //! Update the top image
      const imageKey = `image${index + 1}`;
      const newImageSrc = `${objImages[imageKey]}.png`; // Adjust resolution suffix
      topImage.src = newImageSrc;
  
      //! Update box-shadow for .RBXwindow img
      const boxShadowKey = `boxShadowTopImage${index + 1}`;
      const newBoxShadow = objBoxShadowTopImage[boxShadowKey];
      topImage.style.boxShadow = newBoxShadow;
      // topImage.style.filter = 'blur(2px)';
  
      //! Update top image border
        const borderTopKey = `borderTopImage${index + 1}`;
        const newBorderTop = objBorderTopImage[borderTopKey];
        topImageContainer.style.border = `5px solid ${newBorderTop}`;
  
      //! Update border for every slide
      const borderSliderKey = `borderSlider${index + 1}`;
      const newBorderSlider = objBorderSlided[borderSliderKey];
      slides.forEach((slide) => {
        slide.style.border = newBorderSlider;
      });
  
      //! Update background for .RBXwindow::before
      // Update background for .RBXwindow::before
      const backgroundInnerSquareKey = `backgroundInnerSquare${index + 1}`;
      const newBackgroundInnerSquare = objInnerSquareTopBackground[backgroundInnerSquareKey];
  
      // update the before element
      topInnerSquare.style.background = newBackgroundInnerSquare;
  
  
      //? Update the slider position
      sliderContainer.scrollTo({
        left: index * sliderContainer.clientWidth,
        behavior: "smooth",
      });
    };
  
    // Attach click event listeners to navigation links
    const navigationLinks = document.querySelectorAll(".gamecontainer > a");
    navigationLinks.forEach((link, index) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
  
        // Logging for debugging
        console.log(`Clicked on link ${index + 1}`);
  
  
        // Update the slider based on the clicked index
        updateSlider(index);
      });
      });
  });
  