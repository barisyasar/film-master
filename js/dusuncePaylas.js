// Firebase
var databaseYorumlar = firebase.database();


//IDler
const ad = document.getElementById('txtAd');
const soyad = document.getElementById('txtSoyad');
const email = document.getElementById('txtEmail');
const konu = document.getElementById('konu');
const mesaj = document.getElementById('mesaj');
const btnMesaj = document.getElementById('btnMesaj');
const first = document.getElementById('first');
const log = document.getElementById('first');



// Def Function

function sendMessage(ad,soyad,email,konu,mesaj){
    
     databaseYorumlar.ref("Yorumlar").child(ad.value).set({
         
            ad:ad.value,
            soyad:soyad.value,
           email : email.value,
            konu:konu.value,
            mesaj:mesaj.value
         
        
     })
     ad.value="";
     soyad.value="";
     email.value="";
     konu.value="";
     mesaj.value="";
     
     first.innerHTML +=
     `
     <div class="alert alert-success alert-dismissible fade show" role="alert">
     <strong>Mesajınız İletilmiştir.</strong>
     <button type="button" class="close" data-dismiss="alert" aria-label="Close">
       <span aria-hidden="true">&times;</span>
     </button>
   </div>`


}

btnMesaj.addEventListener('click',e =>{
   e.preventDefault()
    sendMessage(ad,soyad,email,konu,mesaj);
    
  })