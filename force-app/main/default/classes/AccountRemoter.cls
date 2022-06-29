global with sharing class AccountRemoter {

    public String accountName { get; set; }
    public static Account account { get; set; }
    public static List<Account> listaccount { get; set; }
    public static List<Contact> listContact { get; set; }
    public AccountRemoter() { } // empty constructor
    
    @RemoteAction
    global static Account getAccount(String accountName) {
        account = [SELECT Id, Name, Phone, Type, NumberOfEmployees 
                   FROM Account WHERE Name = :accountName];
        return account;
    }
    
    @RemoteAction
    global static List<Account> getAllAccounts(String accountName) {
        listaccount = [SELECT Id, Name, Phone, Type, NumberOfEmployees 
                   FROM Account];
        return listaccount;
    }
    
    
     @RemoteAction
    global static List<Contact> getAllContacts(String accountName) {
        listContact = [SELECT Id, Name FROM Contact];
        return listContact;
    }
    
    @RemoteAction
    global static List<Account> getAllAccountRelatedContacts(String accountName) {
        listaccount = [SELECT Id, Name, Phone, Type, (SELECT Id, Name FROM Contacts) 
                 FROM Account];
        return listaccount;
        
    }
}