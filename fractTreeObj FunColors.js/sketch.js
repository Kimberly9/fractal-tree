var tree = [];
var leaves = [];

var count = 0;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(600,600);

  var a = createVector(width /2, height);
  var b = createVector(width / 2, height -100);
  var root = new Branch(a, b);

  tree[0] = root;
}

function mousePressed(){
  for(var i = tree.length - 1; i >= 0; i--){
    if(!tree[i].finished){
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    tree[i].finished = true;
  }
  count++;
  if (count === 6){
    for(var i = 0; i < tree.length; i++){
       if(!tree[i].finished){
         var leaf = tree[i].end.copy();
         leaves.push(leaf);
       }
    }
  }
}

function draw() {
  background(51);

  for (var i =0; i < tree.length; i++){
      tree[i].show();
   }

   for (var i =0; i < leaves.length; i++){
       fill(r,g,b);
       noStroke();
       ellipse(leaves[i].x, leaves[i].y, 8, 8);
       //leaves[i].y += random(0, 2);
       r = random(0,255);
       g = random(0,255);
       b = random(0,255);
       if (count === 7){
         for (var i =0; i < leaves.length; i++){
             fill(r,g,b);
             noStroke();
             ellipse(leaves[i].x, leaves[i].y, 8, 8);
             leaves[i].y += random(0, 3);
             r = random(0,255);
             g = random(0,255);
             b = random(0,255);
     }
    }
}
};
