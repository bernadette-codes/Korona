
(function(){
    var app = angular.module('korona', []);

    app.controller('salonPhotosController', function($scope){
        $scope.photoTop = [
            { alt: 'Salon1', photo: 'img/salon1.jpg'},
            { alt: 'Salon2', photo: 'img/salon2.jpg'}
        ];
        $scope.photoBottom = [
            { alt: 'Salon3', photo: 'img/salon3.jpg'},
            { alt: 'Salon4', photo: 'img/salon4.jpg'}
        ];
    });

    app.controller('servicesController', function($scope){
        $scope.serviceslist = [
            {
                type: 'Haircuts & Styling',
                lists: [
                    ['Short Haircut', '$65'],
                    ['Long Haircut', '$85'],
                    ['Bang Trim', '$10'],
                    ['Wash & Blow Dry', '$40'],
                    ['Flat/Curling Iron', '$10**'],
                    ['Blow Dry with Color', '$20**'],
                    ['Up-do', '$80*'],
                    ['Body Wave Perm', '$85*'],
                    ['Small Curl', '$100*'],
                    ['Japanese Straight', '$300*']
                ],
                info: '**additional'
            },
            {
                type: 'Color & Treatment',
                lists: [
                    ['Single Process Color', '$95*'],
                    ['Double Process Color', '$140*'],
                    ['Touch Up', '$80'],
                    ['Color Gloss/Clear-Shine', '$75*'],
                    ['Highlights', '$100*'],
                    ['Deep Conditioning', '$50*'],
                    ['Keratin Treatment', '$350*']
                ],
                info: '*prices starting from'
            }
        ]
    });

    /*
    app.controller('hairstylesController', function($scope){
        $scope.gallery = [
            { name: 'Women Hairstyle Shoulder Length', photo: 'img/hairtsyle1.jpg'},
            { name: 'Women Hairstyle Shoulder Length', photo: 'img/hairtsyle2.jpg'},
            { name: 'Women Hairstyle Shoulder Length', photo: 'img/hairtsyle3.jpg'},
            { name: 'Women Hairstyle Long', photo: 'img/hairtsyle4.jpg'},
            { name: 'Women Hairstyle Long', photo: 'img/hairtsyle5.jpg'},
            { name: 'Women Hairstyle Long', photo: 'img/hairtsyle6.jpg'},
            { name: 'Men Hairstyle', photo: 'img/hairtsyle12.jpg'},
            { name: 'Men Hairstyle', photo: 'img/hairtsyle7.jpg'},
            { name: 'Men Hairstyle', photo: 'img/hairtsyle11.jpg'},
            { name: 'Men Hairstyle', photo: 'img/hairtsyle8.jpg'},
            { name: 'Men Hairstyle', photo: 'img/hairtsyle10.jpg'},
            { name: 'Men Hairstyle', photo: 'img/hairtsyle9.jpg'}
        ];
    });*/

    app.directive('salonPhotos', function(){
        return {
            template:
            '<div class="thumbnail">' +
                '<img ng-src="{{salonPhotos.photo}}" alt="{{salonPhotos.alt}}" class="img-responsive">' +
            '</div>'
        };
    });

})();
