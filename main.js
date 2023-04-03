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
    
    }
    
    function modelLoaded(){
    console.log("loaded");
    }
    
    function gotPose(results){
    if(results.length > 0){
        console.table(results);
        console.log("noseX =",results[0].pose.nose.x);
        console.log("nosey =",results[0].pose.nose.y);
    }
    }