nose_X = 0;
nose_Y = 0;

function preload(){
    node = loadImage("nustache.png");
}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPose);
}

function take_snapshot(){
    image_name = document.getElementById("naming_input").value;
    save(image_name+".jpg");
}

function draw(){
 image(video, 0,0, 300,300);
image(node, nose_X-20, nose_Y, 40, 25);
}

function modelLoaded(){
console.log("loaded");
}

function gotPose(results){
if(results.length > 0){
    console.table(results);
    console.log("noseX =",results[0].pose.nose.x);
    console.log("nosey =",results[0].pose.nose.y);
    nose_X = results[0].pose.nose.x;
    nose_Y = results[0].pose.nose.y;
}
}