window.onscroll = function() {myFunction()};
// setTimeout(myFunction,10)
function myFunction() {
  // var elmnt = document.getElementById("myDIV");
  var ht = document.documentElement;
  var y = ht.scrollTop;
  console.log(y);
  let hdr = document.getElementById("hdr");
  if (y > 60) {
  	hdr.style.opacity=".9";
  	hdr.style.position="fixed";
  	hdr.style.transition=".4s";
  	hdr.style.top="0px";
  	hdr.style.zIndex="9999";
  	hdr.style.display="block";
  	hdr.style.background="black";
  }else{
  	hdr.style.opacity=".9";
  	hdr.style.position="fixed";
  	hdr.style.transition=".4s";
  	hdr.style.top="0px";
  	hdr.style.zIndex="9999";
  }
  if (y < 59) {
  	hdr.style.background="none";
  	hdr.style.position="fixed";
  	hdr.style.top="0px";
  }


  // scroll  işatretleme.

  let ana = document.getElementById("ana");
  let hak = document.getElementById("hak");
  let por = document.getElementById("por");
  let kon = document.getElementById("kon");
  let gor = document.getElementById("gor");
  if (y < 649) {
    ana.style.color="#CEDA09";
  }else{
    ana.style.color="white";
  }
  if (y >= 650 && y < 1300) {
    hak.style.color="#CEDA09";
  }else{
    hak.style.color="white";
  }
  if (y >= 1300 && y < 2182) {
    por.style.color="#CEDA09";
  }else{
    por.style.color="white";
  }
  if (y >= 2182) {
    kon.style.color="#CEDA09";
  }else{
    kon.style.color="white";
  }
document.getElementById("text").innerText=y;
let txt = document.getElementById("text")
if (y <= 0) {
  txt.style.display="none"
}else{
  txt.style.display="block"
  txt.style.opacity="1"
}

// setTimeout(sure,0.8)
  // let sure = function(){
		// hdr.style.display="none";
  // }
  // console.log(document.body.scrollTop);
  // document.getElementById ("demo").innerHTML = "Vertically: " + y + "px";
}
