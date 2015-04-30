# Mobile Application Development Project Template

This app is a basic calorie counter app which is geared toward young professionals. It includes a number of functions:

- The app contains three different tabs each with it's own look and functionality.

- Tab 1 - Summary
	The tab that opens automatically is the Summary tab which brings together different elements of the app.
	- Daily Calories: This heading updates to the most updated calorie 	value.
	- Todays Foods: This section is empty at the start of the app.  It populates with data from the Food tab which I will explain below.
	- Add or take away calories: This section allows the user to input an amount of calories to either add calories by entering a positive integer or to take calories away by entering a negative integer.  Once the amend button is clicked it amends the calorie total at the top of the page.
	- Reset Calories: This button allows the user to reset their calories for example at the end of a day or if they have entered something in incorrectly.
	- Reset Foods: This button allows the user to reset the foods that show in the "Todays Foods:" list.
	
- Tab 2 - Foods
	The second tab is the Foods tab.  This tab is where the user will mostly input their calories.
	- A list of foods are read into the program from a json file and are display in a list on this page.  
	- The user can select a food to have its calories added to their total and it's information added to the summary page under the "Todays Foods" list which provides the user a quick method to check over what they have selected that day.
	- The top of the page contains an input box which allows the user to filter through the food list which will match the input with the list.  
	- The user can also scroll through the food list.
	- The footer of this tab also contains a calorie reset button which the user can select to set their total back to zero.
	
- Tab 3 - Add
	I was unable to get this tab to work properly but will explain the idea behind it.
	- This tab was to be where the user would input their own food types to be added to the food list in tab 2. 
	- There are three input boxes which are for food name (text), food portion (text) and food calories (number). 
	- Once the user entered in the data they could select the Add Food button to have their food added to the food list.
	

