var app = angular.module('my-angular-components', [
    //angular
    'ngAnimate',
    'ngSanitize',

    //angular ui
    'ui.ace',
    'ui.bootstrap',
    'ui.select',
    'ui.grid',
  
]);
app.$inject = ['ngAnimate', 'ngSanitize', 'ui.ace', 'ui.bootstrap', 'ui.select', 'ui.grid'];



var cssClassService =  function () {
    

     var getlabelClass = function (horizontal, labelWidth) {
            if (horizontal === "true") {
                return "control-label col-sm-" + labelWidth;
            } else {
                return "";
            }
        };

        var getInputClass = function (horizontal, inputWidth) {
            if (horizontal)
                return  "col-sm-" + inputWidth;
            else
                return "";
        };


    return {
        getlabelClass: getlabelClass,
        getInputClass: getInputClass
    };
};

angular.module("my-angular-components").factory("cssClassService", cssClassService);
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
    templateUrl: 'createButtonTemplate.html'
};


angular.module('my-angular-components').component('myCreateButton', myCreateButton);




var mySpinnerButton = {
    bindings: {
        buttonText:'@',
        saving: '=',
        isDisabled:'@'
    },
    controllerAs: 'vm',
    controller: function(){
        var vm = this;
      
        vm.$onInit = function () {
            //default options
            // vm.id = 'spinnerButton';
            // vm.ngModel = 'Cliock';
            // vm.icon = 'fa fa-circle-o-notch';
            // vm.cssClass = 'btn btn-success';
             vm.saving = false;
             vm.isDisabled = false;
        };       
    },
    templateUrl: 'spinnerButtonTemplate.html'
};


angular.module('my-angular-components').component('mySpinnerButton', mySpinnerButton);




/**
 * 
 * @type {
 
  */
var myCategorySelect = {
    bindings: {
        selected: '=',
        items: '=',
        fieldName: '@',
        fieldLabel: '@',
        categoryField: '@'
    },
    controllerAs: 'vm',
    controller: function ($scope) {
        'use strict';

        var vm = this;
        vm.cats = [];
 // todo:tidy this
        vm.init = function () {
            if(vm.fieldLabel === undefined){
                vm.fieldLabel = 'Category';
            }

            if(vm.categoryField === undefined){
                vm.categoryField = 'Category';
            }
        };

       


        


        var isJson = function isJson(str) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        };

        var getCats = function (tags) {

            if (isJson(tags)) {
                return angular.fromJson(tags);
            }
            else {
                return tags.split(',');
            }

        };


var buildList = function () {

            //create a temporary list for building the list
            var catsList = [];


            // loop through all the tags in the list
            angular.forEach(vm.items, function (key, value) {

                // separate out tags
                var cats = getCats(key[vm.categoryField]);
                                
                //add unique values to the temporary list
                angular.forEach(cats, function (key, value) {
                    if (catsList.indexOf(key.trim()) === -1) {
                        catsList.push(key.trim());
                    }
                });

            });

            // copy sorted list to the main category list*/
            vm.cats = catsList.sort();

            //add an All option to the first item in the list
            vm.cats.unshift('All');

            // set the default option to All
            vm.selected = 'All';
        };

        // watch for changes
        $scope.$watch('vm.items', function () {

            if (vm.items !== undefined) {
                buildList();
            }
        });


        vm.init();

    },
    template: 'categorySelectTemplate.html'
};

myCategorySelect.$inject = ['$scope'];

angular.module('my-angular-components').component('myCategorySelect', myCategorySelect);
var myFilterTextbox = {
    bindings: {
        placeholder: '@',
        ngModel: '=',
        fieldName: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.$onInit = function () {
            vm.fieldName = 'filterTextBox';
            vm.placeholder = 'Filter';
        };


    },
    templateUrl: 'filterTextboxTemplate.html'
};


angular.module('my-angular-components').component('myFilterTextbox', myFilterTextbox);

var myPageTitle = {
    bindings: {
        ngModel: '@'
    },
    controllerAs: 'vm',
    controller: function () {

        vm.$onInit = function () {
            vm.ngModel = 'Set this text using ngModel';
        };
    },
    templateUrl: 'pageHeaderTemplate.html'
};

angular.module('my-angular-components').component('myPageTitle', myPageTitle);

var myInputField = {
    bindings: {
        fieldLabel: '@',
        fieldName: '@',
        labelWidth: '@',
        inputWidth: "@",
        ngModel: '=',
        required: '@',
        tooltip: '@',
        helpText: '@',
        readOnly: '@',
        horizontal: '@',
        inputType: '@',
        placeholder: '@'
    },
    controllerAs: 'vm',
    controller: function (cssClassService) {
        var vm = this;

        vm.cssClassService = cssClassService;


        vm.$onInit = function () {

            //defaults

            //vm.inputType = 'textbox';

            vm.required = false;
            vm.horizontal = false;
            vm.labelWidth = 3;
            vm.inputWidth = 9;
            vm.readOnly = false;
            vm.horizontal = false;
            vm.tooltip = "";
            vm.placeholder = "";
            vm.helpText = "";

            //defaults
            vm.fieldLabel = "Date";
            vm.locale = 'en-GB';
            vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            vm.format = vm.formats[0];
            vm.isOpened = false;
            vm.dateOptions = {
                formatYear: 'yy',
                maxDate: new Date(2020, 5, 22),
                minDate: new Date(),
                startingDay: 1
            };
        };

        // open the date popup
        vm.open = function () {
            vm.isOpened = true;
        };


    },
    templateUrl: 'inputFieldTemplate.html'
};

myInputField.$inject = ['cssClassService'];

angular.module('my-angular-components').component('myInputField', myInputField);

var mySelectField = {
    bindings: {
        fieldLabel: '@',
        fieldName: '@',
        labelWidth: '@',
        SelectWidth: "@",
        ngModel: '=',
        required: '@',
        tooltip: '@',
        helpText: '@',
        readOnly: '@',
        horizontal: '@',
        items: '=',
        inputType: '@',
        size: "@",
        multiSelect: "@"
    },
    controllerAs: 'vm',
    controller: function (cssClassService) {
        var vm = this;

        vm.cssClassService = cssClassService;



        vm.$onInit = function () {

            //defaults
            vm.inputType = "tags";
            vm.required = false;
            vm.horizontal = false;
            vm.labelWidth = 3;
            vm.inputWidth = 9;
            vm.readOnly = false;
            vm.horizontal = false;
            vm.tooltip = "";
            vm.placeholder = "";
            vm.helpText = "";
            vm.multiSelect = false;

        };




    },
    templateUrl: 'selectFieldTemplate.html'
};

mySelectField.$inject = ['cssClassService'];

angular.module('my-angular-components').component('mySelectField', mySelectField);


angular.module('my-angular-components').directive('markdown', function () {
    var converter = new Showdown.converter();


    var link = function (scope, element, attrs) {
        attrs.$observe('markdown', function (value) {
            var markup = converter.makeHtml(value);
            element.html(markup);
        });
    };

    return {
        restrict: 'A',
        link: link
    };
});

var myTextEditor = {
    bindings: {
        ngModel: '=',
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.options = {
            useWrapMode: true,
            showGutter: false,
            mode: 'markdown',
            firstLineNumber: 5,
        };
    },
    templateUrl: 'textEditorTemplate.html'
};


angular.module('my-angular-components').component('myTextEditor', myTextEditor);

var myModalButtons = {
    bindings: {
        save: '&',
        close: '&',
        saveText: '@',
        saveVisible: '@',
        closeVisible: '@',
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.$onInit = function () {
            //defaults        
            vm.saveText = 'Save';
            vm.closeText = 'Close';

            vm.saveVisible = true;
            vm.closeVisible = true;
        };

    },
    templateUrl: 'modalButtonsTempalte.html'
};

angular.module('my-angular-components').component('myModalButtons', myModalButtons);

//Todo: Allow customize header size
var myModalHeader = {
    bindings: {
        id: '@',
        title: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.$onInit = function () {
            //defaults
            vm.title = 'Set this text using the title property';
            vm.id = 'modalHeader';
        };


    },
    templateUrl: 'modalHeaderTempalte.html'
};


var app = angular.module('my-angular-components').component('myModalHeader', myModalHeader);

var myInfoPanel = {
    bindings: {
        infoText: '@',
        icon: '@',
        color: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.$onInit = function () {
            //deafults
            vm.ngModel = "Set this Text using ngModel";
            vm.icon = 'fa fa-info fa-2x';
            vm.color = '#64518A';
        };


        //TODO: Improve this
        vm.getStyle = function () {
            return ' border-left: 5px solid #64518A;' +
                ' border-radius: 0 15px 15px 0; !important; ' +
                ' padding: 1rem 1rem;   !important; ' +
                ' background: ' + vm.color + ' !important;' +
                ' font-size: 1.65rem; !important; margin: 0;  !important; ' +
                ' color: ' + vm.color + ' !important;';
        };

    },
    templateUrl: 'infoPanelTemplate.html'
};


angular.module('my-angular-components').component('myInfoPanel', myInfoPanel);

var myMoreLessButton = {
    bindings: {
        id: '@',
        buttonText: '@',
        click: '&',
        cssClass: '@',
        isCollapsed: '='
    },
    controllerAs: 'vm',
    controller: function () {
        'use strict';
        var vm = this;


        vm.$onInit = function () {
            //defaults
            vm.buttonText = 'More Search Options';
        };


        vm.getButtonText = function () {
            if (vm.isCollapsed) {
                return 'More Search Options';
            } else {
                return 'Fewer Search Options';
            }
        };

        vm.getButtonIcon = function () {
            if (vm.isCollapsed) {
                return 'fa fa-arrow-down';
            } else {
                return 'fa fa-arrow-up';
            }
        };
    },
    templateUrl: 'moreLessButtonTemplate.html'
};

angular.module('my-angular-components').component('myMoreLessButton', myMoreLessButton);

var myMorelessPanel = {
    transclude: true,
    bindings: {
        isCollapsed: '@',
        buttonText: '@',
        expandButtonText: '@',
        collapseButtonText: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        'use strict';

        var vm = this;

        vm.$onInit = function () {
            vm.buttonText = '';
            vm.isCollapsed = true;
            vm.collapseButtonText = "Less";
            vm.expandButtonText = "More";
        };


        //TODO: Allow chaning of Button text
        vm.getButtonText = function () {
            if (vm.isCollapsed) {
                return vm.expandButtonText;
            } else {
                return vm.collapseButtonText;
            }
        };

        //TODO: Allow changing of icon;
        vm.getButtonIcon = function () {
            if (vm.isCollapsed) {
                return 'fa fa-arrow-down';
            } else {
                return 'fa fa-arrow-up';
            }
        };



        // TODO: don't like this tidy
        // Returs a constructed style
        vm.getPanelStyle = function () {
            return 'overflow-y: ' + vm.getScrollBarVisibility(vm.showVerticalScrollBar);
        };

        vm.getPanelHeadingStyle = function () {
            if (vm.smallHeading !== undefined) {
                return 'padding: 3px 5px !important; ';
            }
            return 'padding: 10px 15px';
        };

        vm.getPanelContentStyle = function () {
            return 'overflow-y: auto;';
        };


        vm.getScrollBarVisibility = function (showVerticalScrollBar) {
            if (showVerticalScrollBar) {
                return 'scroll';
            } else {
                return 'hidden';
            }
        };

        //TODO: allow customization here
        vm.getButtonStyle = function () {
            if (vm.smallHeading !== undefined) {
                return 'margin-left: 5px; padding: 3px;';
            }
            return 'margin-left: 5px; padding: 10px;';
        };



    },
    templateUrl: 'moreLessPanel.html'
};


angular.module('my-angular-components').component("myMorelessPanel", myMorelessPanel);

var myPanel = {
    transclude: true,
    bindings: {
        title: '@',
        fieldName: '@',
        theme: '@',
        icon: '@',
        iconSize: '@',
        smallHeading: '@',
        showAddButton: '@',
        showEditButton: '@',
        addButtonId: '@',
        editButtonId: '@',
        add: '&',
        edit: '&',
        showFooter: '@',
        footerLeftLabel: '@',
        footerRightLabel: '@',
        height: '@',
        showVerticalScrollBar: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        'use strict';

        var vm = this;
        

         vm.$onInit = function() {
             vm.height = 150;
            vm.showVerticalScrollBar = false;
            vm.showAddButton = false;
            vm.showEditButton = false;
            vm.editButtonId = 'panelEditButton';
            vm.addButtonId = 'panelAddButton';
            vm.showFooter = false;
            vm.footerLeftLabel = '';
            vm.footerRightLabel = '';
            vm.theme = "success";
        };

        
     


        vm.getPanelStyle = function () {

            //var s = 'overflow-y: ' + vm.getScrollBarVisibility(vm.showVerticalScrollBar) ;
          //  console.log(s);
            
            return ''//overflow-y: ' + vm.getScrollBarVisibility(vm.showVerticalScrollBar) ;
            
        };
        
        vm.getPanelHeadingStyle = function () {
           if (vm.smallHeading !== undefined) {
                return ''//  'padding: 3px 5px !important; ';
            }
            return '' // 'padding: 10px 15px';
        };

        vm.getPanelContentStyle = function () {
            return ''//overflow-y: auto;';
        };

        
        vm.getScrollBarVisibility = function (showVerticalScrollBar) {
            if(showVerticalScrollBar){
                return 'scroll';
            }
            else {
                return 'hidden';
            }
        };

        vm.getButtonStyle = function () {
            if (vm.smallHeading !== undefined) {
                return '';
            }
            return '';
        };


    },
    templateUrl:'panelTemplate.html'
};


angular.module('my-angular-components').component('myPanel', myPanel);
var mySelectList = {
    bindings: {
        ngModel: '=',
        items: '=',
        fieldLabel: '@',
        fieldName: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.$onInit = function () {
            vm.items = [];
            vm.fieldLabel = 'You can set this text using field-label';
            vm.fieldName = 'mySelectField';
            vm.ngModel = 'null';
        };

    },
    templateUrl: 'selectListTemplate.html'

};


angular.module('my-angular-components').component('mySelectList', mySelectList);

var myStatusAlert = {
    bindings: {
        message: "@",
        isError: "@"
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;


        vm.$onInit = function () {
            vm.message = "";
            vm.isError = false;
        };

        vm.getClass = function () {
            if (vm.isError === 'true')
                return "errorMessage";
            else
                return "successMessage";
        };

        vm.getIcon = function () {
            if (vm.isError === 'true')
                return "fa fa-warning fa-2x";
            else
                return "fa fa-check fa-2x";
        };

        vm.getId = function () {
            if (vm.isError === 'true')
                return "errorMessage";
            else
                return "successMessage";
        };
       


    },
    templateUrl: 'statusAlertTemplate.html'
};


angular.module('my-angular-components').component('myStatusAlert', myStatusAlert);

/**
 * Date field component with Field Label, Date Popup, Help Popup
 */
var myDateField = {
    bindings: {
        ngModel: '=',
        fieldName: '@',
        fieldLabel: '@',
        tooltip: '@',
        dateOptions: '@',
        helpText: '@',
        readOnly: '@',
        horizontal: '@'
    },
    controllerAs: 'vm',
    controller: function (cssClassService) {
        'use strict';
        var vm = this;
        vm.cssClassService= cssClassService;
        vm.$onInit = function () {

            //defaults
            vm.fieldLabel = "Date";
            vm.locale = 'en-GB';
            vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            vm.format = vm.formats[0];
            vm.isOpened = false;
            vm.readOnly = false;
            vm.tooltip = "";
            vm.horizontal = false;
            vm.dateOptions = {
                formatYear: 'yy',
                maxDate: new Date(2020, 5, 22),
                minDate: new Date(),
                startingDay: 1
            };
        };



        // open the date popup
        vm.open = function () {
            vm.isOpened = true;
        };

    },
    templateUrl: 'dateFieldTemplate.html'
};

myDateField.$inject = ['cssClassService'];

var app = angular.module('my-angular-components')
    .component('myDateField', myDateField);

var adminLayout = {
    transclude: true,
    bindings: {
        title: '@',
        theme: '@',
        sideMenuItems: '=',
        userMenuItems: '=',
        alertMenuItems: '=',
        footerLinks: '=',
        userName:'@'
    },
    controllerAs: 'vm',
    controller: function ($scope) {
        'use strict';

        var vm = this;
        vm.colapsed = false;
     

        vm.userName = "";

        $scope.toggle = true;

        var mobileView = 992;

        // // $scope.getWidth = function () {
        // //     return window.innerWidth;
        // // };

        // $scope.$watch($scope.getWidth, function (newValue, oldValue) {
        //     if (newValue >= mobileView) {
        //         if (angular.isDefined($cookieStore.get('toggle'))) {
        //             $scope.toggle = !$cookieStore.get('toggle') ? false : true;
        //         } else {
        //             $scope.toggle = true;
        //         }
        //     } else {
        //         $scope.toggle = false;
        //     }

        // });

        $scope.toggleSidebar = function () {
            $scope.toggle = !$scope.toggle;
            // $cookieStore.put('toggle', $scope.toggle);
        };

        window.onresize = function () {
            $scope.$apply();
        };

        vm.getState = function () {
            if (vm.colapsed)
                return "open";
            else
                return "";
        };


    },
    templateUrl: 'src/client/app/Components/Layout/AdminLayout/AdminLayoutCore/adminLayoutTemplate.html'
};

adminLayout.$inject = ['$scope'];

angular.module('my-angular-components').component('adminLayout', adminLayout);

var alertsDropDownMenu = {
    bindings: {
        menuItems:'=',
    },
    controllerAs: 'vm',
    templateUrl: 'alertsDropDownMenuTemplate.html'
};


angular.module('my-angular-components').component('alertsDropDownMenu', alertsDropDownMenu);

var adminHeaderBar = {
    transclude: true,
    bindings: {
        title: '@',
        theme: '@',
        userMenuItems: "=",
        alertMenuItems: "=",
        userName: '@'
    },
    controllerAs: 'vm',
    templateUrl:'headerBarTemplate.html'
};


angular.module('my-angular-components').component('adminHeaderBar', adminHeaderBar);
var userOptionsDropDownMenu = {
    bindings: {
        menuItems:'=',
        userName: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        'use strict';

        var vm = this;
        
       

    },
    templateUrl: 'userOptionsDropDownMenuTemplate.html'
};


angular.module('my-angular-components').component('userOptionsDropDownMenu', userOptionsDropDownMenu);

var adminSideMenu = {
    transclude: true,
    bindings: {
        colapsed: '=',
        sideMenuItems:'=',
        footerLinks: '='
    },
    controllerAs: 'vm',
    controller: function () {
        'use strict';

        var vm = this;
        
        vm.$onInit = function () {
            vm.colapsed = true;
        };

        vm.toggleSidebar = function () {
            vm.colapsed = !vm.colapsed;
        };

    },
    templateUrl: 'sideMenuTemplate.html'
};


angular.module('my-angular-components').component('adminSideMenu', adminSideMenu);

var sideMenuFooter = {
    bindings: {
        links: '='
    },
    controllerAs: 'vm',
    templateUrl: 'sideFooterTemplate.html'
};


angular.module('my-angular-components').component('sideMenuFooter', sideMenuFooter);

var adminSideMenuItems = {
    bindings: {
        menuItems: '='
    },
    controllerAs: 'vm',
    controller: function ($rootScope) {
        var vm = this;

        vm.isAuthenticated = $rootScope.isAuthenticated;

        vm.showItem = function (item) {
            if (item.requiresLogin) {
                if (vm.isAuthenticated) {
                    return true;
                }
            } else
                return true;

        };
    },
    templateUrl: 'sideMenuItemsTemplate.html'
};

adminSideMenuItems.$inject = ['$rootScope'];

angular.module('my-angular-components').component('adminSideMenuItems', adminSideMenuItems);

angular.module('templates').run(['$templateCache', function($templateCache) {$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/Buttons/CreateButton/createButtonTemplate.html','<div class=\'{{vm.cssClass}\' id=\'{{vm.id}}\' ng-click=\'vm.click()\'>\r\n    <!--Button Inner Text-->\r\n    {{vm.buttonText}}\r\n    <!--Font Awesome Icon-->\r\n    <i class=\'fa fa-{{vm.icon}}\'></i>\r\n</div>');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/Buttons/SpinnerButton/spinnerButtonTemplate.html','<button id=\'{{vm.id}}\' class="btn btn-success" ng-click=\'vm.click()\' n ng-disabled="vm.isDisabled">\r\n     <!--Button Inner Text-->\r\n     {{vm.buttonText}}  \r\n      <!--Font Awesome Icon-->\r\n     <i class=\'fa fa-circle-o-notch fa-spin\' ng-if="vm.saving"></i>\r\n</div>\r\n');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/ComboBoxes/CategorySelect/categorySelectTemplate.html','<div class=\'form-group\'>\r\n    <label class=\'control-label\' style=\'min-width: 110px; text-align: left\'>{{vm.fieldLabel}}</label>\r\n    <select ng-model=\'vm.selected\' class=\'form-control\'>\r\n            <option ng-repeat=\'category in vm.cats\'   value=\'{{category}}\' >{{category}}</option>\r\n        </select>\r\n</div>\r\n');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/Filters/FilterTextbox/filterTextboxTemplate.html','<div class=\'input-group\' style=\'display: flex\'>\r\n    <input type=\'text\' ng-model=\'vm.ngModel\' placeholder=\'{{vm.placeholder}}\' id=\'{{vm.fieldName}}\' class=\'form-control\' />\r\n    <button class=\'btn btn-default\' class=\'input-group-btn\' id=\'searchFilter\'> \r\n     <i class=\'glyphicon glyphicon-search\'></i> </button>\r\n</div>');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/Headers/PageHeader/pageHeaderTemplate.html','<H1 id=\'pagetitle\'>{{ vm.title }}</H1>\r\n');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/Inputs/InputField/inputFieldTemplate.html','<style>\r\n    .popover {\r\n        min-width: 200px;\r\n    }\r\n    \r\n    .input-group {\r\n        width: 100% !important;\r\n    }\r\n    \r\n    .input-group .form-control {\r\n        z-index: 100;\r\n    }\r\n\r\n</style>\r\n <h1>{{vm.inputType}}</h1>\r\n<div class="form-group">\r\n    <!--field label-->\r\n    <label ng-class="vm.cssClassService.getlabelClass(vm.horizontal, vm.labelWidth)" for="vm.fieldName">{{vm.fieldLabel}}       \r\n        \r\n    </label>\r\n    <div ng-class="vm.cssClassService.getInputClass(vm.horizontal, vm.inputWidth)">\r\n        <!--Input Types-->\r\n       \r\n        <div ng-if="!vm.readOnly" class="input-group">\r\n            <!--TextBox-->\r\n            <input ng-if="vm.inputType===\'textbox\'" ng-model="vm.ngModel" type="text" class="form-control" id="vm.fieldName" placeholder="{{vm.placeholder}}"\r\n                required="true">\r\n             <!--Number-->\r\n            <input  ng-model="vm.ngModel" type="number"  class="form-control" id="vm.fieldName"\r\n                required="true">\r\n            <!--Email-->\r\n            <input ng-if="vm.inputType===\'email\'" type="email" class="form-control" id="vm.fieldName" placeholder="{{vm.placeholder}}">\r\n            <!--TextArea-->\r\n            <textarea ng-if="vm.inputType===\'textarea\'" class="form-control" id="vm.fieldName" ng-model="vm.ngModel" placeholder="{{vm.placeholder}}"></textarea>\r\n            <!--CheckBox-->\r\n            <input ng-if="vm.inputType===\'checkbox\'" type="checkbox" id="vm.fieldName" ng-model="vm.ngModel" />\r\n            <!--Date-->\r\n            <span ng-if="vm.inputType===\'date\'">\r\n                <input type="text" class="form-control" uib-datepicker-popup="{{vm.format}}"\r\n                 ng-model="vm.ngModel" is-open="vm.isOpened" style="width: 82%"\r\n                datepicker-options="vm.dateOptions" ng-required="true" close-text="Close" alt-input-formats="altInputFormats">\r\n                 <span class="btn btn-default" ng-click="vm.open()"><i class="fa fa-bars"></i></span>\r\n            </input>\r\n            <!--DatePicker Open Button-->\r\n            </span>\r\n            <span ng-show="vm.tooltip!==\'\'" class="input-group-addon" uib-popover="{{vm.tooltip}}" popover-title="Info" popover-class="popover"\r\n                popover-trigger="\'mouseenter\'"><i class="fa fa-info"></i>\r\n            </span>\r\n        </div>\r\n        <!--Read Only display-->\r\n        <div ng-show="vm.readOnly">\r\n            <p ng-if="vm.inputType!==\'checkbox\'">{{vm.ngModel}}</p>\r\n            <i ng-if="vm.inputType===\'checkbox\'" ng-show=\'vm.ngModel\' class=\'fa fa-check fa-2x\'></i>\r\n        </div>\r\n        <!--HelpText-->\r\n        <p class="help-block">{{vm.helpText}}</p>\r\n    </div>\r\n</div>\r\n');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/Inputs/SelectField/selectFieldTemplate.html','<style>\r\n    .popover {\r\n        min-width: 200px;\r\n    }\r\n    \r\n    .input-group {\r\n        width: 100% !important;\r\n    }\r\n\r\n</style>\r\n<div class="form-group">\r\n    <!--field label-->\r\n    <label ng-class="vm.cssClassService.getlabelClass(vm.horizontal, vm.labelWidth)" for="vm.fieldName">{{vm.fieldLabel}}</label>\r\n    <div ng-class="vm.cssClassService.getInputClass(vm.horizontal, vm.inputWidth)">\r\n        <!--Input Types-->\r\n        <div ng-if="!vm.readOnly" class="input-group">\r\n            <ui-select ng-if="vm.inputType===\'tags\'" multiple ng-model="vm.ngModel" theme="bootstrap">\r\n                <ui-select-match placeholder="Select a Tag...">{{$item.name}}</ui-select-match>\r\n                <ui-select-choices repeat="item in (vm.items | filter: $select.search) track by item.id">\r\n                    <span ng-bind="item.name"></span>\r\n                </ui-select-choices>\r\n            </ui-select>\r\n            <select ng-if="vm.inputType===\'combobox\'" size="vm.size" multiple="vm.multiSelect" ng-model=\'vm.ngModel\' class=\'form-control\'\r\n                id=\'{{vm.fieldName}}\'>\r\n                <option ng-repeat=\'option in vm.items\' ng-value=\'{{option.id}}\'>{{option.name}}</option>\r\n            </select>\r\n            <span ng-show="vm.tooltip!==\'\'" class="input-group-addon" uib-popover="{{vm.tooltip}}" popover-title="Info" popover-class="popover"\r\n                popover-trigger="\'mouseenter\'"><i class="fa fa-info"></i>\r\n            </span>\r\n        </div>\r\n        <!--Read Only display-->\r\n        <div ng-show="vm.readOnly">\r\n            <span ng-repeat="tag in vm.items" class="badge">\r\n                {{tag.name}}\r\n            <span>\r\n        </div>\r\n \r\n        <!--HelpText-->\r\n        <p class="help-block">{{vm.helpText}}</p>\r\n    </div>\r\n</div>\r\n\r\n');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/Inputs/TextEditor/textEditorTemplate.html','<div ui-ace="vm.options" ng-model="vm.ngModel">\r\n</div>\r\n\r\n');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/Modals/ModalButtons/modalButtonsTempalte.html','<div class=\'modal-footer\'>\r\n    <span>\r\n    <!--Save Button-->\r\n    <button class=\'btn btn-primary btn-large pull-left\'\r\n            ng-if=\'vm.saveVisible\'\r\n            id=\'save\'\r\n            ng-click=\'vm.save()\'\r\n            type=\'submit\'>{{vm.saveText}}</button>\r\n    <!--Close Button-->\r\n    <button class=\'btn btn-default pull-left\'\r\n            ng-if=\'vm.closeVisible\'\r\n            id=\'close\'\r\n            ng-click=\'vm.close()\'\r\n            type=\'button\'>{{vm.closeText}}</button>\r\n  </span>\r\n</div>\r\n');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/Modals/ModalHeader/modalHeaderTempalte.html','<div class=\'modal-header\' id=\'vm.id\'>\r\n    <h3 class=\'modal-title\'>{{vm.title}}</h3>\r\n</div>\r\n');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/Panels/InfoPanel/infoPanelTemplate.html','<div class=\'well\'>\r\n    <i class=\'fa fa-{{vm.icon}}\'></i> {{vm.infoText}}\r\n    <ul class=\'on-page-nav\'></ul>\r\n</div>\r\n');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/Panels/MoreLessButton/moreLessButtonTemplate.html','<button type=\'button\' class=\'{{vm.cssClass}\' id="{{vm.id}}" ng-click=\'vm.isCollapsed = !vm.isCollapsed\'>\r\n<!--icon -->\r\n<i ng-class=\'vm.getButtonIcon()\' aria-hidden=\'true\'></i>\r\n<!--button text-->\r\n{{vm.getButtonText() }} \r\n</button>\r\n');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/Panels/MoreLessPanel/moreLessPanel.html','<div uib-collapse="vm.isCollapsed">\r\n    <div class=\'panel-body\' ng-transclude></div>\r\n</div>\r\n<button type="button" class="btn btn-default" ng-click="vm.isCollapsed = !vm.isCollapsed">{{vm.getButtonText()}}</button>\r\n');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/Panels/Panel/panelTemplate.html','<div class=\'panel panel-{{vm.theme}}\' ng-style=\'{{vm.getPanelStyle()}}\'>\r\n    <!--Header-->\r\n    <div class=\'panel-heading\' ng-style=\'{{vm.getPanelHeadingStyle()}}\' id=\'{{vm.fieldName}}\'><i class=\'fa fa-{{vm.icon}} fa-{{vm.iconSize}}x\'></i>\r\n        <!--Title-->\r\n        <span style=\'padding-left: 10px; font-weight: 700\' ng-style=\'{{vm.getTitleStyle()}}\'>{{vm.title}}</span>\r\n        <!--Add BUtton-->\r\n        <div ng-show=\'vm.showAddButton\' id=\'{{vm.addButtonId}}\' ng-click=\'vm.add()\' ng-style=\'{{vm.getButtonStyle()}}\' class=\'btn btn-default pull-right\'\r\n            style=\'padding: 3px;\'><i class=\'fa fa-plus\'></i> </div>\r\n        <!--Edit BUtton-->\r\n        <div ng-show=\'vm.showEditButton\' id=\'{{vm.editButtonId}}\' ng-click=\'vm.edit()\' ng-style=\'{{vm.getButtonStyle()}}\' class=\'btn btn-default pull-right\'\r\n            style=\'padding: 3px;\'><i class=\'fa fa-bars\'></i> </div>\r\n    </div>\r\n    <!--Content-->\r\n    <div class=\'panel-body\' ng-transclude style=\'{{vm.getPanelContentStyle()}}\'></div>\r\n    <!--Footer-->\r\n    <div class=\'panel-footer\' ng-if=\'vm.showFooter\' style=\'{{vm.getPanelStyle()}}\'>\r\n        <div class=\'row\'>\r\n            <div class=\'col-md-6\'><span class=\'pull-left\'>{{vm.footerLeftLabel}}</span></div>\r\n            <div class=\'col-md-6\'><span class=\'pull-right\'>{{vm.footerRightLabel}}</span></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/SelectLists/SelectList/selectListTemplate.html','<div class=\'form-group\'>\r\n    <!--Label-->\r\n    <label class=\'control-label\' style=\'min-width: 110px; text-align: left\'>{{vm.fieldLabel}}</label>\r\n    <!-- Select -->\r\n    <select ng-model=\'vm.ngModel\' class=\'form-control\' id=\'{{vm.fieldName}}\'>\r\n         <option ng-repeat=\'option in vm.items\' value=\'{{option.Id}}\'>{{option.Id}}</option>\r\n    </select>\r\n</div>\r\n\r\n');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/StatusAlerts/StatusAlert/statusAlertTemplate.html','<div ng-class="vm.getClass()" id="getId()">\r\n    <i class=\'vm.getIcon()\'></i>{{vm.message}}\r\n</div>\r\n\r\n');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/Inputs/DatesField/DateField/dateFieldTemplate.html','<style>\r\n    .popover {\r\n        min-width: 200px;\r\n    }\r\n    \r\n    .input-group {\r\n        width: 40% !important;\r\n    }\r\n\r\n</style>\r\n<div class="form-group">\r\n    <!--field label-->\r\n    <label ng-class="vm.cssClassService.getlabelClass(vm.horizontal, vm.labelWidth)" for="vm.fieldName">{{vm.fieldLabel}}</label>\r\n    <div ng-class="vm.cssClassService.getInputClass(vm.horizontal, vm.inputWidth)">\r\n        <!--Input-->\r\n        <div ng-if="!vm.readOnly" class="input-group">\r\n            <!--DatePicker-->\r\n            <input type="text" class="form-control" uib-datepicker-popup="{{vm.format}}" ng-model="vm.ngModel" is-open="vm.isOpened"\r\n                datepicker-options="vm.dateOptions" ng-required="true" close-text="Close" alt-input-formats="altInputFormats"\r\n            />\r\n            <!--DatePicker Open Button-->\r\n            <span class="input-group-btn">\r\n                <button type="button" class="btn btn-default" ng-click="vm.open()"><i class="fa fa-bars"></i></button>\r\n            </span>\r\n            <!--ToolTip-->\r\n            <span ng-show="vm.tooltip!==\'\'" class="input-group-addon" uib-popover="{{vm.tooltip}}" popover-title="Info" popover-class="popover"\r\n                popover-trigger="\'mouseenter\'"><i class="fa fa-info"></i>\r\n            </span>\r\n        </div>\r\n        <!--Read Only display-->\r\n        <div ng-show="vm.readOnly">\r\n            {{vm.ngModel | date}}\r\n        </div>\r\n        <!--HelpText-->\r\n        <p class="help-block">{{vm.helpText}}</p>\r\n    </div>\r\n</div>\r\n');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/Layout/AdminLayout/AdminLayoutCore/adminLayoutTemplate.html','<div id="page-wrapper" ng-cloak ng-class="vm.getState()">\r\n    <!-- Sidebar -->\r\n    <div id="sidebar-wrapper">\r\n        <admin-side-menu colapsed="vm.colapsed" footer-links="vm.footerLinks" side-menu-items="vm.sideMenuItems"></admin-side-menu>\r\n    </div>\r\n    <div id="content-wrapper">\r\n        <div class="page-content">\r\n            <!-- Header Bar -->\r\n            <admin-header-bar title="Timebanking" alert-menu-items="vm.alertMenuItems" user-menu-items="vm.userMenuItems" user-name="{{vm.userName}}">\r\n            </admin-header-bar>\r\n            <!-- Main Content -->\r\n            <div transclude></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/Layout/AdminLayout/Header/AlertsDropDown/alertsDropDownMenuTemplate.html','<div class="item dropdown" uib-dropdown>\r\n    <a href="#" class="dropdown-toggle" uib-dropdown-toggle>\r\n        <i class="fa fa-bell"></i>\r\n    </a>\r\n    <ul class="dropdown-menu dropdown-menu-right">\r\n        <li class="dropdown-header">\r\n            Alerts\r\n        </li>\r\n        <li class="divider"></li>\r\n        <li ng-repeat="item in vm.menuItems">\r\n            <div class="row">\r\n                <i class="fa fa-{{item.icon}} col-md-3" style="margin:0"></i>\r\n                <a ui-sref="{{item.state}}" class="col-md-8">                \r\n                    {{item.linkText}}  \r\n                </a>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/Layout/AdminLayout/Header/HeaderBar/headerBarTemplate.html','<div class="row header">\r\n    <div class="col-xs-12">\r\n        <div class="user pull-right">\r\n            <div class="item dropdown" uib-dropdown>\r\n                <user-options-drop-down-menu menu-items="vm.userMenuItems" user-name="{{vm.userName}}"></user-options-drop-down-menu>\r\n            </div>\r\n            <div class="item dropdown" uib-dropdown>\r\n                <alerts-drop-down-menu menu-items="vm.alertMenuItems"></alerts-drop-down-menu>\r\n            </div>\r\n        </div>\r\n        <div class="meta">\r\n            <div class="page">\r\n                {{vm.title}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/Layout/AdminLayout/Header/UserOptionsDropDown/userOptionsDropDownMenuTemplate.html','<div class="item dropdown" uib-dropdown>\r\n    <a href="#" class="dropdown-toggle" uib-dropdown-toggle>\r\n        <i class="fa fa-user"></i>\r\n    </a>\r\n    <ul class="dropdown-menu dropdown-menu-right">\r\n        <li class="dropdown-header">\r\n            {{vm.userName}}\r\n        </li>\r\n        <li class="divider"></li>\r\n        <li ng-repeat="item in vm.menuItems">\r\n            <div class="row">\r\n                <i class="fa fa-{{item.icon}} col-md-3" style="margin:0"></i>\r\n                <a ui-sref="{{item.state}}" class="col-md-8">                \r\n                    {{item.linkText}}  \r\n                </a>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/Layout/AdminLayout/SideMenu/SideMenu/sideMenuTemplate.html','<ul class="sidebar">\r\n    <li class="sidebar-main">\r\n        <a ng-click="vm.toggleSidebar()">\r\n            Dashboard\r\n            <span class="fa fa-switch"></span>\r\n          </a>\r\n    </li>\r\n    <admin-side-menu-items menu-items="vm.sideMenuItems"></admin-side-menu-items>\r\n</ul>\r\n<side-menu-footer links="vm.footerLinks"></side-menu-footer>\r\n');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/Layout/AdminLayout/SideMenu/SideMenuFooter/sideFooterTemplate.html','<div class="sidebar-footer">\r\n    <div class="col-xs-4">\r\n        <a state="vm.links[0].state" >\r\n            {{vm.links[0].linkText}}\r\n          </a>\r\n    </div>\r\n    <div class="col-xs-4">\r\n        <a state="vm.links[1].state" >\r\n            {{vm.links[1].linkText}}\r\n          </a>\r\n    </div>\r\n    <div class="col-xs-4">\r\n         <a state="vm.links[2].state" >\r\n            {{vm.links[2].linkText}}\r\n          </a>\r\n    </div>\r\n</div>');
$templateCache.put('C:/Repos/my-angular-components/src/client/app/Components/Layout/AdminLayout/SideMenu/SideMenuItems/sideMenuItemsTemplate.html','<li class="sidebar-list" ng-repeat="item in vm.menuItems">\r\n    <a ui-sref="{{item.state}}" ng-if="vm.showItem(item)">{{item.linkText}}\r\n        <span class="menu-icon fa fa-{{item.icon}}"></span>\r\n    </a>\r\n</li>');}]);