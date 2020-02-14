
/* 
    `angular` is defined (and usable) here because we loaded the AngularJS CDN before this 
    app.js file. We loaded the AngularJS CDN in the .html file, in the <head> portion. 
    In the <head> portion, we can load the CDN before the app.js file.

    To be more clear, we did this...

    ```html
    <head>
        <meta charset="utf-8">
        <title>Angular Boilerplate</title>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
        <script src="app.js"></script>
    </head>
    ```html

    ...instead of this...

    ```html
    <head>
        <meta charset="utf-8">
        <title>Angular Boilerplate</title>
        <script src="app.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
    </head>
    ```html

*/

angular.module('boilerplate', []);

angular.module('boilerplate')
    .component('messageComponent', {
        template: '<p>Please read the following message: {{$ctrl.message}}</p>',
        controller: function MessageComponentController(){
            this.message= 'Hello World!';
        }
    });
