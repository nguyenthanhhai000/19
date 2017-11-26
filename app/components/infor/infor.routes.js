(function () {
    angular.module('app.components.infor')
        .config(Infor);

    Control.$inject = ['$stateProvider'];
    function Control($stateProvider) {
        $stateProvider
            .state('index.infor', {
                url: '/infor',
                templateUrl: 'app/components/infor/infor.html',
                controller: 'InforController',
                controllerAs: 'vm',
                 ncyBreadcrumb: {
                label: 'Thông tin'
            }
            });
    }
})();
