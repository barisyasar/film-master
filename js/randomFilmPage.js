// https://www.youtube.com/embed/

// Firebase
var databaseIndex = firebase.database();
var refGununPage = databaseIndex.ref("Filmler");
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
var filmNameAF, filmImdbAF, filmImgAF;

// Def Function
const setAdminFilmi = (filmNameAF, filmImdbAF, filmImgAF) => {
    bunlaraBak.innerHTML += `
      <div class="p-0 rounded  m-1 film-item-con2" style="background-color: #000000; color: black;max-width: 300px;">
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
    // refAdmin.once("value", function (snapshot) {
    //     snapshot.forEach(
    //         function (snap) {
    //             filmNameAF = snap.val().ad;
    //             filmImdbAF = snap.val().imdbpuaniGF;
    //             filmImgAF = snap.val().resim;

    //             callback(filmNameAF, filmImdbAF, filmImgAF);
    //         }
    //     );
    // });
    refGununPage.once("value")
    .then(function (snapshot) {
        var randomChildID = Math.floor(Math.random() * snapshot.numChildren()) + 1;

        refGununPage.child(randomChildID).once("value").then(function (snapshot2) {
            
            snapshot2.forEach(function (snapshot3) {
                filmNameAF = snapshot3.val().filmadi;
                filmImdbAF = snapshot3.val().imdbpuani;
                filmImgAF = snapshot3.val().resim;
            
             callback(filmNameAF, filmImdbAF, filmImgAF);
            })
        });

    });
}

const setGununFilmi = (filmAdiGF, filmOzetiGF, filmturuGF, filmYonetmenGFvarName, filmImdbPuaniGF, filmOyuncularGF, filmYapimYiliGF) => {
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

    refGununPage.once("value")
        .then(function (snapshot) {
            var randomChildID = Math.floor(Math.random() * snapshot.numChildren()) + 1;

            refGununPage.child(randomChildID).once("value").then(function (snapshot2) {
                var randomChildID2 = Math.floor(Math.random() * snapshot2.numChildren()) + 1;
                refGununPage.child(randomChildID).orderByChild("filmnumarasi").equalTo(randomChildID2).once("value", function (snapshot4) {
                    snapshot4.forEach(function (snapshot3) {
                        filmFragmanGF = snapshot3.val().fragmanlinki;
                        filmAdiGF = snapshot3.val().filmadi;
                        filmOzetiGF = snapshot3.val().filmozeti;
                        filmTuruGF = snapshot3.val().filmturu;
                        filmYonetmenGFvarName = snapshot3.val().yonetmen;
                        filmImdbPuaniGF = snapshot3.val().imdbpuani;
                        filmOyuncularGF = snapshot3.val().oyuncular;
                        filmYapimYiliGF = snapshot3.val().yapimyili;

                        callback(filmAdiGF, filmOzetiGF, filmTuruGF, filmYonetmenGFvarName, filmImdbPuaniGF, filmOyuncularGF, filmYapimYiliGF);
                    })
                })
            });

        });
}

// Call Function

getAdminFilmi(setAdminFilmi);
getGununFilmi(setGununFilmi);