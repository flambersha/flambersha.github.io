
let engWords = ["dog", "snake", "key", "pillow", "school", "tree", "flower", "sky", "city", "bird"];

let ukrWords = ["собака", "змія", "ключ", "подушка", "школа", "дерево", "квітка", "небо", "місто", "птах"];

let input = $("input[type=text]");

let modal = $('#myModal');

let eng;
let userPoints = 0;
let cPoints = 0;
let count = 0;

$('.close').click(() => {
    modal.hide();
  });
let showWord = () => {
    if(count < 10){
        eng = Math.floor(Math.random() * engWords.length);
        $("#card>div").text(engWords[eng]);
        count++;
        $("#current").text(`${count}/10`);
    }
    else{
        $("#checkBtn").unbind();
        result();
        modal.show();
    }
}

let removeUsed = (arr, value) => {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
}
let result = () => {
    console.log(userPoints);
    switch(userPoints){
        case 0:
        case 1:
        case 2:
        case 3:
            $("#modalText").text(` Ваші бали: ${userPoints} з 10.\n Є над чим працювати!`);
            break;
        case 4:
        case 5:
        case 6:
        case 7:
            $("#modalText").text(` Ваші бали: ${userPoints} з 10.\n Непогано!`);
            break;
        case 8:
        case 9:
        case 10:
            $("#modalText").text(` Ваші бали: ${userPoints} з 10.\n Чудово!`);
            break;
    }
}
showWord();
     let play = () => {
            if(ukrWords[eng] == input.val()){
                    userPoints++;
                    $("#user").text(userPoints);
            }
            else {
                cPoints++;
                $("#dictionary").text(cPoints);
            }
            engWords = removeUsed(engWords, engWords[eng]);
            ukrWords = removeUsed(ukrWords, ukrWords[eng]);
            input.val('');
            showWord();
    }
    $("#checkBtn").bind('click', play);
