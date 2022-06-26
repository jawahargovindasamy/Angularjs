var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
    $scope.message = "AngularJS Tutorial";
});

myApp.controller("myController1", function ($scope) {

    var employee = {
        firstName: 'Mark',
        lastName: 'Hastings',
        gender: 'Male'
    };

    $scope.employee = employee;
});


myApp.controller("myController2", function ($scope) {
        var country = {
            name: "United States of America",
            capital: "Washington, D.C.",
            flag: "/Images/usa-flag.png"
        };
        $scope.country = country;
});

myApp.controller("myController3", function ($scope) {
     $scope.message = "Hello Angular"
});

myApp.controller("myController4", function ($scope) {

     var employees = [
         { firstName: "Ben", lastName: "Hastings", gender: "Male", salary: 55000 },
         { firstName: "Sara", lastName: "Paul", gender: "Female", salary: 68000 },
         { firstName: "Mark", lastName: "Holland", gender: "Male", salary: 57000 },
         { firstName: "Pam", lastName: "Macintosh", gender: "Female", salary: 53000 },
         { firstName: "Todd", lastName: "Barber", gender: "Male", salary: 60000 }
     ];

     $scope.employees = employees;
 });

myApp.controller("myController5", function ($scope) {

     var countries = [
         {
             name: "UK",
             cities: [
                 { name: "London" },
                 { name: "Birmingham" },
                 { name: "Manchester" }
             ]
         },
         {
             name: "USA",
             cities: [
                 { name: "Los Angeles" },
                 { name: "Chicago" },
                 { name: "Houston" }
             ]
         },
         {
             name: "India",
             cities: [
                 { name: "Hyderabad" },
                 { name: "Chennai" },
                 { name: "Mumbai" }
             ]
         }
     ];

     $scope.countries = countries;
 });

myApp.controller("myController6", function ($scope) {

     var technologies = [
         { name: "C#", likes: 0, dislikes: 0 },
         { name: "ASP.NET", likes: 0, dislikes: 0 },
         { name: "SQL", likes: 0, dislikes: 0 },
         { name: "AngularJS", likes: 0, dislikes: 0 }
     ];

     $scope.technologies = technologies;

     $scope.incrementLikes = function (technology) {
         technology.likes++;
     };

     $scope.incrementDislikes = function (technology) {
         technology.dislikes++;
     };
 });

myApp.controller("myController7", function ($scope) {

    var employees = [
        {
            name: "Ben", dateOfBirth: new Date("November 23, 1980"),
            gender: "Male", salary: 55000.788
        },
        {
            name: "Sara", dateOfBirth: new Date("May 05, 1970"),
            gender: "Female", salary: 68000
        },
        {
            name: "Mark", dateOfBirth: new Date("August 15, 1974"),
            gender: "Male", salary: 57000
        },
        {
            name: "Pam", dateOfBirth: new Date("October 27, 1979"),
            gender: "Female", salary: 53000
        },
        {
            name: "Todd", dateOfBirth: new Date("December 30, 1983"),
            gender: "Male", salary: 60000
        }
    ];

    $scope.employees = employees;
    $scope.rowCount = 3;
});

myApp.controller("myController8", function ($scope) {

      var employees = [
          {
              name: "Ben", dateOfBirth: new Date("November 23, 1980"),
              gender: "Male", salary: 55000
          },
          {
              name: "Sara", dateOfBirth: new Date("May 05, 1970"),
              gender: "Female", salary: 68000
          },
          {
              name: "Mark", dateOfBirth: new Date("August 15, 1974"),
              gender: "Male", salary: 57000
          },
          {
              name: "Pam", dateOfBirth: new Date("October 27, 1979"),
              gender: "Female", salary: 53000
          },
          {
              name: "Todd", dateOfBirth: new Date("December 30, 1983"),
              gender: "Male", salary: 60000
          }
      ];

      $scope.employees = employees;
      $scope.sortColumn = "name";
      $scope.reverseSort = false;

      $scope.sortData = function (column) {
          $scope.reverseSort = ($scope.sortColumn == column) ?
              !$scope.reverseSort : false;
          $scope.sortColumn = column;
      }

      $scope.getSortClass = function (column) {

          if ($scope.sortColumn == column) {
              return $scope.reverseSort
                  ? 'arrow-down'
                  : 'arrow-up';
          }

          return '';
      }
  });

myApp.controller("myController9", function ($scope) {

    var employees = [
        { name: "Ben", gender: "Male", salary: 55000, city: "London" },
        { name: "Sara", gender: "Female", salary: 68000, city: "Chennai" },
        { name: "Mark", gender: "Male", salary: 57000, city: "London" },
        { name: "Pam", gender: "Female", salary: 53000, city: "Chennai" },
        { name: "Todd", gender: "Male", salary: 60000, city: "London" },
    ];

    $scope.employees = employees;
});

myApp.filter("gender", function () {
    return function (gender) {
        switch (gender) {
            case 1:
                return "Male";
            case 2:
                return "Female";
            case 3:
                return "Not disclosed";
        }
    }
})
myApp.controller("myController10", function ($scope) {

        var employees = [
            { name: "Ben", gender: 1, salary: 55000 },
            { name: "Sara", gender: 2, salary: 68000 },
            { name: "Mark", gender: 1, salary: 57000 },
            { name: "Pam", gender: 2, salary: 53000 },
            { name: "Todd", gender: 3, salary: 60000 }
        ];

        $scope.employees = employees;
    });

myApp.controller("myController11", function ($scope) {
     var countries = [
         {
             name: "India",
             cities: [
                 { name: "Hyderabad" },
                 { name: "Chennai" }
             ]
         },
         {
             name: "USA",
             cities: [
                 { name: "Los Angeles" },
                 { name: "Chicago" },
             ]
         }
     ];

     $scope.countries = countries;
});


myApp.controller("myController12", function ($scope, $http) {

     $http.get("EmployeeService.asmx/GetAllEmployees")
         .then(function (response) {
             $scope.employees = response.data;
         });
 });
