public class CaseManager {
	@AuraEnabled
    public static List<Case> createCase(Case caseData)
    {	System.debug('---caseData'+caseData);
        
        upsert caseData;
        List<Case> caseList = [select id,subject,casenumber,priority,status from Case where id=:caseData.id];
        return caseList;
    }
    
    @AuraEnabled
    public static List<String> getCasePicklistvalues(String field_apiname,Boolean nullRequired){
        
Long interval = 7*9*60*60*1000;
system.debug(BusinessHours.add('01m7F000000L0I3QAK',system.now(),interval));
        return CommonPicklistController.getPicklistvalues('Case',field_apiname,nullRequired);
    }
}