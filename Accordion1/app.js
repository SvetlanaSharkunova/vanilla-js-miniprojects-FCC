const questionList = document.querySelectorAll(".questions__item");

questionList.forEach(function(questionItem) {

  const header = questionItem.querySelector(".questions__header");

  header.addEventListener("click", function() {

    questionList.forEach(function(question) {
      if (questionItem !== question) {
        question.classList.remove("show");
      }
    });

    questionItem.classList.toggle("show");
  });
  
});