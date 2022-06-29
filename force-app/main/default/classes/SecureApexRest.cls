@RestResource(urlMapping='/secureApexRest')
global with sharing class SecureApexRest {
    @HttpGet
    global static Contact doGet(){
        Id recordId = RestContext.request.params.get('id');
        Contact result;
        if (recordId == null){
            throw new FunctionalException('Id parameter is required');
        }
		
        try
        {
            result = [SELECT id, Name, Secret_Key__c FROM Contact WHERE Id = :recordId WITH SECURITY_ENFORCED];
        }
        catch(System.QueryException ex)
        {
            throw new SecurityException(ex);
        }
        
        
        
        return result;
        
        
        
    }
    public class FunctionalException extends Exception{}
    public class SecurityException extends Exception{}
}