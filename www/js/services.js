angular.module('calorificApp.services', [])

/**
 * A simple factory that returns data.
 */
 //factory requires $http for reading from the json file
.factory('foodService', function($http) {

  var foodService={}; //foodService variable to call factory
  var count={data: 0}; //count variable that holds up-to-date calories
  var eatenList=[]; //eatenList variable contains foods user has selected
  var foodItems = []; //foodItems contains array of food objects read from json file

          //function to read from foodList.json, store data in foodItems and return to controller
          foodService.getFoods = function(){
            //call to $http to get data from json file and store data in response
             return $http.get('/js/foodList.json').success(function(response){
                //response data is saved to foodItems array
                foodItems = response.data;
                //foodItems is returned to controller when called
                return foodItems;
            });
          }
          //function to add calories and foods eaten - gets passed a food object from controller
          foodService.addCals = function(food){
            //count.data gets the integer calorie value from food object
            count.data+=parseInt(food.calories);
            //the values from the food item are pushed into the eatenList array
            eatenList.push({
              name: food.name, //food name is saved to name in eatenList
              portion: food.portion, //food potion is saved to portion in eatenList
              calories: parseInt(food.calories)} //food calories are saved to calories in eatenList
          )
  
            return count.data; //return the up-to-date calorie count to the controller
          }
          //function to get the up-to-date eatenList
          foodService.getList=function(){
            return eatenList; //return list to controller when called
          }
          //function to reset eatenList
          foodService.resetList=function(){
            return eatenList=[];//return empty array to controller when called
          }
          //function to get the most up-to-date calorie count
          foodService.getCals = function(){
            return count.data; //return calorie count
          }
          //function to change calorie count by amount entered by user - takes in user inputted value
          foodService.changeCals=function(cal){
            count.data+=parseInt(cal); //count adds the amended calorie amount to its current total
          }
          //function to reset calorie count
          foodService.resetCals=function(){
              count.data=0; //count data is set to 0
          }

          /*foodService.addFood=function(nFood){
              foodItems.push({
                name: nFood.name,
                portion: nFood.portion,
                calories: parseInt(nFood.calories)
             })
              return foodItems;
            }*/
 //return factory
return foodService;
});
