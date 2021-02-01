// Firebase
var databaseIndex = firebase.database();
var refIndex = databaseIndex.ref("Haberler");

// Slider
const carousel_indicators = document.getElementById("carousel-indicators");
const carousel_inner = document.getElementById("carousel-inner");


// Definition Function
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
getHaberler(activeHaber);
