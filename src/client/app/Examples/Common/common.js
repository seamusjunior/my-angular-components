var common = {
    template:'<h1>Common Properties</h1><table class="table table-striped"><thead><tr><td>Property</td><td>Required</td><td>Description</td></tr></thead><tr><td>field-label</td><td>No</td><td>Set the label value <small>Default: Date</small></td></tr><tr><td>field-name</td><td>No</td><td>Set the Name and ID values of the input.<br><small>Default: Uses the field-label to create a value</small></td></tr><tr><td>help-text</td><td>No</td><td>Set the information text to appear under the control<br><small>Default: empty</small></td></tr></table>'
};

angular.module('examples').component('statusAlerts', common);

