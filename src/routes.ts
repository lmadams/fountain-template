export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider,
                      $locationProvider: angular.ILocationProvider) {

    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            url: '/',
            component: 'app'
        });

    $stateProvider
        .state('categorias', {
            url: '/categorias',
            component: 'categorias'
        });

    $stateProvider
        .state('produtos', {
            url: '/produtos',
            component: 'produtos'
        });
}
