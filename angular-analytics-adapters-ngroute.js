angular.module('l42y.analytics.adapters.ngroute', [
  'ngRoute',
  'l42y.analytics'
]).run(function (
  $location,
  $rootScope,
  Analytics
) {
  $rootScope.$on('$routeChangeSuccess', function () {
    Analytics.page($location.url());
  });
});
