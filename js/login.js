


document.cookie = "user=John";

//alert( document.cookie ); 

document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";


setCookie2("ale", "valuexx", 365);
setCookie("ale", "valuexx", 365);

let cookiess = document.cookie;
console.log(cookiess);
console.log(getCookie("username"));



let modal=document.getElementById("myModal");
let btnlogin=document.getElementById("btnlogin");
let email=document.getElementById("email");
let imageEye=document.getElementById("passEye");
let inputPassword=document.getElementById("inputPassword");
let alert1=document.getElementById("alert1");
let alertText1=document.getElementById("alertText1");
let eyeToggle=true;

alert1.style.display="none";
imageEye.addEventListener("click", ()=>{

   if(eyeToggle){
    imageEye.src="images/hidden.png";
    inputPassword.type="input";
    eyeToggle=false;
   }else{
    imageEye.src="images/eyewhite.png";
    inputPassword.type="password";
    eyeToggle=true;
   }

})

btnlogin.addEventListener("click", ()=>{
 
    if(email.value ==="pr" && inputPassword.value==="1234567"){
        //btnlogin.href = "index.html";
        window.location.href="index.html";
    }
    
    let url = 'http://212.113.122.123/login';
    let datax = {
     email: `${email.value}`,
     password: `${inputPassword.value}`
    };

    login(url,datax);
    //getAllUser();

})


async function login(url,datax){
   
    let myModal = new bootstrap.Modal(document.getElementById('myModal'), {
        keyboard: false
    });
    
    // console.log(myModal);
    // console.dir(myModal);
    
    myModal.show();
    alert1.style.display="none";
   
    
    try{
        let response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(datax) // body data type must match "Content-Type" header
        });

        let datay=await response.json();
        
        if (response.ok) {
            
            modal.addEventListener('shown.bs.modal', () => {
                myModal.hide();
            })
            
            setCookie("token", `${datay.token}`, 365);
            console.log(datay.token);
            window.location.href="index.html";
        }else{
            alert1.style.display="block";
            alertText1.textContent=`Сообщение об ошибке: Неверный логин или пароль`;
            modal.addEventListener('shown.bs.modal', () => {
                myModal.hide();
            })
            //throw new Error('Network response was not ok');
           
        }

    }catch(error){
        alert1.style.display="block";
        alertText1.textContent=`Error message: ${error}`;
        modal.addEventListener('shown.bs.modal', () => {
            myModal.hide();
        })
        console.log(error);
        
    }
}



async function getAllUser(){

    try{
        let response= await fetch('http://212.113.122.123/getallusers');
        let data= await response.json();
    console.log(data);
    } catch(error){
        console.log(error);
    }

    
}



function setCookie(key,value,daysTolive){
    let date=new Date();
    date.setTime(date.getTime()+(daysTolive*24*60*60*1000));
    let expires="expires= "+date.toUTCString();
    document.cookie=`${key}=${value};${expires};path=/`;
  }
  

function setCookie2(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/; SameSite=Lax";
}
  function getCookie(key) {
    let cookieArr = document.cookie.split(";");
    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if(key == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
  }