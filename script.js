var colR = document.getElementById("colRed");
var colG = document.getElementById("colGreen");
var colB = document.getElementById("colBlue");
var colPickHTML = document.getElementById("colPick");

colPickHTML.addEventListener("input", changeCol, false);

changeCol();

function changeCol(e) {
  gblR = colR.value;
  gblG = colG.value;
  gblB = colB.value;
  document.body.style.backgroundColor = "rgb(" + gblR + "," + gblG + "," + gblB + ")";
  document.getElementById("colortext").innerHTML = "rgb(" + gblR + "," + gblG + "," + gblB + ")";
}
