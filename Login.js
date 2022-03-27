

var x =document.getElementById("userName");
var p =document.getElementById("userPassword");

document.getElementById("formLogin").addEventListener("submit",(ee)=>{
    ee.preventDefault();
    console.log(x.value);
    console.log(p.value);
    firebase.auth().signInWithEmailAndPassword(x.value,p.value).then(()=>{
        swal.fire({
            position:'center',
            icon:'success',
            title:Welcome,
            text:'Access Granted',
    });
        x.value='';
        p.value='';
            setTimeout(()=>{
                loadPage();
            },3000);
    })
    .catch((error)=>{
        swal.fire({
            position:'center',
            type:'error',
            title:'Error',
            text:'Access Denied',

    });
        x.value='';
        p.value='';
    });
    function loadPage(){
        window.location.href="admin.html";
    }

    
});