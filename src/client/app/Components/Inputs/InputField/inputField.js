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
    templateUrl: './src/client/app/Components/Inputs/InputField/inputFieldTemplate.html'
};

myInputField.$inject = ['cssClassService'];

angular.module('my-angular-components').component('myInputField', myInputField);
