//Create connection to FB
var config = {
    apiKey: "AIzaSyBY98JIlsMtHNkJ8K0-n7Cm57xnDQQ00bo",
    authDomain: "first-9d8da.firebaseapp.com",
    databaseURL: "https://first-9d8da.firebaseio.com",
    projectId: "first-9d8da",
    storageBucket: "first-9d8da.appspot.com",
    messagingSenderId: "388170122063"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  database.ref().set({
    test: 1,
  })