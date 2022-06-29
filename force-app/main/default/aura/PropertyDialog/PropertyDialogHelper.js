({
    navigateTo: function(component, recId) {
        alert(component+recId);
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": recId
        });
        navEvt.fire();
    }
})