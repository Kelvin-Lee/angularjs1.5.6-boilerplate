angular.module('boilerplate', []);

angular.module('boilerplate')
    .component('messageComponent', {
        template: '<p>Please read the following message: {{$ctrl.message}}</p>',
        controller: function MessageComponentController(){
            this.message= 'Hello World!';
        }
    });
