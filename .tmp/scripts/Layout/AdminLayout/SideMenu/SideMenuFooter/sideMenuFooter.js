var sideMenuFooter = {
    bindings: {
        links: '='
    },
    controllerAs: 'vm',
    template:'<div class="sidebar-footer"><div class="col-xs-4"><a state="vm.links[0].state">{{vm.links[0].linkText}}</a></div><div class="col-xs-4"><a state="vm.links[1].state">{{vm.links[1].linkText}}</a></div><div class="col-xs-4"><a state="vm.links[2].state">{{vm.links[2].linkText}}</a></div></div>'
};


angular.module('my-angular-components').component('sideMenuFooter', sideMenuFooter);
