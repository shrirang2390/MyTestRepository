({
	init : function(component, event, helper) {
		 component.set('v.mycolumns', [
            {label: 'Case Number', fieldName: 'linkName', type: 'url', 
            typeAttributes: {label: { fieldName: 'CaseNumber' }, target: '_blank'}}, 
            /*{ label: 'Case Number1', fieldName: 'CaseNumber', type: 'text'},*/
            { label: 'Subject', fieldName: 'Subject', type: 'text'},
            { label: 'Status', fieldName: 'Status', type: 'text'}, 
            { label: 'Priority', fieldName: 'Priority', type: 'text'}
        ]);
	},
    openCase : function(component,event) {
        var selectedRows = event.getParam('selectedRows');
        
        
        // Display that fieldName of the selected rows
        var openCaseEvt = component.getEvent('OpenCase');
        openCaseEvt.setParams(
            {
                'caseId' : selectedRows[0].Id
            });
        
        
      	openCaseEvt.fire();
    }
})