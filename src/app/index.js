angular
  .module('app', ['ngMaterial', 'ngAnimate','ngCookies','ngLodash', 'ui.router', 'sideBarLeft', 'navbar'])
  .config(function($stateProvider, $urlRouterProvider,$mdThemingProvider, $mdIconProvider){
    $stateProvider
      .state('home', {
        url: '/',
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
    })         
    .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
    });
        

    $urlRouterProvider.otherwise('/');


    $mdIconProvider
      .icon("vinyl"      , "./assets/svg/vinyl.svg"       , 128)
      .icon("party"      , "./assets/svg/party.svg"       , 128)
      .icon("question"   , "./assets/svg/question.svg"    , 128)
      .icon("email"      , "./assets/svg/email.svg"       , 128)
      .icon("menu"       , "./assets/svg/menu.svg"        , 24)
      .icon("share"      , "./assets/svg/share.svg"       , 24)
      .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
      .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
      .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
      .icon("phone"      , "./assets/svg/phone.svg"       , 512);

      $mdThemingProvider.theme('default')
        .primaryPalette('grey')
        .accentPalette('red');

  });