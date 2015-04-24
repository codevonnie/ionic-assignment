angular.module('calorificApp.controllers', [])

    .controller('FoodController', function(FoodService, $scope) {
          $scope.foods = FoodService.all();

          
          $scope.calCount=0;
          $scope.addCal=function(food){
            $scope.calCount+=parseInt(food.calories);
          }

          $scope.resetCal=function(calCount){
            $scope.calCount=0;
          }

          $scope.createTask = function(foods) {
          $scope.foods.push({
          name: foods.name
          });
          $scope.taskModal.hide();
          task.title = "";
          };
          
        });

