angular.module('app', [ 'ng-mfux', 'ui.router' ])
    .config([
        '$qProvider',
        function($qProvider) {
            $qProvider.errorOnUnhandledRejections(false);
        }
    ]);

angular.element(function() {
    angular.bootstrap(document, [ 'app' ]);
});
