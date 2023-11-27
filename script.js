const text1 = ["visu vasaru es stradaju uz c++ projekta saucams Weave cs2 (aka cheat for cs2)", "novirzoties no \"gamehacking\" es ari iemacijos daudz jauna par trigonometriju un parejo", "beidzot ar pedejo vasaras menesi es bikit satupiju un papisu visu naudu kas ir bedigi bet nav letali"];
const text2 = ["del ta es vispar nestradaju ar html css un js visu so laiku, bet man ir laba atmina ;)", "izradas ka trigonometrija nav tik gruta un isteniba ir loti viegla", "un protams del ta ka es papisu visu naudu man nav ko est :<\nps: paypal(denmenziedu@gmail.com)"];




let main_theme = document.getElementById("oao")
let set1 = document.getElementById("text1");
let set2 = document.getElementById("text2");
let set_month = document.getElementById("month_id");
let button_left = document.getElementById("button_left");
let button_right = document.getElementById("button_right");

let id = 0;



set1.innerText = text1[id];
set2.innerText = text2[id];
set_month.innerText = id+1+": menesis";

function check_main(id){
    if(id == 0){
        main_theme.innerText = "MAIN THEME";
    }else{
        main_theme.innerText = "";
    }
}


function next_page(){
    id += 1;
    if(id > 2){
        
        button_right.style.cursor = "none";
        button_right.style.opacity = 0;
        id = 2;
    }
    check_main(id);
    set1.innerText = text1[id];
    set2.innerText = text2[id];
    set_month.innerText = id+1+": menesis";
}
function previous_page(){
    id -= 1;
    if(id < 0){
        button_left.style.cursor = "none";
        button_left.style.opacity = 0;
        id = 0;
    }
    check_main(id);
    set1.innerText = text1[id];
    set2.innerText = text2[id];
    set_month.innerText = id+1+": menesis";
}

