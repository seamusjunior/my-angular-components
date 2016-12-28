angular.module('my-angular-components').run(['$templateCache', function($templateCache) {$templateCache.put('app/Components/Reports/reportViewerTemplate.html','<div ej-reportviewer id=container e-reportserviceurl={{vm.reportUrl}} e-processingmode={{vm.processingMode}} e-reportpath={{vm.report}} style=height:680px></div>');
$templateCache.put('app/Examples/Common/commonTemplate.html','<h1>Common Properties</h1><table class="table table-striped"><thead><tr><td>Property</td><td>Required</td><td>Description</td></tr></thead><tr><td>field-label</td><td>No</td><td>Set the label value <small>Default: Date</small></td></tr><tr><td>field-name</td><td>No</td><td>Set the Name and ID values of the input.<br><small>Default: Uses the field-label to create a value</small></td></tr><tr><td>help-text</td><td>No</td><td>Set the information text to appear under the control<br><small>Default: empty</small></td></tr></table>');
$templateCache.put('app/Examples/Dates/datesTemplate.html','<form class=for-horizontal><div class="col-md-8 center-block"><h1>Dates</h1><div class=well><h4>Date Field</h4><my-date-field ng-model=vm.sampleDate horizontal=true tooltip="Please Enter a Date" label-width=4 inout-width=8 field-label="Start Date"></my-date-field><br></div><div class=well><h4>Date Field</h4><my-date-field ng-model=vm.sampleDate horizontal=true tooltip=ddfgdfgdf field-label="Start Date" help-text="Enter a Date"></my-date-field><br></div><div class=well><h4>Date Field Read-only</h4><my-date-field ng-model=vm.sampleDate read-only=true horizontal=true field-label="Start Date"></my-date-field><br></div></div></form>');
$templateCache.put('app/Examples/ExampleForm/exampleForm.html','<div class="col-md-6 center-block"><h1>Example Form</h1><form role=form name=vm.customerForm ng-submit=submit() ng-fab-form-options=customFormOptions><my-status-alert message={{vm.status.message}} ng-show=vm.status.show is-error={{vm.status.isError}}></my-status-alert><my-input-field field-label="First Name" ng-model=vm.firstName placeholder="Enter Your First name" tooltip="We need your First Name" required=vm.required></my-input-field><my-input-field field-label="Last Name" ng-model=vm.lastName placeholder="Enter Your Last name" , tooltip="We need your Last Name"></my-input-field><my-input-field field-label="About Me" input-type=textarea ng-model=vm.aboutMe placeholder="Enter a description about yourself"></my-input-field><my-input-field field-label="Simulate Error" input-type=checkbox ng-model=vm.simulateError placeholder="Enter a description about yourself"></my-input-field><my-input-field field-label="Start Date" input-type=date ng-model=vm.sampleDate placeholder="Enter a description about yourself"></my-input-field><my-spinner-button button-text="Submit Form" saving=vm.saving is-disabled=!vm.customerForm.$valid ng-click=vm.submit()></my-spinner-button></form></div>');
$templateCache.put('app/Examples/Inputs/inputsTemplate.html','<div class="col-md-8 center-block"><h1>Textbox</h1><div class=well><h4>Text Box With Placeholder</h4><my-input-field field-label="First Name" placeholder="Enter Your First name" ng-model=vm.firstName></my-input-field></div><div class=well><h4>Textbox With ToolTip</h4><my-input-field field-label="First Name" ng-model=vm.firstName tooltip="Please Enter your fristname"></my-input-field></div><div class=well><h4>Textbox Horizontal</h4><my-input-field field-label="First Name" horizontal=true ng-model=vm.firstName tooltip="Please Enter your fristname"></my-input-field><br></div><div class=well><h4>Textbox Read-only</h4><my-input-field field-label="First Name" read-only=true horizontal=true ng-model=vm.firstName tooltip="Please Enter your fristname"></my-input-field><br></div><h1>Textarea</h1><div class=well><h4>TextArea</h4><my-input-field field-label=Description input-type=textarea ng-model=vm.description tooltip="Please Enter a description"></my-input-field><br></div><div class=well><h4>TextArea Read-only</h4><my-input-field field-label=Description input-type=textarea read-only=true ng-model=vm.description tooltip="Please Enter a description"></my-input-field><br></div><h1>Checkboxes</h1><div class=well><h4>Checkbox</h4><my-input-field field-label="I Agree" input-type=checkbox ng-model=vm.agree></my-input-field><br></div><div class=well><h4>Checkbox Read-only</h4><my-input-field field-label="I Agree" input-type=checkbox read-only=true ng-model=vm.agree tooltip="Please Enter a description"></my-input-field><br></div></div>');
$templateCache.put('app/Examples/Modals/modalsTemplate.html','<div class=example><h5>Modals</h5><hr><div ng-click=vm.open() class="btn btn-success">Click To Open</div></div>');
$templateCache.put('app/Examples/Modals/sampleModalTemplate.html','<my-modal-header title="Edit My Contact1"></my-modal-header><div class=modal-body><my-text-field field-label=FirstName ng-model=vm.contact.FirstName></my-text-field><my-text-field field-label=LastName ng-model=vm.contact.LastName></my-text-field></div><my-modal-buttons save="alert(\'Saved\')" close=vm.close()></my-modal-buttons>');
$templateCache.put('app/Examples/Panels/panelsTemplate.html','<div class=example><h1>Panels</h1><hr><h2>Moreless Panel</h2><div class=row><div class=col-md-6><my-moreless-panel expand-button-text="Show me more!" collapse-button-text="Ive seen Enough">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris lectus, consectetur gravida mattis eget, maximus a lectus. Donec luctus sagittis arcu vel ultricies. Cras id porttitor erat, non sodales nunc. Etiam gravida lobortis pulvinar. Sed nibh turpis, elementum id sodales ac, ullamcorper vitae ipsum. Nam efficitur lacus vitae cursus tincidunt. Ve</my-moreless-panel></div><div class=col-md-6><div class=usage><code>\r\n                    <b>\r\n                        <span class=tag>&lt;my-moreless-panell&gt;</span><br>\r\n                        <spam class=value>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris lectus .. <br>\r\n                        <span class=tag>&lt;/my-moreless-panel&gt;</span>\r\n                    </spam></b>\r\n                </code></div><my-panel title=Options theme=success><table class="table table-striped"><thead><tr><td>Property</td><td>Required</td><td>Description</td></tr></thead><tr><td>expand-button-text</td><td>Yes</td><td>Sets the Expand button text</td><small>Default: More</small></tr><tr><td>field-name</td><td>No</td><td>Sets the Collapse button text</td><small>Default: Less</small></tr><tr><td>is-collapsed</td><td>No</td><td>Allows you set the default state<br><small>Default: true</small></td></tr></table></my-panel></div><p></p><h3>Info Panel</h3><my-panel title="My Great Info Panel" icon=info show-add-button=true show-edit-button=true show-footer=true footer-left-label="Left Footer Text" footer-right-label="Right Footer Text" add=vm.add() edit=vm.edit() icon-size=2>"orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</my-panel><p></p><h3>Info Panel</h3><my-info-panel info-text="Some infromation"></my-info-panel></div></div>');
$templateCache.put('app/Examples/StatusAlerts/statusAlertsTemplate.html','<div class=example><h1>Status Alerts</h1><hr><my-status-alert show=true is-error=true error-message="Something Went Wrong!!"></my-status-alert><my-status-alert show=true is-success=true success-message="Everyginng is Great!!"></my-status-alert></div>');
$templateCache.put('app/Examples/Tags/tagsTemplate.html','<div class="col-md-6 center-block"><h1>Select Fields</h1><div class=usage><code>\r\n                    <b>\r\n                        <span class=tag>&lt;my-select-field&gt;</span><br>\r\n                       \r\n                        <span class=tag>&lt;/my-select-field&gt;</span>\r\n                    </b>\r\n                </code></div><my-panel title=Options theme=success><table class="table table-striped"><thead><tr><td>Property</td><td>Required</td><td>Description</td></tr></thead><tr><td>ng-model</td><td>Yes</td><td>Selected Value</td></tr><tr><td>items</td><td>Yes</td><td>The List if options</td></tr><tr><td>input-tpye</td><td>No</td><td>The type of select: Tags or Combobox <small>default : tags</small></td></tr></table></my-panel><div class=well><h4>Tags</h4><my-select-field field-label=Languages items=vm.tags tooltip="Please Select a Language" ng-model=vm.selectedTags></my-select-field><h4>Tags</h4><my-select-field field-label=Languages items=vm.cats input-type=combobox tooltip="Please Select a Language" ng-model=vm.selectedTags></my-select-field></div></div>');
$templateCache.put('app/Components/Buttons/CreateButton/createButtonTemplate.html','<div class={{vm.cssClass} id={{vm.id}} ng-click=vm.click()>{{vm.buttonText}}<i class="fa fa-{{vm.icon}}"></i></div>]');
$templateCache.put('app/Components/Buttons/DeleteButton/deleteButtonTemplate.html','<div class={{vm.cssClass} id={{vm.id}} ng-click=vm.click()>{{vm.buttonText}}<i class="fa fa-{{vm.icon}}"></i></div>]');
$templateCache.put('app/Components/Buttons/EditButton/editButtonTemplate.html','<div class={{vm.cssClass} id={{vm.id}} ng-click=vm.click()>{{vm.buttonText}}<i class="fa fa-{{vm.icon}}"></i></div>]');
$templateCache.put('app/Components/Buttons/SpinnerButton/spinnerButtonTemplate.html','<button id={{vm.id}} class="btn btn-success" ng-click=vm.click() n ng-disabled=vm.isDisabled>{{vm.buttonText}}<i class="fa fa-circle-o-notch fa-spin" ng-if=vm.saving></i></button>');
$templateCache.put('app/Components/CheckBoxes/CheckboxField/checkboxField.html','<input type=checkbox class=nodetext id=check1> <label for=check1 class=clslab>Music</label>');
$templateCache.put('app/Components/CheckBoxes/DisplayCheckField/displayCheckFieldTemplate.html','<div class=row><div class=col-sm-8><label class=control-label><strong>{{$ctrl.fieldLabel}}</strong></label></div><div class=col-sm-2><i ng-show=$ctrl.ngModel class="fa fa-check fa-2x"></i></div></div>]');
$templateCache.put('app/Components/ComboBoxes/CategorySelect/categorySelectTemplate.html','<div class=form-group><label class=control-label style="min-width: 110px; text-align: left">{{vm.fieldLabel}}</label><select ng-model=vm.selected class=form-control><option ng-repeat="category in vm.cats" value={{category}}>{{category}}</option></select></div>');
$templateCache.put('app/Components/Filters/FilterTextbox/filterTextboxTemplate.html','<div class=input-group style="display: flex"><input type=text ng-model=vm.ngModel placeholder={{vm.placeholder}} id={{vm.fieldName}} class=form-control> <button class="btn btn-default" id=searchFilter><i class="glyphicon glyphicon-search"></i></button></div>');
$templateCache.put('app/Components/Headers/PageHeader/pageHeaderTemplate.html','<h1 id=pagetitle>{{ vm.title }}</h1>');
$templateCache.put('app/Components/HtmlHelpers/DisplayHtmlTag/displayHtmlTagTemplate.html','<span class=tag>&lt;{{vm.tagName}}</span>');
$templateCache.put('app/Components/Inputs/InputField/inputFieldTemplate.html','<style>\r\n    .popover {\r\n        min-width: 200px;\r\n    }\r\n    \r\n    .input-group {\r\n        width: 100% !important;\r\n    }\r\n    \r\n    .input-group .form-control {\r\n        z-index: 100;\r\n    }\r\n\r\n</style><div class=form-group><label ng-class="vm.cssClassService.getlabelClass(vm.horizontal, vm.labelWidth)" for=vm.fieldName>{{vm.fieldLabel}}</label><div ng-class="vm.cssClassService.getInputClass(vm.horizontal, vm.inputWidth)"><div ng-if=!vm.readOnly class=input-group><input ng-if="vm.inputType===\'textbox\'" ng-model=vm.ngModel type=text class=form-control id=vm.fieldName placeholder={{vm.placeholder}} required><input ng-if="vm.inputType===\'email\'" type=email class=form-control id=vm.fieldName placeholder={{vm.placeholder}}><textarea ng-if="vm.inputType===\'textarea\'" class=form-control id=vm.fieldName ng-model=vm.ngModel placeholder={{vm.placeholder}}></textarea><input ng-if="vm.inputType===\'checkbox\'" type=checkbox id=vm.fieldName ng-model=vm.ngModel><span ng-if="vm.inputType===\'date\'"><input type=text class=form-control uib-datepicker-popup={{vm.format}} ng-model=vm.ngModel is-open=vm.isOpened style="width: 82%" datepicker-options=vm.dateOptions ng-required=true close-text=Close alt-input-formats=altInputFormats> <span class="btn btn-default" ng-click=vm.open()><i class="fa fa-bars"></i></span></span> <span ng-show="vm.tooltip!==\'\'" class=input-group-addon uib-popover={{vm.tooltip}} popover-title=Info popover-class=popover popover-trigger="\'mouseenter\'"><i class="fa fa-info"></i></span></div><div ng-show=vm.readOnly><p ng-if="vm.inputType!==\'checkbox\'">{{vm.ngModel}}</p><i ng-if="vm.inputType===\'checkbox\'" ng-show=vm.ngModel class="fa fa-check fa-2x"></i></div><p class=help-block>{{vm.helpText}}</p></div></div>');
$templateCache.put('app/Components/Inputs/SelectField/selectFieldTemplate.html','<style>\r\n.popover\r\n{\r\n    min-width: 200px;\r\n}\r\n.input-group{\r\n    width: 100% !important; \r\n}\r\n</style><div class=form-group><label ng-class="vm.cssClassService.getlabelClass(vm.horizontal, vm.labelWidth)" for=vm.fieldName>{{vm.fieldLabel}}</label><div ng-class="vm.cssClassService.getInputClass(vm.horizontal, vm.inputWidth)"><div ng-if=!vm.readOnly class=input-group><ui-select ng-if="vm.inputType===\'tags\'" multiple ng-model=vm.ngModel theme=bootstrap><ui-select-match placeholder="Select a Tag...">{{$item.name}}</ui-select-match><ui-select-choices repeat="item in (vm.items | filter: $select.search) track by item.id"><span ng-bind=item.name></span></ui-select-choices></ui-select><select ng-if="vm.inputType===\'combobox\'" size=vm.size multiple=vm.multiSelect ng-model=vm.ngModel class=form-control id={{vm.fieldName}}><option ng-repeat="option in vm.items" ng-value={{option.id}}>{{option.name}}</option></select><span ng-show="vm.tooltip!==\'\'" class=input-group-addon uib-popover={{vm.tooltip}} popover-title=Info popover-class=popover popover-trigger="\'mouseenter\'"><i class="fa fa-info"></i></span></div><div ng-show=vm.readOnly><span ng-repeat="tag in vm.items" class=badge>{{tag.name}} <span></span></span></div><p class=help-block>{{vm.helpText}}</p></div></div>');
$templateCache.put('app/Components/Inputs/ToolTip/tooltipTemplate.html','<div>Help</div><div class=form-group><input type=text ng-model=dynamicPopover.title class=form-control></div>');
$templateCache.put('app/Components/Modals/ModalButtons/modalButtonsTempalte.html','{{vm.save}}<div class=modal-footer><span><button class="btn btn-primary btn-large pull-left" ng-if=vm.saveVisible id=save ng-click=vm.save() type=submit>{{vm.saveText}}</button><button class="btn btn-default pull-left" ng-if=vm.closeVisible id=close ng-click=vm.close() type=button>{{vm.closeText}}</button></span></div>');
$templateCache.put('app/Components/Modals/ModalHeader/modalHeaderTempalte.html','<div class=modal-header id=vm.id><h3 class=modal-title>{{vm.title}}</h3></div>');
$templateCache.put('app/Components/Other/Spinner/spinnerTemplate.html','<div class="row text-center"><img style="height: 100px" ng-src=http://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif></div>');
$templateCache.put('app/Components/Panels/InfoPanel/infoPanelTemplate.html','<div class=well><i class="fa fa-{{vm.icon}}"></i> {{vm.infoText}}<ul class=on-page-nav></ul></div>');
$templateCache.put('app/Components/Panels/MoreLessButton/moreLessButtonTemplate.html','<button type=button class={{vm.cssClass} id={{vm.id}} ng-click="vm.isCollapsed = !vm.isCollapsed"><i ng-class=vm.getButtonIcon() aria-hidden=true></i>{{vm.getButtonText() }}</button>');
$templateCache.put('app/Components/Panels/MoreLessPanel/moreLessPanel.html','<div uib-collapse=vm.isCollapsed><div class=panel-body ng-transclude></div></div><button type=button class="btn btn-default" ng-click="vm.isCollapsed = !vm.isCollapsed">{{vm.getButtonText()}}</button>');
$templateCache.put('app/Components/Panels/Panel/panelTemplate.html','<div class="panel panel-{{vm.theme}}" ng-style={{vm.getPanelStyle()}}><div class=panel-heading ng-style={{vm.getPanelHeadingStyle()}} id={{vm.fieldName}}><i class="fa fa-{{vm.icon}} fa-{{vm.iconSize}}x"></i><span style="padding-left: 10px; font-weight: 700" ng-style={{vm.getTitleStyle()}}>{{vm.title}}</span><div ng-show=vm.showAddButton id={{vm.addButtonId}} ng-click=vm.add() ng-style={{vm.getButtonStyle()}} class="btn btn-default pull-right" style="padding: 3px;"><i class="fa fa-plus"></i></div><div ng-show=vm.showEditButton id={{vm.editButtonId}} ng-click=vm.edit() ng-style={{vm.getButtonStyle()}} class="btn btn-default pull-right" style="padding: 3px;"><i class="fa fa-bars"></i></div></div><div class=panel-body ng-transclude style={{vm.getPanelContentStyle()}}></div><div class=panel-footer ng-if=vm.showFooter style={{vm.getPanelStyle()}}><div class=row><div class=col-md-6><span class=pull-left>{{vm.footerLeftLabel}}</span></div><div class=col-md-6><span class=pull-right>{{vm.footerRightLabel}}</span></div></div></div></div>');
$templateCache.put('app/Components/SelectLists/SelectList/selectListTemplate.html','<div class=form-group><label class=control-label style="min-width: 110px; text-align: left">{{vm.fieldLabel}}</label><select ng-model=vm.ngModel class=form-control id={{vm.fieldName}}><option ng-repeat="option in vm.items" value={{option.Id}}>{{option.Id}}</option></select></div>');
$templateCache.put('app/Components/StatusAlerts/StatusAlert/statusAlertTemplate.html','<div ng-class=vm.getClass() id=getId()><i class=vm.getIcon()></i>{{vm.message}}</div>');
$templateCache.put('app/Components/Tags/TagsFilter/tagsFilterTemplate.html','<div class=form-group><label class=control-label style="min-width: 110px; text-align: left">Tags</label><div class=form-control><span ng-repeat="tag in vm.tagList track by $index"><span class=badge ng-click=vm.tagClicked(tag) style="cursor: pointer">{{tag}}</span></span></div></div>');
$templateCache.put('app/Examples/ExampleForm/CreateButton/createButtonTemplate.html','<div class={{vm.cssClass} id={{vm.id}} ng-click=vm.click()>{{vm.buttonText}}<i class="fa fa-{{vm.icon}}"></i></div>]');
$templateCache.put('app/Components/Inputs/DatesField/DateField/dateFieldTemplate.html','<style>\r\n    .popover {\r\n        min-width: 200px;\r\n    }\r\n    \r\n    .input-group {\r\n        width: 40% !important;\r\n    }\r\n\r\n</style><div class=form-group><label ng-class="vm.cssClassService.getlabelClass(vm.horizontal, vm.labelWidth)" for=vm.fieldName>{{vm.fieldLabel}}</label><div ng-class="vm.cssClassService.getInputClass(vm.horizontal, vm.inputWidth)"><div ng-if=!vm.readOnly class=input-group><input type=text class=form-control uib-datepicker-popup={{vm.format}} ng-model=vm.ngModel is-open=vm.isOpened datepicker-options=vm.dateOptions ng-required=true close-text=Close alt-input-formats=altInputFormats><span class=input-group-btn><button type=button class="btn btn-default" ng-click=vm.open()><i class="fa fa-bars"></i></button></span><span ng-show="vm.tooltip!==\'\'" class=input-group-addon uib-popover={{vm.tooltip}} popover-title=Info popover-class=popover popover-trigger="\'mouseenter\'"><i class="fa fa-info"></i></span></div><div ng-show=vm.readOnly>{{vm.ngModel | date}}</div><p class=help-block>{{vm.helpText}}</p></div></div>');}]);