({
	openCaseDetails : function(component, event, helper) {
		//alert('handled');
		var caseId = event.getParam("caseId");
		
		component.set('v.selectedCaseId',caseId);
		
	}
})