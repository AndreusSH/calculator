var box = document.getElementById('output');
//var operators = ["-", "*", "/","+" ];  
function myFunction(x){

  box.innerHTML += x;
  
  if (x === 'C'){
    
    box.innerHTML = '';
    
    }  
   
  }
  
 function myOps(ops){
 
     box.innerHTML += ops;
    
    //console.log("operator");
      }
  
function evFunction(){
  
  //alert(output.innerHTML);
 
  output.innerHTML = eval(output.innerHTML);
}

