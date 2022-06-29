public class ContactManager {
	@AuraEnabled
    public static List<Contact> searchContact(string searchTerm)
    {	
        List<List<sObject>> searchList = [FIND :searchTerm IN ALL FIELDS 
                   RETURNING Contact(Id,FirstName,LastName,Department,Email,Phone)];
        List<Contact> contactList = (Contact[])searchList[0];
        
        return contactList;
    }
    @AuraEnabled
    public static void updateContact(List<Contact> cont ){
         system.debug('cont:'+cont);
        update cont;
       
    }
}