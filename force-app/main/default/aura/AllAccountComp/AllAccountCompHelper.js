({
	getAllAccounts  : function(component, event, helper) {
        component.set('v.mycolumns', [
            {label: 'Account Name', fieldName: 'Name', type: 'text',sortable:"true"},
                {label: 'Industry', fieldName: 'Industry', type: 'text'},
                {label: 'Phone', fieldName: 'Phone', type: 'Phone'},
                {label: 'Website', fieldName: 'Website', type: 'url '}
            ]);
        
		var action = component.get("c.get10Accounts");
        action.setCallback(this, function(a){
            component.set("v.acctList", a.getReturnValue());
        });
        $A.enqueueAction(action);
	}
})