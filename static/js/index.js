document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("main_img");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    // Defining an array of images....
    const images = [
"https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/KV_Hero_PC_Day-1_2X_EN._CB575892060_.jpg",
 "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Jupiter_2023/Event_without_cashback/Shoes/Unrec/1/3000._CB575795109_.jpg",
  " https://images-eu.ssl-images-amazon.com/images/G/31/saba/jup23/Kitchen---Jupiter---SA-hero-Fans-_3000x1200._CB575990912_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/31/saba/jup23/Kitchen---Jupiter---SA-hero-Fans-_3000x1200._CB575990912_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/VIDEOSITEL/D98343849_PC_Hero_3000x1200fin._CB575981851_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/Jupiter2023GW/Homepage_DesktopHeroTemplate_3000x1200_toys_2x-NEW._CB575816411_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/lshruthi/Jupiter/GW/Uber/D98467701_PC_Hero_3000x1200._CB575872300_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/Jupiter2023GW/Homepage_DesktopHeroTemplate_3000x1200_22June2023_rec._CB575785393_.jpg"];
    let currentIndex = 0;

    // Function to change the image to the next one
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        image.src = images[currentIndex];
        image.alt = `Image ${currentIndex + 1}`;
    }

    // Function to change the image to the previous one
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        image.src = images[currentIndex];
        image.alt = `Image ${currentIndex + 1}`;
    }

    // Attach click event listeners to the arrow buttons
    nextButton.addEventListener("click", nextImage);
    prevButton.addEventListener("click", prevImage);
});

function showTool() {
    var tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'block';
    
  }

  function hideTool() {
    var tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
  }
  