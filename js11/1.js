let form=document.querySelector('form');
let firstName=document.querySelector('#firstname');
let secondName=document.querySelector('#secondname');
let email=document.querySelector('#email');
let dob=document.querySelector('#dob');

let tbody=document.querySelector('tbody');
console.log(tbody);
// adding event listner for form

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let row=document.createElement('tr');
    tbody.appendChild(row);
    row.innerHTML=`
    <td>${firstName.value}</td>
    <td>${secondName.value}</td>
    <td>${email.value}</td>
    <td>${dob.value}</td>
    `   
})