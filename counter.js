var input =document.querySelector("#input");
var start =document.querySelectorAll(".start")[0];
var reset =document.querySelectorAll(".start")[1];

var smallboxes =document.querySelectorAll(".a");

var i=0;




/*************start the timer*********** */

start.addEventListener('click',function(){
var id=setInterval(function(){
i+=1;


/**********content to be put inside the boxes********** */
var a=Math.floor(i/10000);
var arem=i-a*10000;
var b=Math.floor(arem/1000);
var brem=arem-b*1000;
var c=Math.floor(brem/100);
var crem=brem-c*100;
var d=Math.floor(crem/10);
var e=crem-d*10;

var aprev=smallboxes[0].innerHTML;
var bprev=smallboxes[1].innerHTML;
var cprev=smallboxes[2].innerHTML;
var dprev=smallboxes[3].innerHTML;
var eprev=smallboxes[4].innerHTML;



if(aprev!=a){
  if(a==10){
    
  applyAnimation(smallboxes[0],0)
  }
  else{
  applyAnimation(smallboxes[0],a);
  }
}
  
  if(bprev!=b){
    if(b==10){
    
      applyAnimation(smallboxes[1],0)
      }
      else{
    applyAnimation(smallboxes[1],b)
      }
  }
    
  if(cprev!=c){
    if(c==10){
    
      applyAnimation(smallboxes[2],0)
      }
      else{
    applyAnimation(smallboxes[2],c)
      }
  }
    
  if(dprev!=d){
    if(d==10){
    
      applyAnimation(smallboxes[3],0)
      }
      else{
    applyAnimation(smallboxes[3],d)
      }
  }
    
  if(eprev!=e){
    if(e==10){
    
      applyAnimation(smallboxes[4],0)
      }
      else{
    applyAnimation(smallboxes[4],e)
      }
      ;}
  

      setTimeout(function () {
        smallboxes[0].innerHTML = a;
        smallboxes[1].innerHTML = b;
        smallboxes[2].innerHTML = c;
        smallboxes[3].innerHTML = d;
        smallboxes[4].innerHTML = e;
      }, 900);
 


/*********stop the timer********* */
if(i===parseInt(input.value)){
  clearInterval(id);
  
  //alert('TIMER END ,TASK COMPLTED');
};


},1000);


});




/*************Reset the timer***** */

reset.addEventListener('click',function(){
  window.location.reload();
});

/*
function applyAnimation(box) {
  box.classList.add('animate');
  setTimeout(function () {
    box.classList.remove('animate');
  }, 900);
}*/
function applyAnimation(box, digit) {
  box.setAttribute('data-digit', digit);
  box.classList.add('animate');
  setTimeout(function () {
    box.classList.remove('animate');
  }, 900);
}