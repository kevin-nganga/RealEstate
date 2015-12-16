'use strict';

/**
 * @ngdoc overview
 * @name realEstateApp
 * @description
 * # realEstateApp
 *
 * Main module of the application.
 */
var app = angular
  .module('realEstateApp', [
    'ngTable',
    'ui.router',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index");

    $stateProvider
      .state('/index', {
        url:'/index',
        templateUrl: 'views/home.html',
        controller: 'home'
      })
      .state('login', {
         url:'/login',
         templateUrl: 'views/login.html',
         controller: 'login'
      })
      .state('register', {
        url:'/register',
        templateUrl: 'views/registration.html',
        controller: 'register'
      })
      .state('rent', {
        url:'/rentals',
        templateUrl: 'views/rent.html',
        controller: 'rent'
      })
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/dashboard.html'
      })
      .state('properties', {
        url:'/properties',
        templateUrl: 'views/dashboard/properties.html',
        parent: 'dashboard',
        controller: 'properties'
      })
      .state('newProperty', {
        url:'/newProperty',
        templateUrl: 'views/dashboard/newProperty.html',
        parent: 'dashboard',
        controller: 'newProperty'
      })
      .state('profile', {
        url:'/profile',
        templateUrl: 'views/dashboard/profile.html',
        parent: 'dashboard',
        controller: 'profile'
      })

  });
