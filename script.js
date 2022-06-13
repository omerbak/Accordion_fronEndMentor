const questions = document.querySelectorAll(".question");
const faqs = document.querySelectorAll('.faq-box');



/* questions.forEach((item) => {
    item.addEventListener("click", (e) => {
        if(item.parentElement.classList.contains("show")){
        item.parentElement.classList.toggle("show");
        } else{
            faqs.forEach((item) => {
                item.classList.remove("show");
            })
            item.parentElement.classList.toggle("show");
        }
        
    })
})
 */
const allAnswerWrappers = document.querySelectorAll(".answer-wrapper");

// the function gives the user the control to leave multiple answers open
/* questions.forEach((item) => {
    item.addEventListener("click", (e) => {

        item.parentElement.classList.toggle("show");

        //get the answer-wrapper for the selected question
        const anwerWrapper = item.nextElementSibling;
        if(item.parentElement.classList.contains("show")){
            anwerWrapper.style.maxHeight = anwerWrapper.scrollHeight + "px";
        } else{
            anwerWrapper.style.maxHeight = "0";
        }
        
    })
}) */


// this function closes all the other answers 
questions.forEach((item) => {
    item.addEventListener("click", (e) => {
       /*  allAnswerWrappers.forEach(item => {
            item.style.maxHeight = "0";
        }) */
        
        //get the answer-wrapper for the selected question
        const anwerWrapper = item.nextElementSibling;
        if(item.parentElement.classList.contains("show")){
            item.parentElement.classList.toggle("show");
            anwerWrapper.style.maxHeight = "0"
        } else{
            faqs.forEach((item) => {
                item.classList.remove("show");
            })
            allAnswerWrappers.forEach(item => {
                item.style.maxHeight = "0";
            }) 
            item.parentElement.classList.toggle("show");
            anwerWrapper.style.maxHeight = anwerWrapper.scrollHeight + "px";
        }
       
    })
})