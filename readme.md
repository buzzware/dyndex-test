## Dynamic index test project for Single Page Apps with Firebase Authentication

by Gary McGhee

Please refer to the article [Secure Authenticated Single Page Application (SPA) hosting with Firebase](https://medium.com/@gazmcghee/secure-authenticated-single-page-application-spa-hosting-with-firebase-8732b13af628)
for an indepth explanation.

Notes : 

* a SPA (eg. Ember.js) would be hosted at the root index - here its just a simple page
* The login page uses firebaseui
* The login page takes the login then sets the cookie in the browser with the expiry date from the login token. The cookie is not made 
secure if you are hosting at localhost, so it will work with http

 
 