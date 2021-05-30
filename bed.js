objects = [];
status = "";

function preload(){
img = loadImage("bed.jpg");
}

function setup(){
canvas= createCanvas(640,420);
canvas.center();

ObjectDetector= ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML =" STATUS : DETECTING OBJECTS";
}

function draw(){
image(img,0,0,640,420);
if(status != ""){
    for(var i = 0;i<objects.length;i++){
    document.getElementById("status").innerHTML = "Status : Objects Detected";
    fill("#FF0000");
    percent = floor(objects[i].confidence*100);
    text(objects[i].label + " "+ percent + "%",objects[i].x+10,objects[i].y+20);
    noFill();
    stroke("#FF0000");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
    }


}

function modelLoaded(){
    console.log("MODEL LOADED!");
    status=true;
    ObjectDetector.detect(img,gotResults);
}

function gotResults(error,results){
if(error){
    console.error("error");
}
else{
    console.log(results);
    objects = results;
}
}


