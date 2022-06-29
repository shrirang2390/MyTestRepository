({
	handleComponentEventFired  : function(component, event, helper) {
		var context = event.getParam("context");
        component.set("v.mostRecentEvent", 
            "Most recent event handled: COMPONENT event, from " + context);
        
        var numComponentEventsHandled =
            parseInt(component.get("v.numComponentEventsHandled")) + 1;
        component.set("v.numComponentEventsHandled", numComponentEventsHandled);
	},
    handleApplicationEventFired   : function(component, event, helper) {
		var context = event.getParam("context");
        component.set("v.mostRecentEvent", 
            "Most recent event handled: APPLICATION event, from " + context);

        var numApplicationEventsHandled =
            parseInt(component.get("v.numApplicationEventsHandled")) + 1;
        component.set("v.numApplicationEventsHandled", numApplicationEventsHandled);
	}

    
})