function check() {
   var score = 0;
   var q1=document.quiz.question1.value;
   var q2=document.quiz.question2.value;
   var q3=document.quiz.question3.value;  
   var outcome= document.getElementById("outcome");
   var quiz=document.getElementById("quiz")

   //Adding scores//
   if (q1==="HTML") {score++};
   if (q2==="JS") {score++};
   if (q3==="No") {score++};  
   quiz.style.display= "none";
  
   //Grading//
   if (score=3) {
      outcome.textContent = "You have excellently passed!";
   } else if (score=2<3) {
      outcome.textContent = "You have fairly passed";
   } else {
      outcome.textContent = "Poor score. You may need to retake the test!"
   }{
   }
}