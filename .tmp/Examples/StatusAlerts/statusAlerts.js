var statusAlerts = {
    controllerAs: 'vm',
    controller: function(){
        var vm = this;

 
    },
    template:'<div class="example"><h1>Status Alerts</h1><hr><h4>Error Message</h4><p><div hljs><my-status-alert show="true" is-error="true" error-message="Something Went Wrong!!"></my-status-alert></div><my-status-alert show="true" is-error="true" error-message="Something Went Wrong!!"></my-status-alert></p><br><hr><h4>Success Message</h4><p><div hljs><my-status-alert show="true" is-success="true" success-message="Everyginng is Great!!"></my-status-alert></div><my-status-alert show="true" is-success="true" success-message="Everyginng is Great!!"></my-status-alert></p><br></div>'
};

angular.module('examples').component('statusAlertExamples', statusAlerts);

