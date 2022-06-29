({
	init : function(component, event, helper) {
		 component.set('v.mycolumns', [
             /*{label: 'Id', fieldName: 'Id', type: 'text' , editable: true},*/
             { label: 'First Name', fieldName: 'FirstName', type: 'text',editable:true},
            { label: 'Last Name', fieldName: 'LastName', type: 'text',editable:true},
            { label: 'Email', fieldName: 'Email', type: 'Email',editable:true}, 
            { label: 'Phone', fieldName: 'Phone', type: 'Phone',editable:true},  
            { label: 'Department', fieldName: 'Department', type: 'text',editable:true}
        ]);
	},
     handleSaveEdition: function (cmp, event, helper) {
        var draftValues = event.getParam('draftValues');
        console.log(draftValues);
        var action = cmp.get("c.updateContact");
        action.setParams({"cont" : draftValues});
        action.setCallback(this, function(response) {
            var state = response.getState();
            $A.get('e.force:refreshView').fire();
            
        });
        $A.enqueueAction(action);
        
    }
})