var battlefield = document.querySelector("#battlefield");
var fileNumber;
for (var  i = 1; i <=16; i++){  
    var rank = document.createElement("div");
        rank.classList+= "rank";
    battlefield.append(rank)
    for (var  a = 1; a <=16; a++){
        switch (a){
            case 1 :
                fileNumber = 'a';
                break;
            case 2 :
                fileNumber = 'b';
                break;
            case 3 :
                fileNumber = 'c';
                break;
            case 4 :
                fileNumber = 'd';
                break;
            case 5 :
                fileNumber = 'e';
                break;
            case 6 :
                fileNumber = 'f';
                break;
            case 7 :
                fileNumber = 'g';
                break;
            case 8 :
                fileNumber = 'h';
                break;
    case 9 :
                fileNumber = 'i';
                break
            case 10 :
                fileNumber = 'j';
                break;
            case 11 :
                fileNumber = 'k';
                break;
            case 12 :
                fileNumber = 'l';
                break;
            case 13 :
                fileNumber = 'm';
                break;
            case 14 :
                fileNumber = 'n';
                break;
            case 15 :
                fileNumber = 'o';
                break;
            case 16 :
                fileNumber = 'p';
                break;
        }
        var file = document.createElement('div');
            //file.textContent =  fileNumber + i ;
            file.classList += 'file '
        rank.append(file)
    }
}
/*
for (var i = 0; i < 16; i+=2){
    document.querySelectorAll(".file")[i].classList+=" alt-1"
}
for (var i = 1; i < 16; i+=2){
    document.querySelectorAll(".file")[i].classList+=" alt-2"
}
for (var i = 16; i < 32; i+=2){
    document.querySelectorAll(".file")[i].classList+=" alt-2"
}
for (var i = 17; i < 32; i+=2){
    document.querySelectorAll(".file")[i].classList+=" alt-1"
}
for (var i = 32; i < 48; i+=2){
    document.querySelectorAll(".file")[i].classList+=" alt-1"
}
for (var i = 33; i < 48; i+=2){
    document.querySelectorAll(".file")[i].classList+=" alt-2"
}
for (var i = 48; i < 64; i+=2){
    document.querySelectorAll(".file")[i].classList+=" alt-2"
}
for (var i = 49; i < 64; i+=2){
    document.querySelectorAll(".file")[i].classList+=" alt-1"
}
for (var i = 64; i < 80; i+=2){
    document.querySelectorAll(".file")[i].classList+=" alt-1"
}
for (var i = 65; i < 80; i+=2){
    document.querySelectorAll(".file")[i].classList+=" alt-2"
}
for (var i = 80; i < 96; i+=2){
    document.querySelectorAll(".file")[i].classList+=" alt-2"
}
for (var i = 96; i < 112; i+=2){
    document.querySelectorAll(".file")[i].classList+=" alt-1"
}
for (var i = 64; i < 80; i+=2){
    document.querySelectorAll(".file")[i].classList+=" alt-1"
}
*/