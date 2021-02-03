// Firebase
var databaseIndex = firebase.database();
var refIndex = databaseIndex.ref("Haberler");
var refIndexGunun = databaseIndex.ref("Gunun Filmi");
var refIndexFilmler = databaseIndex.ref("Filmler");

// Slider
const carousel_indicators = document.getElementById("carousel-indicators");
const carousel_inner = document.getElementById("carousel-inner");

//Gunun Filmi
const gununFilmiIndex = document.getElementById('gununFilmiIndex');

//Filmler
const filmler = document.getElementById('filmler');


// Definition Function
const setFilmler = (nameF,imgF,turF,kodF) => {
    filmler.innerHTML += 
    `
    <div class ="col-md-4 p-1 ">
    <div class="film-item w-100 h-100" data-category="${turF}" name="${kodF}" style="background-color: #000000; color: black;border: 4px solid #ffffff;">
    <img src="${imgF}" class="w-100 h-100" style="max-height: 270px;">
    <div class="text-center" style="overflow: hidden;
    white-space: nowrap;">
    <h5 class="pt-1" style="color: #DCA424;"><b>${nameF}</b></h5>
    <p class="bg-light d-block p-1 mx-4 mb-2" style="border-radius: 5px; "><b>${nameF}</b></p>
    

    </div>
    </div>
    </div>
  
    `
;
}

const getFilmler = (number) => {
     
    for (i = 1; i < number + 1; i++) {

        refIndexFilmler.child(i).on("value", function (snapshot) {

            snapshot.forEach(function (data) {

                nameFilm = data.val().filmadi;
                imgFilm = data.val().resim;
                turFilm = data.val().filmturu;
                kodFilm = data.key;
                setFilmler(nameFilm, imgFilm, turFilm, kodFilm);
            });
        });
    }
}

const getNumberFilm = (callback) => {
    var childCountFilm;
    refIndexFilmler.once("value")
        .then(function (snapshot) {
            childCountFilm = snapshot.numChildren();
            callback(childCountFilm);
        });
}

const setGununFilmi = (nameGF, imgGF) => {
    gununFilmiIndex.innerHTML =
        `
    <div style="background-color: #000000; color: black;border: 4px solid #ffffff;">
    <img src="${imgGF}" alt="${nameGF}" class="w-100 h-100" style="max-height: 300px;">
    <div class="text-center" style="overflow: hidden;
    white-space: nowrap;">
    <h5 class="pt-1" style="color: #DCA424;"><b>Günün Filmi</b></h5>
        <p class="bg-light d-block p-1 mx-4 mb-2" style="border-radius: 5px; "><b>${nameGF}</b></p>

    </div>
</div>
    `
}

const getGununFilmi = (callback) => {
    var nameGF;
    var imgGF;
    refIndexGunun.child("-MD1IT2d7c7FYtd_N0Kp").on("value", function (snapshot) {
        nameGF = snapshot.val().ad;
        imgGF = snapshot.val().resim;
        callback(nameGF, imgGF);
    });
}

const activeHaber = () => {
    carousel_indicators.getElementsByClassName("carousel_indicator")[0].classList.add("active");
    carousel_inner.getElementsByClassName("carousel-item")[0].classList.add("active");
}

const setHaberler = (imgHaber, numberHaber) => {
    carousel_indicators.innerHTML += `
    <li data-target="#carouselExampleIndicators" data-slide-to="${numberHaber}" class="carousel_indicator"></li>
    `;
    carousel_inner.innerHTML += `<div class="carousel-item">
                                    <img class="d-block w-100"  src="${imgHaber}" alt="${numberHaber}. slide">
                                 </div>`;
};

const getHaberler = (callback) => {
    var imgHaber;
    var numberHaber = 0;

    refIndex.on("value", function (snapshot) {
        snapshot.forEach(function (data) {
            imgHaber = data.val().Link;

            setHaberler(imgHaber, numberHaber);
            numberHaber++;
        });
        callback();
    });




};

// Call Functions
getNumberFilm(getFilmler);

getGununFilmi(setGununFilmi);

getHaberler(activeHaber);

