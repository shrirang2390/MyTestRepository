trigger LeadTrigger on Lead (before insert) {

Map<string,List<Lead>> mapEmailLead = new Map<string,List<Lead>>();
List<string> listEmails = new List<string>();

for(Lead leadData : trigger.new)
{

    if(leadData.Email!=null)
    {
        listEmails.add(leadData.Email);
        
        if(mapEmailLead.containsKey(leadData.Email))
        {
            List<Lead> listLead = mapEmailLead.get(leadData.Email);
            listLead.add(leadData);
            mapEmailLead.put(leadData.Email,listLead);
        }
        else
        {
            List<Lead> listLead = new List<Lead>();
            listLead.add(leadData);
            mapEmailLead.put(leadData.Email,listLead);
        }
    }
    
    
}

List<Contact> listMatchedEmailCnt = [Select id,email,Lead_Count__c from Contact where Email in : listEmails];
List<Contact> listUpdatedContact = new List<Contact>();

for(Contact cntData : listMatchedEmailCnt)
{
    List<Lead> listLead = mapEmailLead.get(cntData.email);
    if(listLead!=null && listLead.size()>0)
    {
        if(cntData.Lead_Count__c==null)
        {
            cntData.Lead_Count__c = 0;
        }
        cntData.Lead_Count__c = cntData.Lead_Count__c + listLead.size();
        cntData.LeadSource = listLead[0].LeadSource;
        listUpdatedContact.add(cntData);
    }
   
} 

update listUpdatedContact;


}