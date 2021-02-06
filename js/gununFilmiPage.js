// https://www.youtube.com/embed/

// Firebase
var databaseIndex = firebase.database();
var refGununPage = databaseIndex.ref("Gunun Filmi");

// ID'ler
var filmFragmanGF ;

var filmTuruGF;
var filmYapimYiliGF ;
var filmImdbPuaniGF ;
var filmYonetmenGFvarName ;
var filmOyuncularGF;
var filmOzetiGF ;
var filmAdiGF ;
var gunun_film_item = document.getElementById('gunun-film-item');

// Def Function

const setGununFilmi = (filmAdiGF,filmOzetiGF,filmturuGF,filmYonetmenGFvarName,filmImdbPuaniGF,filmOyuncularGF,filmYapimYiliGF) => {
    gunun_film_item.innerHTML +=
        `
        <iframe height="400" id="filmFragmanGF" src="https://www.youtube.com/embed/${filmFragmanGF}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="text-center card-body pt-0 pb-3">
        <h5 class="p-2 pt-3" style="color: #dca424"><b>${filmAdiGF}</b></h5>

        <div class="row mb-lg-2 mb-1 no-ozet d-flex justify-content-lg-between mx-1 mx-xs-0">
            <div class="d-xs-block mr-1 mb-2">
                <p class="d-inline p-1 rounded-left" style="background-color: #dca424; color: #000000">
                    <b>Film Türü: </b>
                </p>
                <p class="bg-light d-inline p-1 rounded-right">
                    <b id="filmTuruGF">${filmturuGF}</b>
                </p>
            </div>
            <div class="d-xs-block  my-sm-0 mb-1 ml-xs-1 mr-1">
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
        <div class="row mb-3  mx-1 mx-xs-0">
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
    
    refGununPage.child("-MD1IT2d7c7FYtd_N0Kp").on("value", function (snapshot) {
        filmFragmanGF = snapshot.val().fragmanlinkiGF;
        filmAdiGF= snapshot.val().ad;
        filmOzetiGF = snapshot.val().filmozetiGF;
        filmTuruGF = snapshot.val().filmturuGF;
        filmYonetmenGFvarName = snapshot.val().filmyonetmeniGF;
        filmImdbPuaniGF = snapshot.val().imdbpuaniGF;
        filmOyuncularGF = snapshot.val().oyuncularGF;
        filmYapimYiliGF = snapshot.val().yapimyiliGF;

        callback(filmAdiGF,filmOzetiGF,filmTuruGF,filmYonetmenGFvarName,filmImdbPuaniGF,filmOyuncularGF,filmYapimYiliGF);
        
    });
}

// Call Function
getGununFilmi(setGununFilmi);