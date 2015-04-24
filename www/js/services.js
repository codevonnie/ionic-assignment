angular.module('calorificApp.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('FoodService', function() {

  var foodItems = [
              {"name":"Chicken", "portion": "small", "calories": 100},
              {"name":"Chicken", "portion": "medium", "calories": 150},
              {"name":"Chicken", "portion": "large", "calories": 200},
              {"name":"Beef", "portion": "small", "calories": 100},
              {"name":"Beef", "portion": "medium", "calories": 150},
              {"name":"Beef", "portion": "large", "calories": 200},
              {"name":"Pork", "portion": "small", "calories": 100},
              {"name":"Pork", "portion": "medium", "calories": 150},
              {"name":"Pork", "portion": "large", "calories": 200},
          ];

  return {
    all: function() {
      return foodItems;
    }

  }
});
