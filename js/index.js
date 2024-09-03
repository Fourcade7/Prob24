


let cookies = document.cookie;
console.log(cookies);


if(getCookie("token")==null){
  //window.location.href="login.html";
  console.log(getCookie("token"));
}else{
  console.log(getCookie("token"));
}



const tbody=document.getElementById("tbody");
//const tRow=document.getElementById("tableRow");


// tRow.addEventListener("click", ()=>{

  
//   window.location.href="details.html?name=Fourcade&age=26";

// })




async function getAllUser(){

  try{
      let response= await fetch('http://212.113.122.123/getallusers');
      let datauser= await response.json();
      console.log(datauser);
      readALlUser(datauser);
  } catch(error){
      console.log(error);
  }

  
}



getAllUser();







function tableRow(userid,uname,sname,fname,phone,adress,location,photo,lastuptime){
    return ` <tr id="tableRow">
                <th class="align-middle" scope="row">${userid}</th>
                <td class="align-middle">${uname}</td>
                <td class="align-middle">${sname}</td>
                <td class="align-middle">${fname}</td>
                <td class="align-middle">${phone}</td>
                <td class="align-middle">${adress}</td>
                <td class="align-middle">${location}</td>
                <td class="align-middle d-flex align-items-center justify-content-center">
                  <div><img id="imgForInput" src="${photo}" class="img-thumbnail" style="height: 70px; width: 70px; object-fit: cover;"></div>  
                </td>
                <td class="align-middle">${lastuptime}</td>               
              </tr>`;
}          


function readALlUser(userList){
  userList.forEach((item)=>{
    let trow=tableRow(item.id,item.username, item.surname,item.fullName, item.phoneNumber,item.address,item.location,item.imageUrl,item.lastTimeUpImage);
    tbody.insertAdjacentHTML("beforeend", trow);
})
}



let listGroupItems=document.querySelectorAll(".btn-danger");

for(let i=0;i<listGroupItems.length;i++){
  listGroupItems[i].addEventListener("click", ()=>{
        console.log(userList[i].username);
  })
}


listGroupItems.forEach(listitem =>{

   listitem.addEventListener("click", ()=>{
    //console.log("xixixixixi");asdfasdf
   })
})



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




// const listGroup=document.getElementById("listGroup");

// const menuList = ["Home","About","Contact","View All",'kak'];



// for(let i=0;i<menuList.length;i++){
//     console.log(listGroup[i]);
//     let item='<a class="list-group-item list-group-item-action">'+menuList[i]+'</a>';
//     listGroup.insertAdjacentHTML("beforeend", item);
    
//}







// let listGroupItems=document.querySelectorAll(".list-group-item");



// listGroupItems.forEach(listItem => {


//     listItem.addEventListener('click', ()=>{
//         document.querySelector(".active").classList.remove("active");
//         listItem.classList.add('active');
//         console.log("clicked");
//     })

// })



