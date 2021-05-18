const accordionHeaders = document.querySelectorAll(".accordion-header");


accordionHeaders.forEach(function(accordionHeader) {

  const accordionBody = accordionHeader.nextElementSibling;
  let height = accordionBody.scrollHeight;
  let margin = 15;

  accordionHeader.addEventListener("click", function() {

    accordionHeaders.forEach(function(accordionItem) {
      if (accordionHeader !== accordionItem) {
        accordionItem.classList.remove("show");
        accordionItem.nextElementSibling.style.maxHeight = 0;
      }
      
    });
    
    accordionHeader.classList.toggle("show");
    if (accordionHeader.classList.contains("show")) {
      accordionBody.style.maxHeight = height + margin + "px";
    } else {
      accordionBody.style.maxHeight = 0;
    }
  });

});

