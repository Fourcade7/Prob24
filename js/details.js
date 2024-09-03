



let ptext=document.getElementById("ptext");

const urlParams=new URLSearchParams(window.location.search);
 let imya=urlParams.get("name");
 let voz=urlParams.get("age");


ptext.textContent=`${imya} ${voz}`;
console.log(ptext.textContent);