trigger EmpTrigger on Employee__c (before insert,after insert) {

    if(trigger.isBefore)
    {
        for(Employee__c emp : trigger.new)
        {
            
        }
        
    }
}