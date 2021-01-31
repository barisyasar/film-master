var app_firebase = {};


(function () {

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyCDsUiAMUF1ZMLaqOabmk4hF86Y3mKwXDI",
        authDomain: "film-master.firebaseapp.com",
        databaseURL: "https://film-master.firebaseio.com",
        projectId: "film-master",
        storageBucket: "film-master.appspot.com",
        messagingSenderId: "862239853286",
        appId: "1:862239853286:web:d6064a7974b9f7aa688927",
        measurementId: "G-R03J6HXHPD"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    app_firebase = firebase;
})()