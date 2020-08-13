debugger
function check() {
    var q1 = document.one.q1.value;
    var q2 = document.two.q2.value;
    var q3 = document.three.q3.value;
    var q4 = document.four.q4.value;
    var q5 = document.five.q5.value;
    var q6 = document.six.q6.value;
    var q7 = document.seven.q7.value;
    var q8 = document.eight.q8.value;
    var q9 = document.nine.q9.value;
    var q10 = document.ten.q10.value;
    var count = 0;

    if (q1 == "a" ){
        count++;
    }
    
    if (q2 == "a"){
        count++;
    }
    
    if (q3 == "c"){
        count++;
    }
    
    if (q4 == "a"){
        count++;
    }

    if (q5 == "a"){
        count++;
    }

    if (q6 == "b"){
        count++;
    }

    if (q7 == "a"){
        count++;
    }

    if (q8 == "a"){
        count++;
    }

    if (q9 == "c"){
        count++;
    }

    if (q10 == "c"){
        count++;
    }

    if (count == 10) {
        confirm("Молодець! Пропоную вибрати на вечір один з них. Бали:"+count+"");
    }
    else if (count >= 7 && count <= 9){
        confirm("Ти не бачив всіх фільмів? Бали:"+count+"");
    }
    else {
        confirm("Тобі меньше 18? Бали:"+count+"");
    }
}

