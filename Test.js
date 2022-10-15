btn_a.addEventListener("click", f_t);
btn_ch.addEventListener("click", f_a);

function f_t (){
    console.log(a1.checked);
    console.log(a2.checked);
    console.log(a3.checked);
    console.log(a4.checked);

    if (a2.checked){
      corr.classList.remove("hidden");
      wrong_box.classList.add("hidden");
    }else{
      corr.classList.add("hidden");
      wrong_box.classList.remove("hidden");
    }
}

function f_a (){
    answer.classList.toggle("hidden");
    btn_ch.classList.toggle("opend");
}