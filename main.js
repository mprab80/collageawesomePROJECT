var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();
 
function nithil2Start()
{
    recognition.start();
} 
recognition.onresult=function(event){
    var content=event.results[0][0].transcript;
    document.getElementById("nithilTextbox").innerHTML=content;
    console.log(content);
    if (content=="take my selfie"){
    
        takeMySelfie()
    }
}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function takeMySelfie(){
    var synth=window.speechSynthesis;
    data="Taking your next selfie in 5 seconds";
    var sayThis=new SpeechSynthesisUtterance(data);
    synth.speak(sayThis);
    Webcam.attach(camera);
    setTimeout(function(){
        comeOnTakeASelfie();
        save();
    },5000);
}
Webcam.set({
    width:350,
    height:250,
    image_format:'png',
    png_quality:90
});
var result1Filled=false, result2Filled=false,result3Filled=false;
function comeOnTakeASelfie(){
    Webcam.snap(function(data_uri){
        if(result1Filled == false ){
            document.getElementById("result1").innerHTML='<img src="'+data_uri+'"/>';
            result1Filled=true;
        } else if(result2Filled == false ){
            document.getElementById("result2").innerHTML='<img src="'+data_uri+'"/>';
            result2Filled=true;
        } else if(result3Filled == false ){
            document.getElementById("result3").innerHTML='<img src="'+data_uri+'"/>';
            result3Filled=true;
        }
        
    });
}