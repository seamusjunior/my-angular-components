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
