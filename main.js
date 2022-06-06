x=0;
y=0;
draw_apple="";

var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition()
function start() {
    document.getElementById("status").innerHTML="system is listening please speak"
    recognition.start()
}
recognition.onresult=function(event) {
    console.log(event)
    var content=event.results[0][0].transcript
    console.log(content)
    document.getElementById("status").innerHTML="The speech has been recognized as "+content
    if(content=="Apple" || content=="apple") {
        x=Math.floor(Math.random()*700)
        y=Math.floor(Math.random()*400)
        draw_apple="set"
        document.getElementById("status").innerHTML= to_number + "Apples drawn";
    }
}



function setup() {
    canvas=createCanvas(900 , 600);


}
  
function draw() {
    if(draw_circle=="set") {
    radius=Math.floor(Math.random()*100)
    apple(x , y )
    draw_apple=""
    document.getElementById("status").innerHTML="apple is drawn";
    }
}

var speak_data=(to_number + "Apples drawn")

  speak()