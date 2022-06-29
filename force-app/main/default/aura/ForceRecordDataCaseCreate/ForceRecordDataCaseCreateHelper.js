({
	validateCaseForm: function(component) {
        var validCase = true;
         // Show error messages if required fields are blank
        var allValid = true;
        var caseFieldSubj = component.find("caseFieldSubj");
        //alert(caseFieldSubj);
        var subjeVal = caseFieldSubj.get("v.value");
        if($A.util.isEmpty(subjeVal) || $A.util.isUndefined(subjeVal)){
            //alert('Subject is Required');
            //caseFieldSubj.set("v.errors", [{message:"Subject Cannot be blank"}]);
            caseFieldSubj.set("v.errors", [{message:"Subject Cannot be blank"}]);
            return;
        } 
        
        //alert(subjeVal+' subjeVal');
        /*if(subjeVal==undefined || subjeVal=="" || subjeVal==null)
        {
            alert('inside1');
            caseFieldSubj.set("v.errors", [{message:"Subject Cannot be blank"}]);
            alert('inside2');
             allValid = false;
            validCase =false;
            alert('inside3');
        }*/
		
        	
        if (allValid) {
            // Verify we have an account to attach it to
            var caseData = component.get("v.newCase");
            if($A.util.isEmpty(caseData)) {
                validCase = false;
                console.log("Quick action context doesn't have a valid account.");
            }
            //alert(validCase);
        return(validCase);
            
        }  
	}
})