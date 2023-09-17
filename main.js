function preload(){

}
function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(700, 280);

    video=createCapture(VIDEO);
    video.hide();
    
}
function draw(){
    image(video,100,100,440,300);
    fill("green");
    stroke("green");
    rect(60,40,500,30);
    rect(60,410,500,30);
    rect(60,40,30,380);
    rect(560,40,30,380)
    fill("red");
    stroke("red");
    circle(60,50,50);
    circle(580,50,50);
    circle(60,420,50);
    circle(580,420,50);
}
function take_snapshot(){
    save("student.png");
}
