({
	myAction : function(component, event, helper) {
		
	},
    handleSuccess : function(component, event, helper) {
                        component.find('notifLib').showToast({
                            "variant": "success",
                            "title": "Case Created",
                        });
                    }
})