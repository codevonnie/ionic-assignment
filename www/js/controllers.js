angular.module('calorificApp.controllers', [])

    .controller('FoodController', function(foodService, $scope) {
          $scope.foods = foodService.getFoods();
          
          $scope.addCal=function(food){
            $scope.calCount=foodService.addCals(food);
          }
          $scope.getCals=function(){
            $scope.calCount=foodService.getCals();
          }

          $scope.changeCals=function(cal){
            $scope.calCount=foodService.changeCals(cal);
          }
          $scope.resetCals=function(){
            $scope.calCount=foodService.resetCals();
          }

          $scope.getList=function(){
            $scope.list=foodService.getList();
          }

          $scope.addFoods = function() {
            var name = $scope.newFood.name;
            var portion = $scope.newFood.portion;
            var calories = $scope.newFood(newFood.calories);
            foodService.addFood(name, portion, calories);
            $scope.food.name=' ';
            $scope.food.portion=' ';
            $scope.food.calories=0;
          }

         /* $scope.addFoods = function(newFood){
              var nFood = {
                name: newFood.name,
                portion: newFood.portion,
                calories: newFood.calories
              };
              foodService.addFoods = function(nFood){
                $scope.foods.push(nFood);
              }
          }*/
          
        });

