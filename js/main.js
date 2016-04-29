angular.module('RestaurantApp',[])
	
angular.module('RestaurantApp')
	.factory('factoryRestInfo', [function() {


// INGREDIENTS

var ingredientArray = [];
var Ingredients = function(name, cals, vegan, glutenFree, citrusFree) {

	this.name = name,
	this.cals = cals,
	this.vegan = vegan,
	this.glutenFree = glutenFree,
	this.citrusFree = citrusFree,
	ingredientArray.push(this)
}

		var calimari = new Ingredients (

			"Calimari",
			1000,
			false,
			false,
			true

			) 

		var breadsticks = new Ingredients (

			"breadsticks",
			700,
			true,
			false,
			true

			)

		var clams = new Ingredients (

			"Clams",
			200,
			false,
			true,
			true

			)

		var mozz = new Ingredients (
			"Mozzarella",
			350,
			false,
			false,
			true
		)

		var pep = new Ingredients (

			"Pepperoni",
			900,
			false,
			true,
			true

			)

		var sau = new Ingredients (

			"Sausage",
			950,
			false,
			true,
			true

			)

		var chk = new Ingredients (

			"Chicken",
			800,
			false,
			true,
			true

		)

		var meatb = new Ingredients (

			"Meatball",
			1000,
			false,
			true,
			true

		)

		var gp = new Ingredients (

			"Green Pepper",
			175,
			false,
			true,
			true

		)
		var on = new Ingredients (

			"Onion",
			250,
			false,
			true,
			true

		)

		var mush = new Ingredients (

			"Mushroom",
			200,
			false,
			true,
			true

		)

		var bo = new Ingredients (

			"Black Olive",
			350,
			false,
			true,
			true

		)

		var go = new Ingredients (

			"Green Olive",
			325,
			false,
			true,
			true

		)
		var feta = new Ingredients (

			"Feta",
			450,
			false,
			true,
			true

		)

		var red = new Ingredients (

			"Red Sauce",
			300,
			false,
			true,
			true

		)

		var white = new Ingredients (

			"White Sauce",
			850,
			false,
			true,
			true

		)
		var evoo = new Ingredients (

			"EVOO",
			800,
			false,
			true,
			true

		)

		var rrp = new Ingredients (

			"Roasted Red Pepper",
			200,
			false,
			true,
			true

		)

		var jap = new Ingredients (

			"Jalepeno",
			150,
			false,
			true,
			true

		)

		var gar = new Ingredients (

			"Garlic",
			100,
			true,
			true,
			true

		)

		var toms = new Ingredients (

			"Tomatoes",
			125,
			true,
			true,
			true

		)

		var spin = new Ingredients (

			"Spinach",
			125,
			true,
			true,
			true

		)

		var arug = new Ingredients (

			"Arugala",
			100,
			true,
			true,
			true

		)

		var basil = new Ingredients (

			"Basil",
			50,
			true,
			true,
			true

			)

		var wine = new Ingredients (

			"House Red Wine",
			250,
			true,
			false,
			true

		)

		var citrus = new Ingredients (

			"Limes or Lemons",
			10,
			true,
			true,
			false

		)

		var beer = new Ingredients (

			"Peroni",
			120,
			true,
			true,
			true

		)



// DRINKS
var drinkArray = [];
var DrinkItem = function(name, description, price, contents) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.contents = contents;
	this.activeToolTip = false;
	drinkArray.push(this)
}
DrinkItem.prototype.isVegan = function(){
	var vegan = true;

	this.contents.forEach(function (element) {
		if(element.vegan === false) {
			vegan = false
		}
	})
	return vegan
}
DrinkItem.prototype.isGlutenFree = function(){
	var glutenFree = true;

	this.contents.forEach(function (element) {
		if(element.glutenFree === false) {
			glutenFree = false
		}
	})
	return glutenFree
}
DrinkItem.prototype.isCitrusFree = function(){
	var citrusFree = true;

	this.contents.forEach(function (element) {
		if(element.citrusFree === false) {
			citrusFree = false
		}
	})
	return citrusFree
}

		var beer1 = new DrinkItem (

			'Peroni',
			'Italian beer imported from Rome.',
			8.00,
			[beer],
			true,
			true,
			false

			)

		var wine = new DrinkItem (

			'House, White, or Red',
			'Our sommelier\'s regional choice from Italy',
			8,
			[wine],
			true,
			true,
			false

			)

// FOOD PLATES


var plateArray = [];
		var FoodPlate = function(name, description, price, contents) {

			this.name = name;
			this.description = description;
			this.price = price;
			this.contents = contents;
			this.activeToolTip = false;
			plateArray.push(this)

		}
FoodPlate.prototype.isVegan = function(){
	var vegan = true;

	this.contents.forEach(function (element) {
		if(element.vegan === false) {
			vegan = false
		}
	})
	return vegan
}
FoodPlate.prototype.isGlutenFree = function(){
	var glutenFree = true;

	this.contents.forEach(function (element) {
		if(element.glutenFree === false) {
			glutenFree = false
		}
	})
	return glutenFree
}
FoodPlate.prototype.isCitrusFree = function(){
	var citrusFree = true;

	this.contents.forEach(function (element) {
		if(element.citrusFree === false) {
			citrusFree = false
		}
	})
	return citrusFree
}


		var pizza1 = new FoodPlate (

			'Margherita Pizza',
			'Traditional margherita pizza. San Marzano tomatos, fresh mozzerella and basil.',
			14.95,
			[mozz, basil, red],
			false,
			true
			)

		var pizza2 = new FoodPlate (

			'The Young Vito',
			'The Don\'s son loves this pie! Thin sliced polledori sausage and green peppers.',
			18.95,
			[sau, gp],
			false,
			true

			)

		var pizza3 = new FoodPlate (

			'The Greek',
			'We\'re not in Italy anymore. Feta, spinach, tomatoes, black and green olives and an EVOO and garlic drizzle for the sauce.',
			18.95,
			[feta, spin, toms, bo, go, evoo, gar],
			false,
			true

			)

// MENU

var menuArray = []
var Menu = function(drinks, foods) {
	this.drinks = drinks;
	this.foods = foods;
	menuArray.push(this)
}

		var menuArray = new Menu(drinkArray, plateArray)

// RESTAURANT INFO

var Restaurant = function(name, address, phone, description, email, owners, menu) {
	this.name = name;
	this.address = address;
	this.phone = phone;
	this.description = description;
	this.email = email;
	this.owners = owners;
	this.menu = menuArray;
}

		var restaurantInfo = new Restaurant (
			'Cappelli\'s',
			'101 Meade Street.  Denver, CO 80204',
			'303-EAT-HERE',
			'Neapolitan style pizza based off recipes from the old world. All dough is made fresh daily, and pizzas are fired in nonno\'s woodfire oven.\nOrder Online when browsing our menu below.',
			'cappellis@pizza.com',
			'Nonno Cappelli',
			menuArray
			)
// CUSTOMER

var custyArray = []
var Customer = function(vegan, glutenFree, citrusFree){
	this.vegan = vegan
	this.glutenFree = glutenFree
	this.citrusFree = citrusFree
	custyArray.push(this)
}

///////////////////////////////

	return {
		restaurant		: restaurantInfo,
		menuArray		: menuArray,
		custyArray  	: custyArray,
		ingredientArray : ingredientArray,
		drinkArray		: drinkArray,
		plateArray		: plateArray
	}

	}]);

//////////////////////////////

angular.module('RestaurantApp')
	.controller('controllerRestaurant', ['$scope', 'factoryRestInfo', function($scope, factoryRestInfo) {

		// FACORY to CONTROLLER SCOPES

		$scope.custyArray = factoryRestInfo.custyArray;
		$scope.menuComplete = factoryRestInfo.menuArray; 
		$scope.restaurantDeets = factoryRestInfo.restaurant;
		$scope.ingredientArray = factoryRestInfo.ingredientArray;
		$scope.drinkArray = factoryRestInfo.drinkArray;
		$scope.plateArray = factoryRestInfo.plateArray

		// SHOW-HIDE FUNCTIONS 

		$scope.userMessage = "Enter Your Info"	
			$scope.messageList = function() {
				$scope.listAppearWhenClicked = !$scope.listAppearWhenClicked;
					if ($scope.listAppearWhenClicked === !true) {
						$scope.userMessage = "Enter Your Info"
					}
					else {
						$scope.userMessage = "Close"
					}
				}

		// ORDER TOTAL FUNCTION

		$scope.rounded = 0
		$scope.orderTotal = 0
		$scope.order = [];
			$scope.addItem = function (item) {
				$scope.order.push(item)
				$scope.orderTotal = $scope.orderTotal+item.price;
				$scope.rounded = $scope.orderTotal.toFixed(2);
			}

		// CUSTOMER INFO & TOOLTIPPER

		$scope.emptyForm = function () {
			$scope.diet = {
			name: "",
			address: "",
			phone: "",
			vegan : "",
			glutenFree : "",
			citrusFree : ""
			}
		}

		$scope.saveCusty = function() {
				$scope.listAppearWhenClicked = !$scope.listAppearWhenClicked;
				$scope.custyArray.push($scope.diet);
				console.log($scope.custyArray)

			for (var i = 0; i < $scope.custyArray.length; i++) {

				for (var j = 0; j < $scope.plateArray.length; j++) {
					if ( $scope.custyArray[i].vegan === true && $scope.plateArray[j].isVegan() === false) {
						$scope.plateArray[j].activeToolTip = true;
					}
					else if ($scope.custyArray[i].glutenFree === true && $scope.plateArray[j].isGlutenFree() === false){
						$scope.plateArray[j].activeToolTip = true;
					}
					else if ($scope.custyArray[i].citrusFree === true && $scope.plateArray[j].isCitrusFree() === false){
						$scope.plateArray[j].activeToolTip = true;
					}
				}
				for (var j = 0; j < $scope.drinkArray.length; j++) {
					if ( $scope.custyArray[i].vegan === true && $scope.drinkArray[j].isVegan() === false) {
						$scope.drinkArray[j].activeToolTip = true;
					}
					else if ($scope.custyArray[i].glutenFree === true && $scope.drinkArray[j].isGlutenFree() === false){
						$scope.drinkArray[j].activeToolTip = true;
					}
					else if ($scope.custyArray[i].citrusFree === true && $scope.drinkArray[j].isCitrusFree() === false){
						$scope.drinkArray[j].activeToolTip = true;
					}
				}
			}
			$scope.emptyForm();
				if ($scope.listAppearWhenClicked === !true) {
					$scope.userMessage = "Enter Your Info"
				}
				else {
					$scope.userMessage = "Close"
				}
		}
			
			$scope.resetForm = function() {
				$scope.custyArray = []
				for (var i = 0; i < $scope.plateArray.length; i++) {
					$scope.plateArray[i].activeToolTip = false;
				}
				for (var j = 0; j < $scope.drinkArray.length; j++) {
					$scope.drinkArray[j].activeToolTip = false;
				}
			}
	}]);

