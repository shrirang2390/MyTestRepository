global with sharing class AccountBatch implements Database.Batchable<SObject> 
{
    global Database.QueryLocator start(Database.BatchableContext batchContext)
    {
    	
    	return Database.getQueryLocator('Select Id,(Select Id FROM Contacts) from Account where Name=\'Rahul123\'');
    }
    
    global void execute(Database.BatchableContext batchContext,List<SObject> scope)
    {
    	if(scope!=null)
        {
            List<Contact> listCon = new List<Contact>();
            for (sObject sobj: scope)
            {
             	Account act = (Account)sobj;
                
                if(act.Contacts!=null)
                {
                    for(contact c : act.Contacts)
                    {
                        c.Department='IT';
                        listCon.add(c);
                    }
                    
                }
            }
            
            if(listCon!=null && !listCon.IsEmpty())
            {
            	update listCon;
            }
        }
    }
    
    global void finish(Database.BatchableContext batchContext)
    {
    
    }

}