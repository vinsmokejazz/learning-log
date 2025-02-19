function delay(fn:()=>void){
  setTimeout(fn,1000);
}
delay(function(){
  console.log("hello")
})