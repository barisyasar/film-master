// https://www.youtube.com/embed/

// Firebase
var databaseIndex = firebase.database();
var refFilmler = databaseIndex.ref("Filmler");
var refAdmin = databaseIndex.ref("Admin Filmi");

// ID'ler
var filmFragmanGF;
var filmTuruGF;
var filmYapimYiliGF;
var filmImdbPuaniGF;
var filmYonetmenGFvarName;
var filmOyuncularGF;
var filmOzetiGF;
var filmAdiGF;
var gunun_film_item = document.getElementById('gunun-film-item');

const bunlaraBak = document.getElementById('bunlaraBak');
var filmNameAF, filmImdbAF, filmImgAF,filmKoduAF,filmTuruAF;

if (sessionStorage.getItem('filmTuru')){
    var filmTuru = sessionStorage.getItem('filmTuru');
}
var filmKodu = sessionStorage.getItem('filmKodu');

var parameter = sessionStorage.getItem('parameter');

// Def Function
const setAdminFilmi = (filmNameAF, filmImdbAF, filmImgAF,filmkoduAF,filmturu) => {
    bunlaraBak.innerHTML += `
      <div class="p-0 rounded  m-1 film-item-con2" onclick="filmDetayiAF(this)" id="${filmturu}" value="${filmkoduAF}" style="background-color: #000000; color: black;max-width: 300px;">
                <div class="film-item card w-100 h-100 mb-2" style="background-color: #000000;">
                    <img src="${filmImgAF}" class="w-100 h-100" style="max-height:250px;">
                    <div class="text-center card-body px-3 mb-0 pt-2 pb-0">
                    
                            <h5 class="d-block p-1 rounded" style="background-color: #DCA424;color:#000000; white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;">
                               <b>${filmNameAF}</b>
                            </h5>
                            <p class="bg-light d-block p-1 mb-0 rounded"><b>IMDb Puanı: ${filmImdbAF}</b></p>
                        
                    </div>
                </div>
            </div>
    `
}

const getAdminFilmi = (callback) => {

    refFilmler.once("value")
        .then(function (snapshot) {
            var randomChildID = Math.floor(Math.random() * snapshot.numChildren()) + 1;

            refFilmler.child(randomChildID).once("value").then(function (snapshot2) {

                snapshot2.forEach(function (snapshot3) {
                    filmNameAF = snapshot3.val().filmadi;
                    filmImdbAF = snapshot3.val().imdbpuani;
                    filmImgAF = snapshot3.val().resim;

                    filmKoduAF = snapshot3.key;
                    filmTuruAF = snapshot3.val().turno;
                    callback(filmNameAF, filmImdbAF, filmImgAF,filmKoduAF,filmTuruAF);
                })
            });

        });
}

const setGununFilmi = (filmAdiGF, filmOzetiGF, filmturuGF, filmYonetmenGFvarName, filmImdbPuaniGF, filmOyuncularGF, filmYapimYiliGF,filmFragmanGF) => {
    gunun_film_item.innerHTML +=
        `
        <iframe height="400" id="filmFragmanGF" src="https://www.youtube.com/embed/${filmFragmanGF}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="text-center card-body pt-0 pb-3">
                <h5 class="p-2 pt-3" style="color: #dca424"><b>${filmAdiGF}</b></h5>
                <div class="row mb-1  mx-1 mx-xs-0">
                    <div class="d-xs-block mr-1 mb-lg-0 mb-1 no-ozet">
                        <p class="d-inline p-1 rounded-left" style="background-color: #dca424; color: #000000">
                            <b>Yönetmen:</b>
                        </p>
                        <p class="bg-light d-inline p-1 rounded-right">
                            <b id="filmYonetmenGF">${filmYonetmenGFvarName}</b>
                        </p>
                    </div>
                    <div class="d-xs-block mr-1 mb-lg-0  no-ozet">
                        <p class="d-inline p-1 rounded-left" style="background-color: #dca424; color: #000000">
                            <b>Oyuncular:</b>
                        </p>
                        <p class="bg-light d-inline p-1 rounded-right">
                            <b id="filmOyuncularGF">${filmOyuncularGF}</b>
                        </p>
                    </div>
                </div>
                <div class="row mb-lg-2 mb-3 no-ozet mx-1 mx-xs-0">
                    <div class="d-xs-block mr-1 mb-2">
                        <p class="d-inline p-1 rounded-left" style="background-color: #dca424; color: #000000">
                            <b>Film Türü: </b>
                        </p>
                        <p class="bg-light d-inline p-1 rounded-right">
                            <b id="filmTuruGF">${filmturuGF}</b>
                        </p>
                    </div>
                    <div class="d-xs-block mb-2 ml-xs-1 mr-1">
                        <p class="d-inline p-1 rounded-left" style="background-color: #dca424; color: #000000">
                            <b>Yapım Yılı: </b>
                        </p>
                        <p class="bg-light d-inline p-1 rounded-right">
                            <b id="filmYapimYiliGF">${filmYapimYiliGF}</b>
                        </p>
                    </div>
                    <div class="d-xs-block ml-xs-0 ">
                        <p class="d-inline p-1 rounded-left" style="background-color: #dca424; color: #000000">
                            <b>IMDb Puanı: </b>
                        </p>
                        <p class="bg-light d-inline p-1 rounded-right">
                            <b id="filmImdbPuaniGF">${filmImdbPuaniGF}</b>
                        </p>

                    </div>

                </div>

                <div class="d-md-inline ">
                    <p class="d-block p-1 mb-0 rounded-top" style="background-color: #dca424; color: #000000">
                        <b>Film Özeti</b>
                    </p>
                    <p class="bg-light text-left d-block p-2 rounded-bottom" id="filmOzetiGF"><b>${filmOzetiGF}</b>
                    </p>
                </div>
            </div>
    `
}

const getGununFilmi = (callback) => {
    if (parameter === "filmNormal"){
        refFilmler.child(filmTuru).child(filmKodu).on("value", function (snapshot) {
            filmFragmanGF = snapshot.val().fragmanlinki;
            filmAdiGF = snapshot.val().filmadi;
            filmOzetiGF = snapshot.val().filmozeti;
            filmTuruGF = snapshot.val().filmturu;
            filmYonetmenGFvarName = snapshot.val().yonetmen;
            filmImdbPuaniGF = snapshot.val().imdbpuani;
            filmOyuncularGF = snapshot.val().oyuncular;
            filmYapimYiliGF = snapshot.val().yapimyili;

            callback(filmAdiGF, filmOzetiGF, filmTuruGF, filmYonetmenGFvarName, filmImdbPuaniGF, filmOyuncularGF, filmYapimYiliGF,filmFragmanGF);

        });
    }
    else
     {
        refAdmin.child(filmKodu).on("value", function (snapshot) {
            filmFragmanGF = snapshot.val().fragmanlinkiGF;
            filmAdiGF = snapshot.val().ad;
            filmOzetiGF = snapshot.val().filmozetiGF;
            filmTuruGF = snapshot.val().filmturuGF;
            filmYonetmenGFvarName = snapshot.val().filmyonetmeniGF;
            filmImdbPuaniGF = snapshot.val().imdbpuaniGF;
            filmOyuncularGF = snapshot.val().oyuncularGF;
            filmYapimYiliGF = snapshot.val().yapimyiliGF;

            callback(filmAdiGF, filmOzetiGF, filmTuruGF, filmYonetmenGFvarName, filmImdbPuaniGF, filmOyuncularGF, filmYapimYiliGF);

        });
    }
  
}

const filmDetayiAF = (ele) => {
    filmTuru = ele.getAttribute("id");
    filmKodu = ele.getAttribute("value");
    var parameter = "filmNormal";
    
    sessionStorage.setItem("filmTuru", filmTuru);
    sessionStorage.setItem("filmKodu", filmKodu);
    sessionStorage.setItem("parameter", parameter);

    window.location.assign("../html/filmDetayiPage.html");
}

// Call Function

getAdminFilmi(setAdminFilmi);
getGununFilmi(setGununFilmi);