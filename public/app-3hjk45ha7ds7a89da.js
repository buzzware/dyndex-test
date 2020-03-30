function clearCookie (name) {
  document.cookie = name +'=;Path=/;Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

function app(firebase) {
  var config = {
    apiKey: "AIzaSyA3xKQP4nNZgScrTVq9EN2gZZnnNBbz05Y",
    authDomain: "fb-auth-ex.firebaseapp.com",
    databaseURL: "https://fb-auth-ex.firebaseio.com",
    projectId: "fb-auth-ex",
    storageBucket: "fb-auth-ex.appspot.com",
    messagingSenderId: "584872466694",
    appId: "1:584872466694:web:26ffd453cf3d3154bd6687"
  };
  var app = firebase.initializeApp(config);
  firebase.auth(app).setPersistence(firebase.auth.Auth.Persistence.LOCAL);
}
