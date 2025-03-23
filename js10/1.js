function getDetails(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach((element)=>{
            if(element.name==="Ervin Howell")
            console.log(element.username);

            if(element.address.street==="Victor Plains")
            console.log(element.name);
            
            if(element.name==="Clementine Bauch")
            console.log(element.address.geo);
    })
    console.log("no.of users are: ",data.length);
    })
    .catch((err)=>console.log(err));
}

getDetails();