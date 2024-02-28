document.addEventListener("DOMContentLoaded", function() {
    const tabContent = {
      tab1: "Content for Tab 1",
      tab2: "Content for Tab 2",
      tab3: "Content for Tab 3"
    };
  
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContentContainer = document.getElementById("tabContent");
  
    function handleTabClick(event) {
      const tabId = event.target.getAttribute("data-tab");
  

      tabLinks.forEach(link => {
        link.classList.remove("active");
      });
  
      
      event.target.classList.add("active");
  
 
      tabContentContainer.textContent = tabContent[tabId];
    }

    tabLinks.forEach(link => {
      link.addEventListener("click", handleTabClick);
    });
  });