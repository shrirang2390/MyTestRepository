trigger AccountTrigger on Account (after insert,after update,before insert,before update) {
    
    List<Account> listAct = new List<Account>();
  
         //IF(Constants.isExecuted==false)
         //{

         if(trigger.isbefore)
        {
            Constants.isExecuted = true;
            for(Account acc : trigger.new)
            
            {
                system.debug('before###'+acc.Industry);
                acc.Industry = 'Finance';
                system.debug('createdDate###'+acc.CreatedDate);    
                //listAct.add(acc);
            }
        }
        //}
        if(trigger.isafter)
        {
            for(Account acc : trigger.new)
            {

                       system.debug('aftert###'+acc.Industry);
                //listAct.add(acc);
            }
        }

    
  /*  if(Constants.isExecuted == false)
    {
        
        if(trigger.isAfter)
        {
            List<Account> listAct = new List<Account>();
            for(Account acc : trigger.new)
            {
                acc.Industry = 'Banking';
               listAct.add(acc);
            }  
            
            upsert listAct;  
                
        }
        
   }*/
    
    
    
    
    
    /*
    List<Contact> listContact = new List<Contact>();
        
    listContact = [SELECT id,Account.Industry from Contact where Accountid IN :trigger.newMap.keySet()];
    system.debug(listContact+'-----');
    
    if(trigger.isbefore)
    {
        if(trigger.oldMap === trigger.newMap)
        {
            system.debug('before: Same old and new map');
        }
        else
        {
            system.debug('before: Diff old and new map');
        }
        
        
         List<Contact> listContactUpdate = new List<Contact>();
            for(Contact cnt : listContact)
            {
                Account act = trigger.newMap.get(cnt.AccountId);
                system.debug(act.Industry);
                system.debug(cnt.Account.Industry+'cnt.Account.Industry');
                
                if(cnt.Account.Industry != act.Industry)  
                {
                    cnt.Description = act.Industry;
                    listContactUpdate.add(cnt);
                }
             
            }
        upsert listContactUpdate;
    }
    
    if(trigger.isafter)
    {
        if(trigger.oldMap === trigger.newMap)
        {
            system.debug('after: Same old and new map');
        }
        else
        {
            system.debug('after: Diff old and new map');
        }
        
    }*/
   /* try
    {
    List<Contact> listContactUpdate = new List<Contact>();
    for(Contact cnt : listContact)
    {
        if(cnt.Account.Industry=='Other')
        {
      cnt.addError('You can\'t add Description as Other');
        }

        else
        {
      cnt.Description = cnt.Account.Industry;
        }
        
       if(listContactUpdate.size()>0) 
        listContactUpdate.add(cnt);
    }
    upsert listContactUpdate; 
    }
    catch(Exception ex)
    {
        
        
    }*/
   // for(Account )
}