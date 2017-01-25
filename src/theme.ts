export default themeConfig;

function themeConfig($mdThemingProvider: angular.material.IThemingProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('teal', {
            'default': '400',
            'hue-1': '100',
            'hue-2': '600',
            'hue-3': 'A100'
        })
        .accentPalette('amber', {
            'default': '200'
        });
}
