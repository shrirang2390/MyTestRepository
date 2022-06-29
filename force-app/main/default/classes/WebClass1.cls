global class WebClass1 {
    webservice static String returnPrefix(){
        Schema.DescribeSObjectResult r = Account.sObjectType.getDescribe();
    String keyPrefix = r.getKeyPrefix();
        return keyPrefix;
    }
}