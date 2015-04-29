angular.module('calorificApp.controllers', [])
    //controller called food controller which is used by each of the views. Connects with services.js
    .controller('FoodController', function(foodService, $scope) {
          
          /*calls getFoods method from foodService which reads json file and if successful          
            saves the function response data into foods variable*/
          foodService.getFoods().success(function(response){
            $scope.foods = response;
          })
          /*addCal method takes in food object and passes it to addCals method in foodService 
            which returns data which is saved to calCount variable*/
          $scope.addCal=function(food){
            $scope.calCount=foodService.addCals(food);
          }
          //getCals method calls getCals method in service and gets the most up-to-date calorie data
          $scope.getCals=function(){
            $scope.calCount=foodService.getCals();
          }
          /*changeCals method is used when user wants to manually amend calories - value is sent to
            changeCals method in foodService which returns the most up-to-date calorie data*/
          $scope.changeCals=function(cal){
            $scope.calCount=foodService.changeCals(cal);
          }
          /*resetCals method calls resetCals method in foodService which returns the reset value of 
            calCount*/
          $scope.resetCals=function(){
            $scope.calCount=foodService.resetCals();
          }
          /*getList method to get the list of foods the user has consumed that day. calls getList
            method in foodService and returns the up-to-date food list which is saved to list object*/
          $scope.getList=function(){
            $scope.list=foodService.getList();
          }
          /*resetFoods method calls resetList method in foodService which returns the reset value of 
            the list*/
          $scope.resetFoods=function(){
            $scope.list=foodService.resetList();
          }
          /*method does not work!
            Supposed to take values entered in form by user which
            is then passed to method addFood in foodService*/
          
          /*$scope.addFood = function(nFood){
              $scope.foods=foodService.addFood(nFood);
           }*/
          
        });

