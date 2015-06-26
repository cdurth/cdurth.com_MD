angular
  .module('app', ['ngMaterial', 'ngAnimate', 'ngCookies', 'ngLodash', 'ui.router', 'sideBarLeft', 'navbar'])
  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider) {
  $stateProvider
    .state('home', {
    url: '/main',
    templateUrl: 'app/main/main.html',
    controller: 'mainCtrl'
  })
    .state('about', {
    url: '/about',
    templateUrl: 'app/about/about.html',
  })
    .state('labs', {
    url: '/labs',
    templateUrl: 'app/labs/labs.html',
    controller: 'labsCtrl'
  })
    .state('contact', {
    url: '/contact',
    templateUrl: 'app/contact/contact.html',
  });


  $urlRouterProvider.otherwise('/main');


  $mdIconProvider
    .icon("home", "./assets/svg/home.svg", 128)
    .icon("about", "./assets/svg/about.svg", 128)
    .icon("labs", "./assets/svg/labs.svg", 128)
    .icon("contact", "./assets/svg/contact.svg", 128)
    .icon("menu", "./assets/svg/menu.svg", 24)
    .icon("share", "./assets/svg/share.svg", 24)
    .icon("google_plus", "./assets/svg/google_plus.svg", 512)
    .icon("hangouts", "./assets/svg/hangouts.svg", 512)
    .icon("twitter", "./assets/svg/twitter.svg", 512)
    .icon("phone", "./assets/svg/phone.svg", 512);

  $mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('red');

});