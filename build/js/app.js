!function(){"use strict";var e=angular.module("my-angular-components",["ngAnimate","ngSanitize","ui.ace","ui.bootstrap","ui.select","ui.grid","uiGmapgoogle-maps"]);e.$inject=["ngAnimate","ngSanitize","ui.ace","ui.bootstrap","ui.select","ui.grid","uiGmapgoogle-maps"],e.config(["uiGmapGoogleMapApiProvider",function(e){e.configure({key:"AIzaSyBLwVRSezE3I1cYZki0qcCuCy18u9wOVQ4",v:"3.1.7"})}]);var t=function(){var e=function(e,t){return"true"===e?"control-label col-sm-"+t:""},t=function(e,t){return e?"col-sm-"+t:""};return{getlabelClass:e,getInputClass:t}};angular.module("my-angular-components").factory("cssClassService",t);var n={bindings:{id:"@",buttonText:"@",click:"&",cssClass:"@"},controllerAs:"vm",controller:function(){var e=this;e.$onInit=function(){e.id="create",e.buttonText="Create",e.icon="plus",e.cssClass="btn btn-success"}},template:'<div class="{{vm.cssClass}" id="{{vm.id}}" ng-click="vm.click()">{{vm.buttonText}}<i class="fa fa-{{vm.icon}}"></i></div>'};angular.module("my-angular-components").component("myCreateButton",n);var o={bindings:{buttonText:"@",saving:"=",isDisabled:"@"},controllerAs:"vm",controller:function(){var e=this;e.$onInit=function(){e.saving=!1,e.isDisabled=!1}},template:'<button id="{{vm.id}}" class="btn btn-success" ng-click="vm.click()" n ng-disabled="vm.isDisabled">{{vm.buttonText}}<i class="fa fa-circle-o-notch fa-spin" ng-if="vm.saving"></i></button>'};angular.module("my-angular-components").component("mySpinnerButton",o);var i={bindings:{selected:"=",items:"=",fieldName:"@",fieldLabel:"@",categoryField:"@"},controllerAs:"vm",controller:function(e){var t=this;t.cats=[],t.init=function(){void 0===t.fieldLabel&&(t.fieldLabel="Category"),void 0===t.categoryField&&(t.categoryField="Category")};var n=function(e){try{JSON.parse(e)}catch(e){return!1}return!0},o=function(e){return n(e)?angular.fromJson(e):e.split(",")},i=function(){var e=[];angular.forEach(t.items,function(n,i){var l=o(n[t.categoryField]);angular.forEach(l,function(t,n){e.indexOf(t.trim())===-1&&e.push(t.trim())})}),t.cats=e.sort(),t.cats.unshift("All"),t.selected="All"};e.$watch("vm.items",function(){void 0!==t.items&&i()}),t.init()},template:"categorySelectTemplate.html"};i.$inject=["$scope"],angular.module("my-angular-components").component("myCategorySelect",i);var l={bindings:{placeholder:"@",ngModel:"=",fieldName:"@"},controllerAs:"vm",controller:function(){var e=this;e.$onInit=function(){e.fieldName="filterTextBox",e.placeholder="Filter"}},template:'<div class="input-group" style="display: flex"><input type="text" ng-model="vm.ngModel" placeholder="{{vm.placeholder}}" id="{{vm.fieldName}}" class="form-control"> <button class="btn btn-default" id="searchFilter"><i class="glyphicon glyphicon-search"></i></button></div>'};angular.module("my-angular-components").component("myFilterTextbox",l);var a={bindings:{ngModel:"@"},controllerAs:"vm",controller:function(){vm.$onInit=function(){vm.ngModel="Set this text using ngModel"}},template:'<h1 id="pagetitle">{{ vm.title }}</h1>'};angular.module("my-angular-components").component("myPageTitle",a);var s={bindings:{fieldLabel:"@",fieldName:"@",labelWidth:"@",inputWidth:"@",ngModel:"=",required:"@",tooltip:"@",helpText:"@",readOnly:"@",horizontal:"@",inputType:"@",placeholder:"@"},controllerAs:"vm",controller:function(e){var t=this;t.cssClassService=e,t.$onInit=function(){t.inputType="textbox",t.required=!1,t.horizontal=!1,t.labelWidth=3,t.inputWidth=9,t.readOnly=!1,t.horizontal=!1,t.tooltip="",t.placeholder="",t.helpText="",t.fieldLabel="Date",t.locale="en-GB",t.formats=["dd-MMMM-yyyy","yyyy/MM/dd","dd.MM.yyyy","shortDate"],t.format=t.formats[0],t.isOpened=!1,t.dateOptions={formatYear:"yy",maxDate:new Date(2020,5,22),minDate:new Date,startingDay:1}},t.open=function(){t.isOpened=!0}},template:'<style>\r\n    .popover {\r\n        min-width: 200px;\r\n    }\r\n    \r\n    .input-group {\r\n        width: 100% !important;\r\n    }\r\n    \r\n    .input-group .form-control {\r\n        z-index: 100;\r\n    }\r\n\r\n</style><div class="form-group"><label ng-class="vm.cssClassService.getlabelClass(vm.horizontal, vm.labelWidth)" for="vm.fieldName">{{vm.fieldLabel}}</label><div ng-class="vm.cssClassService.getInputClass(vm.horizontal, vm.inputWidth)"><div ng-if="!vm.readOnly" class="input-group"><input ng-if="vm.inputType===\'textbox\'" ng-model="vm.ngModel" type="text" class="form-control" id="vm.fieldName" placeholder="{{vm.placeholder}}" required><input ng-if="vm.inputType===\'email\'" type="email" class="form-control" id="vm.fieldName" placeholder="{{vm.placeholder}}"><textarea ng-if="vm.inputType===\'textarea\'" class="form-control" id="vm.fieldName" ng-model="vm.ngModel" placeholder="{{vm.placeholder}}"></textarea><input ng-if="vm.inputType===\'checkbox\'" type="checkbox" id="vm.fieldName" ng-model="vm.ngModel"><span ng-if="vm.inputType===\'date\'"><input type="text" class="form-control" uib-datepicker-popup="{{vm.format}}" ng-model="vm.ngModel" is-open="vm.isOpened" style="width: 82%" datepicker-options="vm.dateOptions" ng-required="true" close-text="Close" alt-input-formats="altInputFormats"> <span class="btn btn-default" ng-click="vm.open()"><i class="fa fa-bars"></i></span></span> <span ng-show="vm.tooltip!==\'\'" class="input-group-addon" uib-popover="{{vm.tooltip}}" popover-title="Info" popover-class="popover" popover-trigger="\'mouseenter\'"><i class="fa fa-info"></i></span></div><div ng-show="vm.readOnly"><p ng-if="vm.inputType!==\'checkbox\'">{{vm.ngModel}}</p><i ng-if="vm.inputType===\'checkbox\'" ng-show="vm.ngModel" class="fa fa-check fa-2x"></i></div><p class="help-block">{{vm.helpText}}</p></div></div>'};s.$inject=["cssClassService"],angular.module("my-angular-components").component("myInputField",s);var r={bindings:{fieldLabel:"@",fieldName:"@",labelWidth:"@",SelectWidth:"@",ngModel:"=",required:"@",tooltip:"@",helpText:"@",readOnly:"@",horizontal:"@",items:"=",inputType:"@",size:"@",multiSelect:"@"},controllerAs:"vm",controller:function(e){var t=this;t.cssClassService=e,t.$onInit=function(){t.inputType="tags",t.required=!1,t.horizontal=!1,t.labelWidth=3,t.inputWidth=9,t.readOnly=!1,t.horizontal=!1,t.tooltip="",t.placeholder="",t.helpText="",t.multiSelect=!1}},template:'<style>\r\n    .popover {\r\n        min-width: 200px;\r\n    }\r\n    \r\n    .input-group {\r\n        width: 100% !important;\r\n    }\r\n\r\n</style><div class="form-group"><label ng-class="vm.cssClassService.getlabelClass(vm.horizontal, vm.labelWidth)" for="vm.fieldName">{{vm.fieldLabel}}</label><div ng-class="vm.cssClassService.getInputClass(vm.horizontal, vm.inputWidth)"><div ng-if="!vm.readOnly" class="input-group"><ui-select ng-if="vm.inputType===\'tags\'" multiple ng-model="vm.ngModel" theme="bootstrap"><ui-select-match placeholder="Select a Tag...">{{$item.name}}</ui-select-match><ui-select-choices repeat="item in (vm.items | filter: $select.search) track by item.id"><span ng-bind="item.name"></span></ui-select-choices></ui-select><select ng-if="vm.inputType===\'combobox\'" size="vm.size" multiple="vm.multiSelect" ng-model="vm.ngModel" class="form-control" id="{{vm.fieldName}}"><option ng-repeat="option in vm.items" ng-value="{{option.id}}">{{option.name}}</option></select><span ng-show="vm.tooltip!==\'\'" class="input-group-addon" uib-popover="{{vm.tooltip}}" popover-title="Info" popover-class="popover" popover-trigger="\'mouseenter\'"><i class="fa fa-info"></i></span></div><div ng-show="vm.readOnly"><span ng-repeat="tag in vm.items" class="badge">{{tag.name}} <span></span></span></div><p class="help-block">{{vm.helpText}}</p></div></div>'};r.$inject=["cssClassService"],angular.module("my-angular-components").component("mySelectField",r),angular.module("my-angular-components").directive("markdown",["$window",function(e){var t=new Showdown.converter,n=function(e,n,o){o.$observe("markdown",function(e){var o=t.makeHtml(e);n.html(o)})};return{restrict:"A",link:n}}]);var d={bindings:{ngModel:"="},controllerAs:"vm",controller:function(){var e=this;e.options={useWrapMode:!0,showGutter:!1,mode:"markdown",firstLineNumber:5}},template:'<div ui-ace="vm.options" ng-model="vm.ngModel"></div>'};angular.module("my-angular-components").component("myTextEditor",d);var m={bindings:{save:"&",close:"&",saveText:"@",saveVisible:"@",closeVisible:"@"},controllerAs:"vm",controller:function(){var e=this;e.$onInit=function(){e.saveText="Save",e.closeText="Close",e.saveVisible=!0,e.closeVisible=!0}},template:'<div class="modal-footer"><span><button class="btn btn-primary btn-large pull-left" ng-if="vm.saveVisible" id="save" ng-click="vm.save()" type="submit">{{vm.saveText}}</button><button class="btn btn-default pull-left" ng-if="vm.closeVisible" id="close" ng-click="vm.close()" type="button">{{vm.closeText}}</button></span></div>'};angular.module("my-angular-components").component("myModalButtons",m);var c={bindings:{id:"@",title:"@"},controllerAs:"vm",controller:function(){var e=this;e.$onInit=function(){e.title="Set this text using the title property",e.id="modalHeader"}},template:'<div class="modal-header" id="vm.id"><h3 class="modal-title">{{vm.title}}</h3></div>'},e=angular.module("my-angular-components").component("myModalHeader",c),u={bindings:{infoText:"@",icon:"@",color:"@"},controllerAs:"vm",controller:function(){var e=this;e.$onInit=function(){e.ngModel="Set this Text using ngModel",e.icon="fa fa-info fa-2x",e.color="#64518A"},e.getStyle=function(){return" border-left: 5px solid #64518A; border-radius: 0 15px 15px 0; !important;  padding: 1rem 1rem;   !important;  background: "+e.color+" !important; font-size: 1.65rem; !important; margin: 0;  !important;  color: "+e.color+" !important;"}},template:'<div class="well"><i class="fa fa-{{vm.icon}}"></i> {{vm.infoText}}<ul class="on-page-nav"></ul></div>'};angular.module("my-angular-components").component("myInfoPanel",u);var p={bindings:{id:"@",buttonText:"@",click:"&",cssClass:"@",isCollapsed:"="},controllerAs:"vm",controller:function(){var e=this;e.$onInit=function(){e.buttonText="More Search Options"},e.getButtonText=function(){return e.isCollapsed?"More Search Options":"Fewer Search Options"},e.getButtonIcon=function(){return e.isCollapsed?"fa fa-arrow-down":"fa fa-arrow-up"}},template:'<button type="button" class="{{vm.cssClass}" id="{{vm.id}}" ng-click="vm.isCollapsed = !vm.isCollapsed"><i ng-class="vm.getButtonIcon()" aria-hidden="true"></i>{{vm.getButtonText() }}</button>'};angular.module("my-angular-components").component("myMoreLessButton",p);var v={transclude:!0,bindings:{isCollapsed:"@",buttonText:"@",expandButtonText:"@",collapseButtonText:"@"},controllerAs:"vm",controller:function(){var e=this;e.$onInit=function(){e.buttonText="",e.isCollapsed=!0,e.collapseButtonText="Less",e.expandButtonText="More"},e.getButtonText=function(){return e.isCollapsed?e.expandButtonText:e.collapseButtonText},e.getButtonIcon=function(){return e.isCollapsed?"fa fa-arrow-down":"fa fa-arrow-up"},e.getPanelStyle=function(){return"overflow-y: "+e.getScrollBarVisibility(e.showVerticalScrollBar)},e.getPanelHeadingStyle=function(){return void 0!==e.smallHeading?"padding: 3px 5px !important; ":"padding: 10px 15px"},e.getPanelContentStyle=function(){return"overflow-y: auto;"},e.getScrollBarVisibility=function(e){return e?"scroll":"hidden"},e.getButtonStyle=function(){return void 0!==e.smallHeading?"margin-left: 5px; padding: 3px;":"margin-left: 5px; padding: 10px;"}},template:'<div uib-collapse="vm.isCollapsed"><div class="panel-body" ng-transclude></div></div><button type="button" class="btn btn-default" ng-click="vm.isCollapsed = !vm.isCollapsed">{{vm.getButtonText()}}</button>'};angular.module("my-angular-components").component("myMorelessPanel",v);var g={transclude:!0,bindings:{title:"@",fieldName:"@",theme:"@",icon:"@",iconSize:"@",smallHeading:"@",showAddButton:"@",showEditButton:"@",addButtonId:"@",editButtonId:"@",add:"&",edit:"&",showFooter:"@",footerLeftLabel:"@",footerRightLabel:"@",height:"@",showVerticalScrollBar:"@"},controllerAs:"vm",controller:function(){var e=this;e.$onInit=function(){e.height=150,e.showVerticalScrollBar=!1,e.showAddButton=!1,e.showEditButton=!1,e.editButtonId="panelEditButton",e.addButtonId="panelAddButton",e.showFooter=!1,e.footerLeftLabel="",e.footerRightLabel="",e.theme="success"},e.getPanelStyle=function(){return""},e.getPanelHeadingStyle=function(){return void 0!==e.smallHeading,""},e.getPanelContentStyle=function(){return""},e.getScrollBarVisibility=function(e){return e?"scroll":"hidden"},e.getButtonStyle=function(){return void 0!==e.smallHeading,""}},template:'<div class="panel panel-{{vm.theme}}" ng-style="{{vm.getPanelStyle()}}"><div class="panel-heading" ng-style="{{vm.getPanelHeadingStyle()}}" id="{{vm.fieldName}}"><i class="fa fa-{{vm.icon}} fa-{{vm.iconSize}}x"></i><span style="padding-left: 10px; font-weight: 700" ng-style="{{vm.getTitleStyle()}}">{{vm.title}}</span><div ng-show="vm.showAddButton" id="{{vm.addButtonId}}" ng-click="vm.add()" ng-style="{{vm.getButtonStyle()}}" class="btn btn-default pull-right" style="padding: 3px;"><i class="fa fa-plus"></i></div><div ng-show="vm.showEditButton" id="{{vm.editButtonId}}" ng-click="vm.edit()" ng-style="{{vm.getButtonStyle()}}" class="btn btn-default pull-right" style="padding: 3px;"><i class="fa fa-bars"></i></div></div><div class="panel-body" ng-transclude style="{{vm.getPanelContentStyle()}}"></div><div class="panel-footer" ng-if="vm.showFooter" style="{{vm.getPanelStyle()}}"><div class="row"><div class="col-md-6"><span class="pull-left">{{vm.footerLeftLabel}}</span></div><div class="col-md-6"><span class="pull-right">{{vm.footerRightLabel}}</span></div></div></div></div>'};angular.module("my-angular-components").component("myPanel",g);var f={bindings:{ngModel:"=",items:"=",fieldLabel:"@",fieldName:"@"},controllerAs:"vm",controller:function(){var e=this;e.$onInit=function(){e.items=[],e.fieldLabel="You can set this text using field-label",e.fieldName="mySelectField",e.ngModel="null"}},template:'<div class="form-group"><label class="control-label" style="min-width: 110px; text-align: left">{{vm.fieldLabel}}</label><select ng-model="vm.ngModel" class="form-control" id="{{vm.fieldName}}"><option ng-repeat="option in vm.items" value="{{option.Id}}">{{option.Id}}</option></select></div>'};angular.module("my-angular-components").component("mySelectList",f);var b={bindings:{message:"@",isError:"@"},controllerAs:"vm",controller:function(){var e=this;e.$onInit=function(){e.message="",e.isError=!1},e.getClass=function(){return"true"===e.isError?"errorMessage":"successMessage"},e.getIcon=function(){return"true"===e.isError?"fa fa-warning fa-2x":"fa fa-check fa-2x"},e.getId=function(){return"true"===e.isError?"errorMessage":"successMessage"}},template:'<div ng-class="vm.getClass()" id="getId()"><i class="vm.getIcon()"></i>{{vm.message}}</div>'};angular.module("my-angular-components").component("myStatusAlert",b);var h={bindings:{ngModel:"=",fieldName:"@",fieldLabel:"@",tooltip:"@",dateOptions:"@",helpText:"@",readOnly:"@",horizontal:"@"},controllerAs:"vm",controller:function(e){var t=this;t.cssClassService=e,t.$onInit=function(){t.fieldLabel="Date",t.locale="en-GB",t.formats=["dd-MMMM-yyyy","yyyy/MM/dd","dd.MM.yyyy","shortDate"],t.format=t.formats[0],t.isOpened=!1,t.readOnly=!1,t.tooltip="",t.horizontal=!1,t.dateOptions={formatYear:"yy",maxDate:new Date(2020,5,22),minDate:new Date,startingDay:1}},t.open=function(){t.isOpened=!0}},template:'<style>\r\n    .popover {\r\n        min-width: 200px;\r\n    }\r\n    \r\n    .input-group {\r\n        width: 40% !important;\r\n    }\r\n\r\n</style><div class="form-group"><label ng-class="vm.cssClassService.getlabelClass(vm.horizontal, vm.labelWidth)" for="vm.fieldName">{{vm.fieldLabel}}</label><div ng-class="vm.cssClassService.getInputClass(vm.horizontal, vm.inputWidth)"><div ng-if="!vm.readOnly" class="input-group"><input type="text" class="form-control" uib-datepicker-popup="{{vm.format}}" ng-model="vm.ngModel" is-open="vm.isOpened" datepicker-options="vm.dateOptions" ng-required="true" close-text="Close" alt-input-formats="altInputFormats"><span class="input-group-btn"><button type="button" class="btn btn-default" ng-click="vm.open()"><i class="fa fa-bars"></i></button></span><span ng-show="vm.tooltip!==\'\'" class="input-group-addon" uib-popover="{{vm.tooltip}}" popover-title="Info" popover-class="popover" popover-trigger="\'mouseenter\'"><i class="fa fa-info"></i></span></div><div ng-show="vm.readOnly">{{vm.ngModel | date}}</div><p class="help-block">{{vm.helpText}}</p></div></div>'},e=angular.module("my-angular-components").component("myDateField",h),y={transclude:!0,bindings:{title:"@",theme:"@",sideMenuItems:"=",userMenuItems:"=",alertMenuItems:"=",footerLinks:"=",userName:"@"},controllerAs:"vm",controller:function(e){var t=this;t.colapsed=!1,t.userName="",e.toggle=!0;e.toggleSidebar=function(){e.toggle=!e.toggle},window.onresize=function(){e.$apply()},t.getState=function(){return t.colapsed?"open":""}},template:'<div id="page-wrapper" ng-cloak ng-class="vm.getState()"><div id="sidebar-wrapper"><admin-side-menu colapsed="vm.colapsed" footer-links="vm.footerLinks" side-menu-items="vm.sideMenuItems"></admin-side-menu></div><div id="content-wrapper"><div class="page-content"><admin-header-bar title="Timebanking" alert-menu-items="vm.alertMenuItems" user-menu-items="vm.userMenuItems" user-name="{{vm.userName}}"></admin-header-bar><div ui-view></div></div></div></div>'};angular.module("my-angular-components").component("adminLayout",y);var x={bindings:{menuItems:"="},controllerAs:"vm",template:'<div class="item dropdown" uib-dropdown><a href="#" class="dropdown-toggle" uib-dropdown-toggle><i class="fa fa-bell"></i></a><ul class="dropdown-menu dropdown-menu-right"><li class="dropdown-header">Alerts</li><li class="divider"></li><li ng-repeat="item in vm.menuItems"><div class="row"><i class="fa fa-{{item.icon}} col-md-3" style="margin:0"></i> <a ui-sref="{{item.state}}" class="col-md-8">{{item.linkText}}</a></div></li></ul></div>'};angular.module("my-angular-components").component("alertsDropDownMenu",x);var w={transclude:!0,bindings:{title:"@",theme:"@",userMenuItems:"=",alertMenuItems:"=",userName:"@"},controllerAs:"vm",template:'<div class="row header"><div class="col-xs-12"><div class="user pull-right"><div class="item dropdown" uib-dropdown><user-options-drop-down-menu menu-items="vm.userMenuItems" user-name="{{vm.userName}}"></user-options-drop-down-menu></div><div class="item dropdown" uib-dropdown><alerts-drop-down-menu menu-items="vm.alertMenuItems"></alerts-drop-down-menu></div></div><div class="meta"><div class="page">{{vm.title}}</div></div></div></div>'};angular.module("my-angular-components").component("adminHeaderBar",w);var M={bindings:{menuItems:"=",userName:"@"},controllerAs:"vm",controller:function(){},template:'<div class="item dropdown" uib-dropdown><a href="#" class="dropdown-toggle" uib-dropdown-toggle><i class="fa fa-user"></i></a><ul class="dropdown-menu dropdown-menu-right"><li class="dropdown-header">{{vm.userName}}</li><li class="divider"></li><li ng-repeat="item in vm.menuItems"><div class="row"><i class="fa fa-{{item.icon}} col-md-3" style="margin:0"></i> <a ui-sref="{{item.state}}" class="col-md-8">{{item.linkText}}</a></div></li></ul></div>'};angular.module("my-angular-components").component("userOptionsDropDownMenu",M);var S={transclude:!0,bindings:{colapsed:"=",sideMenuItems:"=",footerLinks:"="},controllerAs:"vm",controller:function(){var e=this;e.$onInit=function(){e.colapsed=!0},e.toggleSidebar=function(){e.colapsed=!e.colapsed}},template:'<ul class="sidebar"><li class="sidebar-main"><a ng-click="vm.toggleSidebar()">Dashboard <span class="fa fa-switch"></span></a></li><admin-side-menu-items menu-items="vm.sideMenuItems"></admin-side-menu-items></ul><side-menu-footer links="vm.footerLinks"></side-menu-footer>'};angular.module("my-angular-components").component("adminSideMenu",S);var I={bindings:{links:"="},controllerAs:"vm",template:'<div class="sidebar-footer"><div class="col-xs-4"><a state="vm.links[0].state">{{vm.links[0].linkText}}</a></div><div class="col-xs-4"><a state="vm.links[1].state">{{vm.links[1].linkText}}</a></div><div class="col-xs-4"><a state="vm.links[2].state">{{vm.links[2].linkText}}</a></div></div>'};angular.module("my-angular-components").component("sideMenuFooter",I);var T={bindings:{menuItems:"="},controllerAs:"vm",controller:function(e){var t=this;t.isAuthenticated=e.isAuthenticated},template:'<li class="sidebar-list" ng-repeat="item in vm.menuItems"><a ui-sref="{{item.state}}" ng-if="vm.isAuthenticated">{{item.linkText}} <span class="menu-icon fa fa-{{item.icon}}"></span></a></li>'};angular.module("my-angular-components").component("adminSideMenuItems",T)}();