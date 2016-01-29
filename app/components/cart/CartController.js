var app = angular.module('angularPlayground');

app.controller('CartController', CartController);


function CartController(){
  var controller = this
  this.cartStatus = 'Working';
  //The cart is an array of items that we are adding from our view
  this.cart = [];
  //The store is what we are using to populate our page with
  this.store = {
    items: StoreData
  };
  //*** No Need to edit anything above this line ****
  
  this.name = "My BɼokƏn Cart!";
  
    //return the length of our cart
  this.getCartCount = function(){
      return controller.cart.length
  };
  
  /*
  * Write a calculateCartTotal function DONE
  * make it assesible to our view DONE
  * this function should return the total cost
  * of each item that is in our cart
  */ 
  this.calculateCartTotal = function(){
      var total = 0;
      this.cart.forEach(function(item){
          total += item.price;
      }); return total;
  }
  
  
  this.removeItemFromCart = function(item){
    //Item gets passed in from our view when the user clicks the x button DONE
    /*
    * This function should be able to remove the passed in item DONE
    * from our cart. You will have to first identify where the passed DONE
    * in item is in the array. Then you will need to use the correct DONE
    * Array.method to remove 1 item hint method(i, 1); DONE
    */
    this.cart.splice(this.cart.indexOf(item), 1)
  };
  
  this.addItemToCart = function(item){
      //item gets passed in to this function from the view
      
      /*
      Our cart demands that items being added to it must have the following properties
      var newItem = {
        name:'StoreData[i].name',
        color:'StoreData[i].color',
        size: 'StoreData[i].color',
        quantity: 1,
        price:'item.price',
      }
      console.log the item being passed in from the view 
      to figure out which properties from item need to be 
      remaped to the newItem object. 
      After building the newItem add it to the cart 
      */
      this.cart.push({name: item.price, color: item.color, size: item.size, quantity: 1, price: item.price})
  }
  
}