angular.module('calorificApp.controllers', [])

    .controller('FoodController', function($scope) {
          $scope.foods = [
              {"id": 1, "name":"Chicken", "portion": "small", "calories": 100},
              {"id": 2, "name":"Chicken", "portion": "medium", "calories": 150},
              {"id": 3, "name":"Chicken", "portion": "large", "calories": 200},
              {"id": 4, "name":"Beef", "calories": 100},
              {"id": 5, "name":"Pork", "calories": 100},
          ];

          
          $scope.calCount=0;
          $scope.addCal=function(food){
            $scope.calCount+=parseInt(food.calories);
          }

          $scope.resetCal=function(calCount){
            $scope.calCount=0;
          }
        });

