
authService.$inject = ["lock", "authManager", "$rootScope"];var app = angular.module('examples', ['my-angular-components', 'ngFabForm', 'ui.router', 'auth0.lock', 'angular-jwt']);

app.config(["$stateProvider", "lockProvider", "$urlRouterProvider", "jwtOptionsProvider", function ($stateProvider, lockProvider, $urlRouterProvider, jwtOptionsProvider) {
    var helloState = {
        name: 'hello',
        url: '/hello',
        controllerAs: "vm",
        controller: function ($rootScope) {
            var vm = this;
            vm.isAuthenticated = $rootScope.isAuthenticated;

        },
        template: '<h3>{{vm.isAuthenticated}}</h3>'
    };

    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    };

    var login = {
        name: 'login',
        url: '/login',
        controller: 'LoginController',
        templateUrl: 'src/client/app/Examples/login.html',
        controllerAs: 'vm'
    };

    var logout = {
        name: 'logout',
        url: '/logout',
        controller: function(authService){
          authService.logout();
        },
        template: '<h1>You have logged Out</h1>',
        controllerAs: 'vm'
    };


    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
    $stateProvider.state(login);
     $stateProvider.state(logout);

    // Configuration for angular-jwt
    jwtOptionsProvider.config({
        tokenGetter: function () {
            return localStorage.getItem('id_token');
        }
    });

    lockProvider.init({
        clientID: 'UY5BHrujRwp7y1TZQl1Bif88aeeVRkrU',
        domain: 'volunteernow.auth0.com'
    });

    $urlRouterProvider.otherwise('/hello');
}]);

app.run(run);

run.$inject = ['$rootScope', 'authService', 'lock', 'authManager'];

function run($rootScope, authService, lock, authManager) {
    // Put the authService on $rootScope so its methods
    // can be accessed from the nav bar
    $rootScope.authService = authService;

    // Register the authentication listener that is
    // set up in auth.service.js
    authService.registerAuthenticationListener();

    // Use the authManager from angular-jwt to check for
    // the user's authentication state when the page is
    // refreshed and maintain authentication
    authManager.checkAuthOnRefresh();

    // Register the synchronous hash parser
    // when using UI Router
    lock.interceptHash();
}


function authService(lock, authManager, $rootScope) {

    function login() {
        lock.show();
    }



    function logout() {
        localStorage.removeItem('id_token');
        authManager.unauthenticate();
    }

    // Set up the logic for when a user authenticates
    // This method is called from app.run.js
    function registerAuthenticationListener() {
        lock.on('authenticated', function (authResult) {
            localStorage.setItem('id_token', authResult.idToken);
            authManager.authenticate();
        });
    }

    return {
        login: login,
        logout: logout,
        isAuthenticated: $rootScope.isAuthenticated,
        registerAuthenticationListener: registerAuthenticationListener
    };
}

app.service('authService', authService);



(function () {
  'use strict';

  LoginController.$inject = ["authService"];
  angular
    .module('examples')
    .controller('LoginController', LoginController);

  function LoginController(authService) {

    var vm = this;

    vm.authService = authService;

  }
})();
var common = {
    templateUrl: "src/client/app/Examples/Common/commonTemplate.html"
};

angular.module('examples').component('statusAlerts', common);


var dates = {
    controllerAs: 'vm',
    controller: function(){
        var vm = this;

    

        vm.$onInit = function(){
            vm.sampleDate = new Date();
        };
    },
    templateUrl: "src/client/app/Examples/Dates/datesTemplate.html"
};

angular.module('examples').component('datesExamples', dates);


var exampleForm = {
    controllerAs: 'vm',
    controller: function (ngFabForm, $timeout) {
        var vm = this;
        vm.simulateError = false;
        vm.customerForm = {};
        vm.status = {
            message: "",
            isError: false,
            show: false
        };


        vm.$onInit = function () {
            vm.sampleDate = new Date();
            vm.saving = true;
            vm.selectedCats = {};
            vm.selectedTags = {};
            vm.customFormOptions = angular.copy(ngFabForm.config);
        };


        vm.submit = function () {
            vm.status.isError = vm.simulateError;

            vm.saving = true;

            $timeout(function () {
                if (vm.status.isError)
                    vm.status.message = "Something went wrong!";
                else
                    vm.status.message = "Form Submitted";

                vm.status.show = true;
                vm.saving = false;
            }, 2000);



        };

        vm.cats = [{
            id: 1,
            name: "Cat 1"
        }, {
            id: 2,
            name: "Cat 2"
        }];

        vm.tags = [{
            id: 1,
            name: "VB.net"
        }, {
            id: 2,
            name: "c# "
        }];
    },
    templateUrl: "src/client/app/Examples/ExampleForm/exampleForm.html"
};

angular.module('examples').component('exampleForm', exampleForm);

var inputs = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.startDate = new Date();
        vm.firstName = "Kevin";
        vm.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e";
       
        vm.agree = true;
    },
    templateUrl: "src/client/app/Examples/Inputs/inputsTemplate.html"
};

angular.module('examples').component('inputExamples', inputs);

var adminLayoutExample = {
    controllerAs: "vm",
    controller: function () {
        var vm = this;

        vm.userName = "Test Username";

        vm.sideMenuItems = [{
            state: "hello",
            linkText: "hello",
            icon: "check"
        }, {
            state: "about",
            linkText: "about",
            icon: "users"
        }];

        vm.userMenuItems = [{
            state: "userprofile",
            linkText: "User Profile",
            icon: "user"
        }, {
            state: "useroptions",
            linkText: "User Options",
            icon: "cogs"
        }, {
            state: "logout",
            linkText: "Logout",
            icon: "cogs"
        }, {
            state: "login",
            linkText: "Login",
            icon: "check"
        }];

        vm.alertMenuItems = [{
            state: "alert1",
            linkText: "Alert 1",
            icon: "bell"
        }, {
            state: "alert2",
            linkText: "Alert 3",
            icon: "bell"
        }];

        vm.footerLinks = [{
                state: 'link1',
                linkText: "Link 1"
            }, {
                state: 'link2',
                linkText: "Link 2"
            }, {
                state: 'link3',
                linkText: "Link 3"
            },

        ]
    },
    templateUrl: "src/client/app/Examples/Layout/adminLayoutExampleTemplate.html"
};

angular.module("examples").component("adminLayoutExample", adminLayoutExample)

var modals = {
    controllerAs: 'vm',
    controller: function ($uibModal) {
        var vm = this;

        vm.open = function () {
            return $uibModal.open({
                templateUrl: 'src/client/app/Examples/Modals/sampleModalTemplate.html',
                controllerAs: 'vm',
                controller:function($uibModalInstance){
                    var vm = this;
                    vm.close = function () {
                      $uibModalInstance.close();
                    };
                }
            });
        };
    },
    templateUrl: "src/client/app/Examples/Modals/modalsTemplate.html"
};

angular.module('examples').component('modalExamples', modals);

var panels = {
    controllerAs: 'vm',
    controller: function(){
        var vm = this;

        vm.testTable = {
            Headers:['Titel 1', 'Title2'],
            Body:['Titel 1', 'Title2']
        };



        vm.add = function(){
                alert('Add Clicked');
        };

        vm.edit = function(){
                alert('Edit Clicked');
        };
    },
    templateUrl: "src/client/app/Examples/Panels/panelsTemplate.html"
};

angular.module('examples').component('panelExamples', panels);


var statusAlerts = {
    controllerAs: 'vm',
    controller: function(){
        var vm = this;

 
    },
    templateUrl: "src/client/app/Examples/StatusAlerts/statusAlertsTemplate.html"
};

angular.module('examples').component('statusAlerts', statusAlerts);


var tags = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.selectedCats = {};
        vm.selectedTags = {};
        
        vm.cats = [{
            id: 1,
            name: "Cat 1"
        }, {
            id: 2,
            name: "Cat 2"
        }];

        vm.tags = [{
            id: 1,
            name: "VB.net"
        }, {
            id: 2,
            name: "c# "
        }];
    },
    templateUrl: "src/client/app/Examples/Tags/tagsTemplate.html"
};

angular.module('examples').component('tags', tags);

var myCreateButton = {
    bindings: {
        id: '@',
        buttonText: '@',
        click: '&',
        cssClass:'@'
    },
    controllerAs: 'vm',
    controller: function(){
        var vm = this;
      
        vm.$onInit = function () {
            //default options
            vm.id = 'create';
            vm.buttonText = 'Create';
            vm.icon = 'plus';
            vm.cssClass = 'btn btn-success';
        };       
    },
    templateUrl: 'src/client/app/Components/Buttons/CreateButton/createButtonTemplate.html'
};


angular.module('my-angular-components').component('myCreateButton', myCreateButton);


