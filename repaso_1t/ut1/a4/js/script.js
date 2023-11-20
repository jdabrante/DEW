function correct(question_id) {
    question = document.getElementById(question_id);
    r_answer = question.getAttribute("value");
    if (r_answer == 'T') {
        question.style.fontSize = '25px';
        question.style.color = 'green';
    } else {
        question.style.fontSize = '25px';
        question.style.color = 'red';
    }
}

function wrong(question_id){
    question = document.getElementById(question_id);
    r_answer = question.getAttribute("value");
    if (r_answer == 'F') {
        question.style.fontSize = '25px';
        question.style.color = 'green';
    } else {
        question.style.fontSize = '25px';
        question.style.color = 'red';
    }
}