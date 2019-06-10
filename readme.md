# dyndex-test
## Dynamic index test project for Single Page Apps with Firebase Authentication

by Gary McGhee

The idea of this is to set up a well engineered prototype with the following features :

* a SPA (eg. Ember.js) hosted at the root index - here its just a simple page
* The index is served by a function, and only if you have logged in. If you are not logged in, you can't get the index.html, and because the 
javascript files are fingerprinted, the filename is unguessable, so it can be hosted public on a CDN while being relatively secure.
* If you are not logged in, the index will redirect you to /login for the login page.
* The login page uses firebaseui
* The login page takes the login then sets the cookie in the browser with the expiry date from the login token. The cookie is not made 
secure if you are hosting at localhost, so it will work with http
* If you succesfully log in, you will be redirected to the index, and should get the html page
