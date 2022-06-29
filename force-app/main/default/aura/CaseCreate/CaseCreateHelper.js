({
	loadStatusPickListValues : function(component) {
		var action = component.get("c.getCasePicklistvalues");
        //alert("inside init2");
         action.setParams({
            "field_apiname" : "Status",
            "nullRequired" : true
        });
        //alert("inside init3");
        action.setCallback(this, function(response){
            var state = response.getState();
          
            if(state == "SUCCESS")
            {
                component.set("v.statusValues", response.getReturnValue());
               
                
            }
    	});
	 	$A.enqueueAction(action);
	},
    loadPriorityPickListValues : function(component) {
		var action = component.get("c.getCasePicklistvalues");
        //alert("inside init2");
         action.setParams({
            "field_apiname" : "Priority",
            "nullRequired" : true
        });
        //alert("inside init3");
        action.setCallback(this, function(response){
            var state = response.getState();
          
            if(state == "SUCCESS")
            {
                component.set("v.priorityValues", response.getReturnValue());
               //alert(''+response.getReturnValue())
                
            }
    	});
	 	$A.enqueueAction(action);
	}
})