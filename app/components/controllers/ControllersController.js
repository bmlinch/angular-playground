var app = angular.module('angularPlayground');

app.controller('ControllersController', ControllersController);


function ControllersController(){
    var poi = this;
	poi.controllersStatus = 'Working';
    poi.friends = ['Joey', 'Chandler', 'Monica', 'Phebes', 'Ross & Rachel']
    
    poi.addFriend = function (friend){
       poi.friends.push(friend)
       poi.newFriend = " "
    }
}
