 function openSlideMenu(){
     document.getElementById("side-menu").style.width="250px";
   }
  
  // function closeSlideMenu(){
  //   document.getElementById("side-menu").style.width="0";
  // }
  
//  document.querySelector("#openMenu").addEventListener("click",function{
//     document.getElementById("side-menu").style.width="250px";
//  })


  var i=document.querySelectorAll(".navLink").length;
  
  for(var n=0; n<i;n++){
    var clickedlink=document.querySelectorAll(".navLink")[n];
  
    clickedlink.addEventListener("click",function(){
      document.getElementById("side-menu").style.width="0";
    })
  
  }
  
  document.querySelector(".btn-close").addEventListener("click",function(){
    document.getElementById("side-menu").style.width="0";
  })
  