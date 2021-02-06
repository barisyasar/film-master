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

const filmFilter = () => {
    const filterContainer = document.querySelector(".filter-buttons"),
    filterBtns =filterContainer.children;
    totalFilterBtn=filterBtns.length;

    portfolioItems=document.querySelectorAll(".film-item-con");
  
    totalPortfolioItem=portfolioItems.length;
    console.log(totalPortfolioItem);
    
    for(let i=0 ;i<totalFilterBtn;i++){
        filterBtns[i].addEventListener("click",function(){
          filterContainer.querySelector(".active").classList.remove("active");  
          this.classList.add("active");
          const filterValue =this.getAttribute("data-filter");
          
          for(let k = 0;k<totalPortfolioItem;k ++){
            if(filterValue === portfolioItems[k].getAttribute("data-category")){
              portfolioItems[k].classList.add("show");
              portfolioItems[k].classList.remove("hide");
            }
            else{
              portfolioItems[k].classList.remove("show");
              portfolioItems[k].classList.add("hide")
            }
            if(filterValue === "all"){
              
              portfolioItems[k].classList.add("show");
              portfolioItems[k].classList.remove("hide");
            }
          }
        })
    }
}

const setFilmler = (nameF,imgF,turF,kodF,yapimyiliF,imdbpuaniF) => {
    filmler.innerHTML += 
    `
    <div class ="col-md-6 col-lg-4  p-1 film-item-con" data-category="${turF}">
    <div class="film-item card w-100 h-100"  name="${kodF}" style="background-color: #000000; color: black;">
    <img src="${imgF}" class="w-100 h-100" style="max-height:300px">
    <div class="text-center card-body pt-0 pb-3" style="overflow: hidden;
    white-space: nowrap;">
    
    <h5 class="pt-1" style="color: #DCA424;"><b>${nameF}</b></h5>
    <div class="float-left ml-4 d-block">
    <p class="d-inline p-1 rounded-left" style="background-color: #DCA424;color:#000000"><b>IMDb: </b></p>
    <p class="bg-light d-inline p-1 rounded-right" ><b>${imdbpuaniF}</b></p>
    </div>
    <div class="float-right mr-4 mr-lg-5">
    <p class="d-inline p-1 rounded-left" style="background-color: #DCA424;color:#000000"><b>Yapım Yılı: </b></p>
    <p class="bg-light d-inline p-1 rounded-right" ><b>${yapimyiliF}</b></p>
    </div>
   
    
    

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
                yapimYiliFilm = data.val().yapimyili;
                imdbpuaniFilm = data.val().imdbpuani;
                setFilmler(nameFilm, imgFilm, turFilm, kodFilm,yapimYiliFilm,imdbpuaniFilm);
                
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
    <div style="background-color: #000000; color: black;border: 4px solid #DCA424;">
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
setTimeout(filmFilter, 3000);
getNumberFilm(getFilmler);

getGununFilmi(setGununFilmi);

getHaberler(activeHaber);

