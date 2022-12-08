function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(400, 400);
    canvas.position(550, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("#d1d1d1");
}

function modelLoaded(){
    console.log('poseNet is Initialized');
}

function gotPoses (results){
     if(results.length > 0)
     {
        console.log(results);
     }
}