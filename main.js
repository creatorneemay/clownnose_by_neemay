function preload(){}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on("pose",getposes);
}
function draw(){
    image(video,0,0,400,400)
}
function modelloaded(){
    console.log("posenet model is loaded")
}
function getposes(results){
    if(results.length>0){
        console.log(results)
        nosex=results[0].pose.nose.x
        nosey=results[0].pose.nose.y
        console.log(nosex,nosey)
    }
}