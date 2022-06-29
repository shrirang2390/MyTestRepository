({
	clickCreate : function(component, event, helper) {
        
        if($A.util.isEmpty(component.get("v.caseData.Subject")))
        {
            var validExpense = component.find('caseForm').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        	}, true);
            return;
        }
        
        
		var caseData = component.get('v.caseData');
        var action = component.get("c.createCase");
        alert('caseData'+caseData.Subject);
        action.setParams({
            "caseData": caseData
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            //var errorMsg = response.getError()[0];
            //alert(errorMsg);
            if (state === "SUCCESS") {
                //alert('success');
                var cases = component.get("v.cases");
                var caseRecords =response.getReturnValue();
                caseRecords.forEach(function(record){
                    //alert('1--'+record.id+'---'+record.CaseNumber);
                    record.linkName = '/'+record.Id;
                    //alert('2--'+record.id+'---'+record.CaseNumber+'---'+record.linkName);
                });
                
                cases.push(caseRecords[0]);
                component.set("v.cases", cases);
                  var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "Success",
                        "message": "Case created successfully."
                    });
   					 toastEvent.fire();
                
                
            }
            else if (response.getState() === "ERROR") {

                // component.set(“v.messageType”, ‘error’ );
                var errors = response.getError();
                alert(errors[0].message );
            }
        });
        $A.enqueueAction(action);
	},
    init : function(component, event, helper) {
        
        helper.loadStatusPickListValues(component);
        helper.loadPriorityPickListValues(component);
    }
    
})