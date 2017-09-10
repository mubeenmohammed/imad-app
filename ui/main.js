console.log('Loaded!');
//change the value of main-text div
var element=document.getElementById("main-text");
element.innerHTML="New value";
//move the image
var img=document.getElementById('img');
img.omclick=function() {
  img.style.marginLeft='100px';  
};
