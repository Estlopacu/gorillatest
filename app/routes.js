export default function routing($routeProvider) {
  $routeProvider.
     when('/', {
       templateUrl: 'app/partials/Home/Home.html',
       controller: 'HomeController as ctrl'
     });
}
