


let modal=document.getElementById("myModal");
let btnregister=document.getElementById("btnregister");
let email=document.getElementById("email");
let imageEye=document.getElementById("passEye");
let imageEye2=document.getElementById("passEye2");
let inputPassword=document.getElementById("inputPassword");
let inputPassword2=document.getElementById("inputPassword2");
let inputphonenumber=document.getElementById("inputphonenumber");
let inputcontrollerphonenumber=document.getElementById("inputcontrollerphonenumber");
let inputFile=document.getElementById("inputFile");
let imgForInput=document.getElementById("imgForInput");
let addres=document.getElementById("addres");
let dateofbirth=document.getElementById("dateofbirth");
let fullname=document.getElementById("fullname");
let surname=document.getElementById("surname");
let username=document.getElementById("name");
let starttime=document.getElementById("starttime");
let endtime=document.getElementById("endtime");
let dailytime=document.getElementById("dailytime");
let alert1=document.getElementById("alert1");
let alertText1=document.getElementById("alertText1");
alert1.style.display="none";

let eyeToggle=true;



//const myModal = document.getElementById('myModal');

imageEye.addEventListener("click", ()=>{

   if(eyeToggle){
    imageEye.src="images/hidden.png";
    inputPassword.type="input";
    imageEye2.src="images/hidden.png";
    inputPassword2.type="input";
    eyeToggle=false;
   }else{
    imageEye.src="images/eyewhite.png";
    inputPassword.type="password";
    imageEye2.src="images/eyewhite.png";
    inputPassword2.type="password";
    eyeToggle=true;
   }

})

imageEye2.addEventListener("click", ()=>{

    if(eyeToggle){
     imageEye.src="/images/hidden.png";
     inputPassword.type="input";
     imageEye2.src="images/hidden.png";
     inputPassword2.type="input";
     eyeToggle=false;
    }else{
     imageEye.src="/images/eyewhite.png";
     inputPassword.type="password";
     imageEye2.src="/images/eyewhite.png";
     inputPassword2.type="password";
     eyeToggle=true;
    }
 
 })



btnregister.addEventListener("click", ()=>{
   

    let url = 'http://212.113.122.123/register';
    let datax = {
     username: `${username.value}`,
     surname: `${surname.value}`,
     fullName: `${fullname.value}`,
     phoneNumber: `${inputphonenumber.value}`,
     dateOfBirth: `${dateofbirth.value}`,
     controllerPhoneNumber: `${inputcontrollerphonenumber.value}`,
     address: `${addres.value}`,
     imageUrl: `not yet`,
     dailyTime: `${dailytime}`,
     startTime: `${starttime}`,
     endTime: `${endtime}`,
     lastTimeUpImage: `22:00`,
     location: `not yet`,
     login: `${email.value}`,
     password: `${inputPassword.value}`
    };

    //registerUser(url, datax);
    let imglocal=URL.createObjectURL(inputFile.files[0]);
    console.log(imglocal);

    var formData = new FormData();
    formData.append('image', inputFile.files[0]);
    console.log(inputFile.files[0]);

    uploadImage("http://212.113.122.123/uploadimage", formData);
      

})

inputFile.onchange=function(){
     let imglocal=URL.createObjectURL(inputFile.files[0]);
    //console.log(imglocal);
    imgForInput.src=imglocal;
}




async function registerUser(url,datax){
   
    let myModal = new bootstrap.Modal(document.getElementById('myModal'), {
        keyboard: false
    });
    
    //console.log(myModal);
    // console.dir(myModal);
    console.log("request started");
    
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
           
            console.log(datay);
            window.location.href="index.html";
        }else{
            alert1.style.display="block";
            alertText1.textContent=`Сообщение об ошибке: Неверный логин или пароль`;
            modal.addEventListener('shown.bs.modal', () => {
                myModal.hide();
            })
            console.log("not ok");
            console.log(datay.message);
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




async function uploadImage(url,datax){
   
    let myModal = new bootstrap.Modal(document.getElementById('myModal'), {
        keyboard: false
    });
    
    //console.log(myModal);
    // console.dir(myModal);
    console.log("request started");
    
    myModal.show();
    alert1.style.display="none";
   
    let bearerToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqd3QtYXVkaWVuY2UiLCJpc3MiOiJqd3QuaXNzdWVyIiwia2V5IjoicHJAZ21haWwuY29tIiwia2V5Zm9ycGFzcyI6MSwiZXhwIjoxNzIzNzI1ODg3fQ.I-NAelKWH7xWL3X5_vMM2KWiveI6-fik8L_6yoekySE";
    
    try{
        let response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + bearerToken
            },
            body: datax // body data type must match "Content-Type" header
        });

        let datay=await response.json();
        
        if (response.ok) {
            
            modal.addEventListener('shown.bs.modal', () => {
                myModal.hide();
            })
           
            console.log(datay);
            window.location.href="index.html";
        }else{
            alert1.style.display="block";
            alertText1.textContent=`Сообщение об ошибке: Неверный логин или пароль`;
            modal.addEventListener('shown.bs.modal', () => {
                myModal.hide();
            })
            console.log("not ok");
            console.log(datay.message);
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










setTimeout(() => {
    console.log("Delayed for 1 second.");
    
}, "1000");


function setCookie(key,value,daysTolive){
    const date=new Date();
    date.setTime(date.getTime()+daysTolive*24*60*60*1000);
    let expires="expires"+date.toUTCString();
    document.cookie=`${key}=${value};${expires};path=/`;
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







