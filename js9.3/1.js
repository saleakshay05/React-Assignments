function orderStaters(){
    console.log("called the waiter");
    let moneyAvailability=true;
    return new Promise((fulfilled,rejected)=>{
        setTimeout(()=>{
            if(moneyAvailability===true){
                fulfilled('ordered starters');
            }
            else{
                rejected('money is insufficient');
            }
        },1000)
    })
}
function orderBiryani(){
    console.log("called the waiter")
    let moneyAvailability=true;
    return new Promise((fulfilled,rejected)=>{
        setTimeout(()=>{
            if(moneyAvailability===true){
                fulfilled('ordered Biryani');
            }
            else{
                rejected('money is insufficient');
            }
        },2000)
    })
}

orderStaters()
.then((msg)=>{
    console.log(msg);
    setTimeout(()=>{
        console.log("recieved starters")
    },5000);
    return orderBiryani();
})
.then((msg)=>{
    console.log(msg);
    setTimeout(()=>{
        console.log("recieved Biryani")
    },10000);
})
.catch((err)=>{console.log(err)});
