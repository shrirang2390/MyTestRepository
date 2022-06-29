trigger ContactTrigger on Contact (after update,before update,after insert,before insert,before delete) {

if(trigger.isdelete && trigger.isafter)
{
   List<Id> listActId = new List<Id>();
   for(Contact cnt : Trigger.Old)
   {
       listActId.add(cnt.AccountId);
   }
   system.debug('+++listAct'+listActId );
   List<Account> listAct = [SELECT Id from Account where id in: listActId];
   delete listAct;
   }

    /*List<Account> listAct = new List<Account>();
    Account act;
    if(trigger.isBefore && trigger.isinsert)
    {

        for(Contact con : trigger.new)
        {
            act = new Account();        
            act.id = con.accountid;   
            act.BillingStreet=con.FirstName+'before insert';
            listAct.add(act );
        }
        update listAct;
    }
    listAct.clear();
    if(trigger.isAfter && trigger.isinsert)
    {

        for(Contact con : trigger.new)
        {
            act = new Account();        
            act.id = con.accountid;   
            act.Description=con.FirstName+'after insert';
            listAct.add(act );
        }
        update listAct;
    }

    

    if(trigger.isBefore && trigger.isupdate)
    {

        for(Contact con : trigger.new)
        {
            act = new Account();        
            act.id = con.accountid;   
            act.BillingStreet=con.FirstName+'before update';
            listAct.add(act );
        }
        update listAct;
    }
    listAct.clear();
    if(trigger.isAfter && trigger.isupdate)
    {

        for(Contact con : trigger.new)
        {
            act = new Account();        
            act.id = con.accountid;   
            act.Description=con.FirstName+'after update';
            listAct.add(act );
        }
        update listAct;
    }*/

   


}