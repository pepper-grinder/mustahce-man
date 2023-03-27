function setup(){
canvas = createCanvas(300,300);
canvas.center();
}

function take_snapshot(){
    name = document.getElementById("naming_input").value;
    save(name+".jpg");
}