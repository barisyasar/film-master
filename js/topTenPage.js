// Firebase
var databaseTopTen = firebase.database();
var refAdmin = databaseTopTen.ref("Admin Filmi");


// ID'ler
var filmAdiAF;
var filmImdbPuaniAF ;
var filmImgAF;
var filmTuruAF;
var filmYapimYiliAF ;
var filmYonetmenAF;
var filmOyuncularAF;
var filmNumberAF;

var topTen = document.getElementById('topTen');


//Def Function
const setAdminFilmi = (filmAdiAF, filmImdbPuaniAF, filmImgAF,filmTuruAF,filmYapimYiliAF,filmYonetmenAF,filmOyuncularAF,filmNumberAF) => {
    topTen.innerHTML += `
    <div class="row film-item m-2  bg-dark rounded" style="color: black;">
                <div class="col-4 p-0 "><img src="${filmImgAF}" class=" w-100 h-100" style="max-height: 270px;"></div>
                <div class="col-8 p-lg-4">
                    <div class="row mx-1 mt-2 mt-lg-3 mb-2">
                        <h4 class="col-2 col-xs-3  bg-sarı rounded-left text-center p-2 float-xs-left">
                            <b>${filmNumberAF}.</b></h4>
                        <h4 class="col-10 col-xs-9 bg-black text-center text-truncate  rounded-right p-2 text-uppercase"
                            id="baslik"><b>${filmAdiAF}</b></h4>
                    </div>

                    <div class="row d-flex justify-content-around ">
                        <div class="row col-lg-5 text-center ">
                            <h5 class="col-7 bg-sarı p-1 rounded-left text-truncate"><b>Yapım Yılı:</b></h5>
                            <h5 class="col-5 bg-light p-1 rounded-right text-truncate">${filmYapimYiliAF}</h5>
                        </div>
                        <div class="row col-lg-5 text-center ">
                            <h5 class="col-8 bg-sarı p-1 rounded-left text-truncate"><b>IMDB Puanı:</b></h5>
                            <h5 class="col-4 bg-light p-1 rounded-right text-truncate">${filmImdbPuaniAF}</h5>
                        </div>
                        <div class="row col-lg-5 text-center ">
                            <h5 class="col-4 bg-sarı p-1 rounded-left text-truncate"><b>Tür:</b></h5>
                            <h5 class="col-8 bg-light p-1 rounded-right text-truncate">${filmTuruAF}</h5>
                        </div>
                        <div class="row col-lg-5 text-center d-none d-md-flex">
                            <h5 class="col-6 bg-sarı p-1 rounded-left text-truncate"><b>Yönetmen:</b></h5>
                            <h5 class="col-6 bg-light p-1 rounded-right text-truncate">${filmYonetmenAF}</h5>
                        </div>
                        <div class="row col-lg-11 text-center d-none d-md-flex">
                            <h5 class="col-3 bg-sarı p-1 rounded-left text-truncate"><b>Oyuncular:</b></h5>
                            <h5 class="col-9 bg-light p-1 rounded-right text-truncate">${filmOyuncularAF}</h5>
                        </div>

                    </div>

                </div>
            </div>
    `
}

const getAdminFilmi = (callback) => {
    
    refAdmin.once("value",function(snapshot){
        snapshot.forEach(
            function (snap){
                filmAdiAF = snap.val().ad;
                filmImdbPuaniAF = snap.val().imdbpuaniGF;
                filmImgAF = snap.val().resim;
                filmTuruAF = snap.val().filmturuGF;
                filmYapimYiliAF = snap.val().yapimyiliGF;
                filmYonetmenAF = snap.val().filmyonetmeniGF;
                filmOyuncularAF = snap.val().oyuncularGF;
                filmNumberAF = snap.val().filmnumarasi;
                
            callback(filmAdiAF, filmImdbPuaniAF, filmImgAF,filmTuruAF,filmYapimYiliAF,filmYonetmenAF,filmOyuncularAF,filmNumberAF);
        }
        );
    });
}

//Call Function
getAdminFilmi(setAdminFilmi);
