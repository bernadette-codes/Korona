
(function(){
    var app = angular.module('korona', []);

    app.controller('HomeController', ['$scope', '$http', function($scope, $http){

        $http.get('data/photoShow.json').success(function(data){
            $scope.photoShow = data;
        });

    }]);

    app.controller('SalonPhotosController', function($scope){
        $scope.photoTop = [
            { alt: 'Salon1', photo: '../img/salon1.jpg' },
            { alt: 'Salon2', photo: '../img/salon2.jpg' }
        ];
        $scope.photoBottom = [
            { alt: 'Salon3', photo: '../img/salon3.jpg' },
            { alt: 'Salon4', photo: '../img/salon4.jpg' }
        ];
    });

    /*
     app.controller('SalonPhotosController', ['$scope', '$http', function($scope, $http){

     $http.get('../data/photoTop.json').success(function(data){
     $scope.photoTop = data;
     });

     $http.get('../data/photoBottom.json').success(function(data){
     $scope.photoBottom = data;
     });

     }]);
     */

    app.controller('ServicesController', ['$scope', '$http', function($scope, $http){

        $http.get('../data/salonServices.json').success(function(data){
            $scope.serviceslist = data;
        });

    }]);

    app.controller('HairstylesController', function($scope){
        $scope.gallery = [
            { name: 'Women Hairstyle Shoulder Length', photo: '../img/hairtsyle1.jpg', slideNum: 0 },
            { name: 'Women Hairstyle Shoulder Length', photo: '../img/hairtsyle2.jpg', slideNum: 1 },
            { name: 'Women Hairstyle Shoulder Length', photo: '../img/hairtsyle3.jpg', slideNum: 2 },
            { name: 'Women Hairstyle Long', photo: '../img/hairtsyle4.jpg', slideNum: 3 },
            { name: 'Women Hairstyle Long', photo: '../img/hairtsyle5.jpg', slideNum: 4 },
            { name: 'Women Hairstyle Long', photo: '../img/hairtsyle6.jpg', slideNum: 5 },
            { name: 'Men Hairstyle', photo: '../img/hairtsyle12.jpg', slideNum: 6 },
            { name: 'Men Hairstyle', photo: '../img/hairtsyle7.jpg', slideNum: 7 },
            { name: 'Men Hairstyle', photo: '../img/hairtsyle11.jpg', slideNum: 8 },
            { name: 'Men Hairstyle', photo: '../img/hairtsyle8.jpg', slideNum: 9 },
            { name: 'Men Hairstyle', photo: '../img/hairtsyle10.jpg', slideNum: 10 },
            { name: 'Men Hairstyle', photo: '../img/hairtsyle9.jpg', slideNum: 11 }
        ];
    });

    /*
     app.controller('HairstylesController', ['$scope', '$http', function($scope, $http){

     $http.get('../data/gallery.json').success(function(data){
     $scope.gallery = data;
     });

     }]);
     */

    app.directive('salonPhotos', function(){
        return {
            template:
            '<div class="thumbnail">' +
            '<img ng-src="{{salonPhotos.photo}}" alt="{{salonPhotos.alt}}" class="img-responsive">' +
            '</div>'
        };
    });

})();
