(function(){
  'use strict';

  angular.module('sideBarLeft')
         .service('sideBarLeftService', ['$q', menuItems]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function menuItems($q){
    var items = [
      {
        name: 'Home',
        avatar: 'home',
        route: 'home'
      },
      {
        name: 'About Me',
        avatar: 'about',
        route: 'about'
      },
      {
        name: 'Labs',
        avatar: 'labs',
        route: 'labs'
      },
      {
        name: 'Contact',
        avatar: 'contact',
        route: 'contact'
      }
    ];

    // Promise-based API
    return {
      loadAll : function() {
        // Simulate async nature of real remote calls
        return $q.when(items);
      }
    };
  }

})();
