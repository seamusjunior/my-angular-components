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
var myButton1 = {
    bindings: {
        id: '@',
        text: '@',
        click: '&',
        theme: '@',
        preset: '@',
        size: '@'
    },
    controllerAs: 'vm',
    controller: function ($scope) {
        var vm = this;

        vm.$onInit = function () {
            //default options
            vm.id = '';
            vm.text = '';
            vm.icon = '';
            vm.size = '';
            vm.theme = 'btn btn-success';
        };

        vm.getClass = function () {
            var cssClass = 'btn ';

            if (vm.preset !== '' & vm.text === '') {
                switch (vm.preset) {
                    case 'Create':
                        cssClass += ' btn-success ';
                        break;
                    case 'Delete':
                        cssClass += ' btn-danger '
                        break;
                    case 'Edit':
                        cssClass += ' btn-primary '
                        break;
                    default:
                        cssClass += ' btn-success '
                        break;
                }
            }
            else{
                 cssClass += ' btn-success '
            }


            return cssClass;
        }


        vm.getSizeClass = function () {
            var cssClass = 'btn ';

            if (vm.size !== '') {
                switch (vm.size) {
                    case 'Small':
                        cssClass += ' btn-sm ';
                    case 'Large':
                        cssClass += ' btn-lg ';

                }
            }

            return cssClass;
        }

        vm.getText = function () {

            if (vm.preset !== '' & vm.text === '') {
                switch (vm.preset) {
                    case 'Create':
                        return ' Create ';
                    case 'Delete':
                        return ' Delete '
                    case 'Edit':
                        return ' Edit '
                    default:
                        ''
                }
            } else {
                return vm.text;
            }
        };

        vm.getIcon = function () {

            if (vm.preset !== '' & vm.icon === '') {
                switch (vm.preset) {
                    case 'Create':
                        return ' fa fa-plus ';
                    case 'Delete':
                        return ' fa fa-times '
                    case 'Edit':
                        return ' fa fa-bars '
                    default:
                        ''
                }
            } else {
                return 'fa fa-' + vm.icon + ' ';
            }
        };

        vm.getId = function () {
            if (vm.isError === 'true')
                return "errorMessage";
            else
                return "successMessage";
        };




    },
    template:'<div class="{{vm.getClass()}} {{vm.getSizeClass()}}" id="{{vm.id}}" ng-click="vm.click()">{{vm.getText()}}<i style="margin-left:15px" class="{{vm.getIcon()}}"></i></div>'
};

angular.module('my-angular-components').component('myButton', myButton1);

var mySpinnerButton = {
    bindings: {
        buttonText:'@',
        saving: '=',
        isDisabled:'='
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
    template:'<button id="{{vm.id}}" class="btn btn-success" ng-click="vm.click()" ng-disabled="vm.isDisabled">{{vm.buttonText}}<i class="fa fa-circle-o-notch fa-spin" ng-if="vm.saving"></i></button>'
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
    template:'<div class="form-group"><label class="control-label" style="min-width: 110px; text-align: left">{{vm.fieldLabel}}</label><select ng-model="vm.selected" class="form-control"><option ng-repeat="category in vm.cats" value="{{category}}">{{category}}</option></select></div>'

    
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
    template:'<div class="input-group" style="display: flex"><input type="text" ng-model="vm.ngModel" placeholder="{{vm.placeholder}}" id="{{vm.fieldName}}" class="form-control"> <button class="btn btn-default" id="searchFilter"><i class="glyphicon glyphicon-search"></i></button></div>'
};


angular.module('my-angular-components').component('myFilterTextbox', myFilterTextbox);

var myPageTitle = {
    transclude: "true",
    bindings: {
        icon: "@"
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;
        
        
    },
    template:'<h1 id="pageTitle"><i class="fa fa-{{vm.icon}}"><div ng-transclude></div></i></h1>'
};

angular.module('my-angular-components').component('myPageTitle', myPageTitle);

/**
 * Date field component with Field Label, Date Popup, Help Popup
 */
var myDateTimeDifferenceField = {
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
    controller: function () {
        'use strict';
        var vm = this;
        vm.hourStep = 1;
        vm.minStep = 15;
        vm.fromDate = new Date();
        vm.toDate = new Date();
        vm.showMeridian = true;

        vm.$onInit = function () {

        };


        vm.fromTimeChanged = function(){
            
        }

        vm.toTimeChanged = function(){

        }

    },
    template:'<my-input-field input-type="time" field-label="From" ng-model="vm.fromDate" ng-change="vm.fromTimeChanged()" hour-step="vm.hourStep" minute-step="vm.minStep" show-meridian="vm.showMeridian"></my-input-field><my-input-field input-type="time" field-label="To" ng-model="vm.toDate" ng-change="vm.toTimeChanged()" hour-step="vm.hourStep" " minute-step="vm.minStep" show-meridian="vm.showMeridian"></my-input-field>'
};


angular.module('my-angular-components').component('myDateTimeDifferenceField', myDateTimeDifferenceField);

var myInputField = {
    bindings: {

        // timePicker
        hourStep: '@',
        minStep: '@',
        showMeridian: '@',

        // common
        ngModel: '=',
        inputType: '@',
        readOnly: '@',
        horizontal: '@',
        placeholder: '@',
        required: '@',
        tooltip: '@',
        helpText: '@',
        fieldLabel: '@',
        fieldName: '@',
        labelWidth: '@',
        inputWidth: "@",
    },
    controllerAs: 'vm',
    controller: function (cssClassService) {
        var vm = this;

        vm.cssClassService = cssClassService;


        vm.$onInit = function () {

            //defaults
            if (!angular.isDefined(vm.fieldName)) {
                vm.fieldName = vm.fieldLabel.replace(" ", "").toLowerCase();
            }

            vm.inputType = 'textbox';

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

            // Time options
            vm.hourStep = 1;
            vm.minStep = 15;           
            vm.showMeridian = true;
        };

        // open the date popup
        vm.open = function () {
            vm.isOpened = true;
        };


    },
    template:'<style>\r\n    .popover {\r\n        min-width: 200px;\r\n    }\r\n    \r\n    .input-group {\r\n        width: 100% !important;\r\n    }\r\n    \r\n    .input-group .form-control {\r\n        z-index: 100;\r\n    }\r\n</style><div class="form-group"><label ng-class="vm.cssClassService.getlabelClass(vm.horizontal, vm.labelWidth)" for="vm.fieldName">{{vm.fieldLabel}}</label><div ng-class="vm.cssClassService.getInputClass(vm.horizontal, vm.inputWidth)"><div ng-if="!vm.readOnly" class="input-group"><input ng-if="vm.inputType===\'textbox\'" ng-model="vm.ngModel" type="text" class="form-control" id="{{vm.fieldName}}" placeholder="{{vm.placeholder}}" required><input ng-if="vm.inputType===\'number\'" ng-model="vm.ngModel" type="number" class="form-control" id="{{vm.fieldName}}" required><input ng-if="vm.inputType===\'email\'" type="email" class="form-control" id="vm.fieldName" placeholder="{{vm.placeholder}}"><textarea ng-if="vm.inputType===\'textarea\'" class="form-control" id="vm.fieldName" ng-model="vm.ngModel" placeholder="{{vm.placeholder}}"></textarea><input ng-if="vm.inputType===\'checkbox\'" type="checkbox" id="vm.fieldName" ng-model="vm.ngModel"><div ng-if="vm.inputType===\'time\'" uib-timepicker ng-model="vm.ngModel" id="vm.fieldName" ng-change="vm.changed()" hour-step="vm.hourStep" minute-step="vm.minStep" show-meridian="vm.showMeridian"><span ng-if="vm.inputType===\'datepopup\'"><input type="text" class="form-control" uib-datepicker-popup="{{vm.format}}" ng-model="vm.ngModel" is-open="vm.isOpened" style="width: 82%" datepicker-options="vm.dateOptions" ng-required="true" close-text="Close" alt-input-formats="altInputFormats"> <span class="btn btn-default" ng-click="vm.open()"><i class="fa fa-bars"></i></span></span><span ng-show="vm.tooltip!==\'\'" class="input-group-addon" uib-popover="{{vm.tooltip}}" popover-title="Info" popover-class="popover" popover-trigger="\'mouseenter\'"><i class="fa fa-info"></i></span></div><div ng-show="vm.readOnly"><p ng-if="vm.inputType!==\'checkbox\'">{{vm.ngModel}}</p><i ng-if="vm.inputType===\'checkbox\'" ng-show="vm.ngModel" class="fa fa-check fa-2x"></i></div><p class="help-block">{{vm.helpText}}</p></div></div></div>'
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
    template:'<style>\r\n    .popover {\r\n        min-width: 200px;\r\n    }\r\n    \r\n    .input-group {\r\n        width: 100% !important;\r\n    }\r\n\r\n</style><div class="form-group"><label ng-class="vm.cssClassService.getlabelClass(vm.horizontal, vm.labelWidth)" for="vm.fieldName">{{vm.fieldLabel}}</label><div ng-class="vm.cssClassService.getInputClass(vm.horizontal, vm.inputWidth)"><div ng-if="!vm.readOnly" class="input-group"><ui-select ng-if="vm.inputType===\'tags\'" multiple ng-model="vm.ngModel" theme="bootstrap"><ui-select-match placeholder="Select a Tag...">{{$item.name}}</ui-select-match><ui-select-choices repeat="item in (vm.items | filter: $select.search) track by item.id"><span ng-bind="item.name"></span></ui-select-choices></ui-select><select ng-if="vm.inputType===\'combobox\'" size="vm.size" multiple="vm.multiSelect" ng-model="vm.ngModel" class="form-control" id="{{vm.fieldName}}"><option ng-repeat="option in vm.items" ng-value="{{option.id}}">{{option.name}}</option></select><span ng-show="vm.tooltip!==\'\'" class="input-group-addon" uib-popover="{{vm.tooltip}}" popover-title="Info" popover-class="popover" popover-trigger="\'mouseenter\'"><i class="fa fa-info"></i></span></div><div ng-show="vm.readOnly"><span ng-repeat="tag in vm.items" class="badge">{{tag.name}} <span></span></span></div><p class="help-block">{{vm.helpText}}</p></div></div>'
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

var myRichTextEditor = {
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
    template:'<div ui-ace="vm.options" ng-model="vm.ngModel"></div>'
};


angular.module('my-angular-components').component('myRichTextEditor', myRichTextEditor);

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

            if(!angular.isDefined(vm.closeText) && vm.closeText != ''){
                vm.closeText = 'Close';
            }
            

            vm.saveVisible = true;
            vm.closeVisible = true;
        };

    },
    template:'<div class="modal-footer"><span><button class="btn btn-primary btn-large pull-left" ng-if="vm.saveVisible" id="save" ng-click="vm.save()" type="submit">{{vm.saveText}}</button><button class="btn btn-default pull-left" ng-if="vm.closeVisible" id="close" ng-click="vm.close()" type="button">{{vm.closeText}}</button></span></div>'
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
    template:'<div class="modal-header" id="vm.id"><h3 class="modal-title">{{vm.title}}</h3></div>'
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
    template:'<div class="well"><i class="fa fa-{{vm.icon}}"></i> {{vm.infoText}}<ul class="on-page-nav"></ul></div>'
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
    template:'<button type="button" class="{{vm.cssClass}" id="{{vm.id}}" ng-click="vm.isCollapsed = !vm.isCollapsed"><i ng-class="vm.getButtonIcon()" aria-hidden="true"></i>{{vm.getButtonText() }}</button>'
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
    template:'<div uib-collapse="vm.isCollapsed"><div class="panel-body" ng-transclude></div></div><button type="button" class="btn btn-default" ng-click="vm.isCollapsed = !vm.isCollapsed">{{vm.getButtonText()}}</button>'
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
    template:'<div class="panel panel-{{vm.theme}}" ng-style="{{vm.getPanelStyle()}}"><div class="panel-heading" ng-style="{{vm.getPanelHeadingStyle()}}" id="{{vm.fieldName}}"><i class="fa fa-glyphicon glyphicon-plus"></i><span style="padding-left: 10px; font-weight: 700" ng-style="{{vm.getTitleStyle()}}">{{vm.title}}</span><div ng-show="vm.showAddButton" id="{{vm.addButtonId}}" ng-click="vm.add()" ng-style="{{vm.getButtonStyle()}}" class="btn btn-default pull-right" style="padding: 3px;"><i class="glyphicon glyphicon-plus"></i></div><div ng-show="vm.showEditButton" id="{{vm.editButtonId}}" ng-click="vm.edit()" ng-style="{{vm.getButtonStyle()}}" class="btn btn-default pull-right" style="padding: 3px;"><i class="glyphicon glyphicon-plus"></i></div></div><div class="panel-body" ng-transclude ng-style="{{vm.getPanelContentStyle()}}"></div><div class="panel-footer" ng-if="vm.showFooter" ng-style="{{vm.getPanelStyle()}}"><div class="row"><div class="col-md-6"><span class="pull-left">{{vm.footerLeftLabel}}</span></div><div class="col-md-6"><span class="pull-right">{{vm.footerRightLabel}}</span></div></div></div></div>'
};


angular.module('my-angular-components').component('myPanel', myPanel);
var myStatusAlert = {
    bindings: {
           successMessage: "@",
        errorMessage: "@",
        message: "@",
        isError: "@"
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;


        vm.$onInit = function () {
            vm.errorMessage = "";
            vm.successMessage = "";
            vm.isError = false;
        };


        vm.getMessage = function () {
            if (vm.isError === 'true')
                return vm.errorMessage;
            else
                return vm.successMessage;
        };

        vm.getClass = function () {
            if (vm.isError === 'true')
                return " errorMessage";
            else
                return " successMessage";
        };

        vm.getIcon = function () {
            if (vm.isError === 'true')
                return " fa fa-warning fa-2x";
            else
                return " fa fa-check fa-2x";
        };

        vm.getId = function () {
            if (vm.isError === 'true')
                return "errorMessage";
            else
                return "successMessage";
        };
       


    },
    template:'<div class="{{vm.getClass()}}"><i class="{{vm.getIcon()}}"></i> {{vm.getMessage()}}</div>'
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
    template:'<style>\r\n    .popover {\r\n        min-width: 200px;\r\n    }\r\n    \r\n    .input-group {\r\n        width: 40% !important;\r\n    }\r\n\r\n</style><div class="form-group"><label ng-class="vm.cssClassService.getlabelClass(vm.horizontal, vm.labelWidth)" for="vm.fieldName">{{vm.fieldLabel}}</label><div ng-class="vm.cssClassService.getInputClass(vm.horizontal, vm.inputWidth)"><div ng-if="!vm.readOnly" class="input-group"><input type="text" class="form-control" uib-datepicker-popup="{{vm.format}}" ng-model="vm.ngModel" is-open="vm.isOpened" datepicker-options="vm.dateOptions" ng-required="true" close-text="Close" alt-input-formats="altInputFormats"><span class="input-group-btn"><button type="button" class="btn btn-default" ng-click="vm.open()"><i class="fa fa-bars"></i></button></span><span ng-show="vm.tooltip!==\'\'" class="input-group-addon" uib-popover="{{vm.tooltip}}" popover-title="Info" popover-class="popover" popover-trigger="\'mouseenter\'"><i class="fa fa-info"></i></span></div><div ng-show="vm.readOnly">{{vm.ngModel | date}}</div><p class="help-block">{{vm.helpText}}</p></div></div>'
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
    
        var currentWidth = 65;
        var mobileView = 992;

        vm.getWidth = function () {
            return window.innerWidth;
        };
      

        //Css Class Helpers
        vm.getState = function () {
            if (vm.colapsed)
                return "open";
            else
                return "";
        };
        vm.getViewCssClass= function(){
            if (vm.colapsed == true)
                return "uiViewColapsed";
            else
                return "uiView";
        };
    },
    template:'<style>\r\n.uiViewColapsed{\r\n    margin-left:100px;\r\n}\r\n.uiView{\r\n    margin-left:20px;\r\n}\r\n</style><div id="page-wrapper" ng-cloak ng-class="vm.getState()"><div id="sidebar-wrapper"><admin-side-menu colapsed="vm.colapsed" footer-links="vm.footerLinks" side-menu-items="vm.sideMenuItems"></admin-side-menu></div><div id="content-wrapper"><div class="page-content"><div ng-class="vm.getViewCssClass()"><ng-transclude></ng-transclude></div></div></div></div>'
};

adminLayout.$inject = ['$scope'];

angular.module('my-angular-components').component('adminLayout', adminLayout);

var alertsDropDownMenu = {
    bindings: {
        menuItems:'=',
    },
    controllerAs: 'vm',
    template:'<div class="item dropdown" uib-dropdown><a href="#" class="dropdown-toggle" uib-dropdown-toggle><i class="fa fa-bell"></i></a><ul class="dropdown-menu dropdown-menu-right"><li class="dropdown-header">Alerts</li><li class="divider"></li><li ng-repeat="item in vm.menuItems"><div class="row"><i class="fa fa-{{item.icon}} col-md-3" style="margin:0"></i> <a ui-sref="{{item.state}}" class="col-md-8">{{item.linkText}}</a></div></li></ul></div>'
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
    template:'<style>\r\n.uiViewColapsed{\r\n    margin-left:10px;\r\n}\r\n.uiView{\r\n    margin-left:120px;\r\n}\r\n</style><div class="row header"><div class="col-xs-12"></div>--><div class="meta"><div class="page">{{vm.title}}</div></div></div>'
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
    template:'<div class="item dropdown" uib-dropdown><a href="#" class="dropdown-toggle" uib-dropdown-toggle><i class="fa fa-user"></i></a><ul class="dropdown-menu dropdown-menu-right"><li class="dropdown-header">{{vm.userName}}</li><li class="divider"></li><li ng-repeat="item in vm.menuItems"><div class="row"><i class="fa fa-{{item.icon}} col-md-3" style="margin:0"></i> <a ui-sref="{{item.state}}" class="col-md-8">{{item.linkText}}</a></div></li></ul></div>'
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
            //todo: Add to local storage
            // $cookieStore.put('toggle', $scope.toggle);
        };

    },
    template:'<ul class="sidebar"><li class="sidebar-main"><a ng-click="vm.toggleSidebar()">Dashboard <span class="fa fa-switch"></span></a></li><admin-side-menu-items menu-items="vm.sideMenuItems"></admin-side-menu-items></ul><side-menu-footer links="vm.footerLinks"></side-menu-footer>'
};


angular.module('my-angular-components').component('adminSideMenu', adminSideMenu);

var sideMenuFooter = {
    bindings: {
        links: '='
    },
    controllerAs: 'vm',
    template:'<div class="sidebar-footer"><div class="col-xs-4"><a state="vm.links[0].state">{{vm.links[0].linkText}}</a></div><div class="col-xs-4"><a state="vm.links[1].state">{{vm.links[1].linkText}}</a></div><div class="col-xs-4"><a state="vm.links[2].state">{{vm.links[2].linkText}}</a></div></div>'
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
    template:'<li class="sidebar-list" ng-repeat="item in vm.menuItems"><a ui-sref="{{item.state}}" ng-if="vm.showItem(item)">{{item.linkText}} <span class="menu-icon fa fa-{{item.icon}}"></span></a></li>'
};

adminSideMenuItems.$inject = ['$rootScope'];

angular.module('my-angular-components').component('adminSideMenuItems', adminSideMenuItems);
