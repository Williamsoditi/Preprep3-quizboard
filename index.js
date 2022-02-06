function check() {
   var score = 0;
   var q1=document.quiz.question1.value;
   var q2=document.quiz.question2.value;
   var q3=document.quiz.question3.value;
   var outcome= document.getElementById("result")
   if (q1=="HTML") {score++}
   if (q2=="JS") {score++}
   if (q3=="No") {score++}
   outcome.textContent = score;
}