var app = angular.module("mainApp",[])

app.controller("CrudController",function($scope){

  $scope.update=false;
  $scope.add=false;
  $scope.addBtn=true;
  $scope.newGrocery = {};
  $scope.filterByCategory = {};
  $scope.filters= [
    {
      category: "All"
    },
    {
      category: "Vegetable"
    },
    {
      category: "Fruits"
    },
    {
      category: "Chips"
    },
    {
      category: "Chocolates"
    },
    {
      category: "Sauce"
    }
  ],
  $scope.groceryItems=[
    {
      Id: 1,
      category:"vegetable",
      name: "peas",
      price: 2.00
    },
    {
      Id: 2,
      category:"chocolates",
      name: "picnic",
      price: 1.00
    },
    {
      Id: 3,
      category:"chocolates",
      name: "DairyMilk",
      price: 2.50
    },
    {
      Id: 4,
      category:"Sauce",
      name: "Tomoto Sauce",
      price: 3.00
    },
    {
      Id: 5,
      category:"Sauce",
      name: "Barbecue Sauce",
      price: 3.50
    },
    {
      Id: 6,
      category:"Fruits",
      name: "Apple",
      price: 3.00
    },
    {
      Id: 7,
      category:"vegetable",
      name: "potato",
      price: 3.00
    },
    {
      Id: 8,
      category:"Fruits",
      name: "Banana",
      price: 3.00
    },
    {
      Id: 9,
      category:"Chips",
      name: "Lays",
      price: 1.00
    }
  ];

  //function to add the item
  $scope.addItem = function () {
      $scope.groceryItems.push($scope.newGrocery);
      $scope.add=false;

      $scope.newGrocery = {};//to reset all the values to default

  };

  $scope.showAdd = function() {
    $scope.add=true;
    $scope.update=false;
    $scope.addBtn=true;
    $scope.newGrocery = {}
  }

  //function to delete the item
  $scope.deleteItem = function(index) {
    $scope.groceryItems.splice(index, 1);
  }

  //function to edit the item
  $scope.editItem = function (item) {
    $scope.newGrocery.Id = item.Id;
    $scope.newGrocery.category = item.category;
    $scope.newGrocery.name = item.name;
    $scope.newGrocery.price = item.price;
    $scope.update=true;
    $scope.add=true;
    $scope.addBtn=false;
  }

  //function to update the item
  $scope.updateItem = function () {
    $.grep($scope.groceryItems, function (e) {
        if (e.Id == $scope.newGrocery.Id) {
            e.category = $scope.newGrocery.category;
            e.name = $scope.newGrocery.name;
            e.price = $scope.newGrocery.price;
        }
    });
    $scope.add=false;
    $scope.newGrocery = {}
  }

//function to filter on button filters
 $scope.setFilterByCategory = function(category) {
    if(category == 'All') {
      $scope.filterByCategory = {};
    }
   else if ($scope.filterByCategory.category !== category) {
    $scope.filterByCategory.category = category;
   }
 };

});
