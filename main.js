nosex="";
nosey="";
function preload(){
    clownnose=loadImage("https://i.postimg.cc/8kynJ3r3/red-nose-day-2016-by-jmk-prime-on-deviantart-red-nose-png-894-894.png");
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",getposes);
}
function modelloaded(){
    console.log("posenet model is loaded");
}
function getposes(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log(nosex,nosey);
    }
}
function draw(){
    image(video,0,0,500,500);
    fill(255,0,0);
    stroke(0,0,0);
    circle(nosex,nosey,20);
    image(clownnose,nosex-16,nosey-16,40,40);
}
function takesnapshot(){
    save('NeemayIsGreat.jpg')
}