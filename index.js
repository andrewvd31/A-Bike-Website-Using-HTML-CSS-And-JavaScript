let redBtn = document.getElementById("red");
let blueBtn = document.getElementById("blue");
let blackBtn = document.getElementById("black");
let bike = document.getElementById("bike");
let testDrive = document.getElementById("test-drive");

redBtn.onclick = function(){
  bike.style.backgroundImage = "url(BMW1.png)";
}

blueBtn.onclick = function(){
  bike.style.backgroundImage = "url(BMW2.png)";
}

blackBtn.onclick = function(){
  bike.style.backgroundImage = "url(BMW3.png)";
}

testDrive.onclick = function(){
  alert("Great.You have successfully registered for test drive")
}
