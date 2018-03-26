app.directive('onKeyUp', function () {
    return function (scope, element, attrs) {
        element.bind("keyup", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.onKeyUp);
                });
                event.preventDefault();
            }
        });
    };
});