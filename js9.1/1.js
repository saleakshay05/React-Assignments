// creator of promise
function createPromise(){
    let futureState=true;
    return new Promise((fulfilled,rejected)=>{
     setTimeout(()=>{
         if(futureState===true){
             fulfilled('promise is fulfilled');
         }
         else{
             rejected('Promise is rejected');
         }
     },5000)   
    })
 }
 
 // consumer of promise
 createPromise()
 .then((msg)=>{console.log(msg)})
 .catch((er)=>{console.log(er)});
 
 console.log("hello");