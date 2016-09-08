angular.module('chatroom').service('messageService', function($http){

  var baseUrl = 'http://practiceapi.devmounta.in/api/chats'
  //Here you'll need to create two methods. One called postMessage and the other called getMessages.

  this.getMessages = function() {
    var promise = $http.get(baseUrl)
    .then(function(response) {
        if(response.status === 200){
          return response.data;
        }
        else {
          return response.status
        }

    })
    return promise;
  }


  //On the lines below create a getMessages method. This method will retrieve data from the

     // backend.
  //The url for the get request should be 'http://practiceapi.devmounta.in/api/chats'
  //Be sure to return whatever gets returned from $http so you can call .then in your
  //controller.


this.postMessage= function(obj) {

  $http({
    method: 'POST',
    url:baseUrl,
    data: obj
  }).then(function(response) {
    console.log(response.data)
  })


}

  //On the line below create the postMessage method. This method will add data to
  //the backend server.
  //The url for the request needs to be 'http://practiceapi.devmounta.in/api/chats'
  //Because we're making a POST request, we need a way to tell the server
     //the data we want to give it,
    //in your $http call (along with url and method) have a data property which has a value that is equal to another object which a key of message and a value of the message being passed to parse. IE data: {message: yourMessage}
  //Also, remember that $http returns a promise. So if you return the whole $http call (return $http(...)), you can then use .then in your controller.
//   this.postMessage =
//   //postMessage method here
//
//
//   //getMessages method here
});
