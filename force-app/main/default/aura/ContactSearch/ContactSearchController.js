({
        handleKeyUp: function (component, evt) {
            var isEnterKey = evt.keyCode === 13;
            var queryTerm = component.find('enter-search').get('v.value');
            var contacts = component.get('v.Contacts');
            if (isEnterKey) {
                component.set('v.issearching', true);
                setTimeout(function() {
                   // alert('Searched for "' + queryTerm + '"!');
                    var action = component.get("c.searchContact");
                    var contactsData = component.get("v.contacts");
                   //	alert('1');
                    //alert('caseData'+caseData.Subject);
                    action.setParams({
                        "searchTerm": queryTerm
                    });
                    action.setCallback(this, function(response){
                       // alert('2');
                        var state = response.getState();
      
                        if (state === "SUCCESS") {
                            //alert('success');
                            var contactRecords =response.getReturnValue();
                            //alert('contactRecords'+contactRecords);
                            if(contactRecords != '')
                            {
                                // alert('null');
                                component.set("v.isResultFound",true);
                               
                                component.set("v.contacts", contactRecords);
                               
                              
                            }
                            else
                            {
                                component.set("v.isResultFound",false);
                                component.set("v.contacts", '');
                            }
                            //contacts.push(contactRecords[0]);
                            
                            //
                           
                        }
                        else if (response.getState() === "ERROR") {
            					//alert('3');
                            // component.set(“v.messageType”, ‘error’ );
                            var errors = response.getError();
                            alert(errors[0].message );
                        }
                    });
                    $A.enqueueAction(action);
                    component.set('v.issearching', false);
                }, 2000);
            }
        }
    });