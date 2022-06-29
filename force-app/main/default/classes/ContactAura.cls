public class ContactAura {
    @AuraEnabled
    public static List<Contact> get10COntacts()
    {
        return [SELECT Id, NAME FROM Contact Limit 10] ;
    }
    
     @AuraEnabled
    public static List<Account> get10Accounts()
    {
        return [SELECT Id, NAME,Industry,Phone,Website FROM Account Limit 10] ;
    }
}