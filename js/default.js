
for(var i=1;i<=100;i++){
 var li = document.createElement('li');
 li.textContent=i;
 if(i%15==0){
  
   li.textContent="FizzBuzz";
   
 }
  
  
  document.getElementById('list').appendChild(li);
  
}

document.getElementById('form').onsubmit = function(){
window.alert(document.getElementById('form').word.value);
};
