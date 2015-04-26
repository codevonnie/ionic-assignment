angular.module('calorificApp.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('foodService', function() {

  var foodService={};
  var count={data: 0};
  var eatenList=[];
  var foodItems = [
              {id: 0, "name":"Chicken", "portion": "small", "calories": 100},
              {id: 1,"name":"Chicken", "portion": "medium", "calories": 150},
              {id: 2,"name":"Chicken", "portion": "large", "calories": 200},
              {id: 3,"name":"Beef", "portion": "small", "calories": 100},
              {id: 4,"name":"Beef", "portion": "medium", "calories": 150},
              {id: 5,"name":"Beef", "portion": "large", "calories": 200},
              {id: 6,"name":"Pork", "portion": "small", "calories": 100},
              {id: 7,"name":"Pork", "portion": "medium", "calories": 150},
              {id: 8,"name":"Pork", "portion": "large", "calories": 200},
          ];

          foodService.getFoods = function(){
            return foodItems;
          }

          foodService.addCals = function(food){
            //var topId=eatenList.length+1;
            count.data+=parseInt(food.calories);
            eatenList.push(
             // id: topId,
              food.name
              //portion: food.portion,
              //calories: parseInt(food.calories)
          )
  
            return count.data;
          }

          foodService.getList=function(){
            return eatenList;
          }

          foodService.getCals = function(){
            return count.data;
          }

          foodService.changeCals=function(cal){
            count.data+=parseInt(cal);
          }

          foodService.resetCals=function(){
              count.data=0;
          }

          foodService.addFood=function(name, portion, calories){
            var topId=foodItems.length+1;
              foodItems.push({
              id: topId,
              name: name,
              portion: portion,
              calories: calories
            }
          )
}

return foodService;
  

});
