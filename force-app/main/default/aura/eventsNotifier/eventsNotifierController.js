({
	fireComponentEvent  : function(component, event, helper) {
		var parentName = component.get("v.parentName");

        // Look up event by name, not by type
        var compEvents = component.getEvent("componentEventFired");

        compEvents.setParams({ "context" : parentName });
        compEvents.fire();
	},
    fireApplicationEvent   : function(component, event, helper) {
		 var parentName = component.get("v.parentName");

        // note different syntax for getting application event
        var appEvent = $A.get("e.c:appEvent");

        appEvent.setParams({ "context" : parentName });
        appEvent.fire();
	}
})