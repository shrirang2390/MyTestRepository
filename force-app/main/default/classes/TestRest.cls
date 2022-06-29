@RestResource(urlMapping='/TestRest')
global class TestRest {
    @HttpGet
    global static String doGet() {
        String name = RestContext.request.params.get('name');
        return 'Hello '+name;
    }
    @HttpPost
    global static String doPost() {
        String name = RestContext.request.params.get('name');
        Account accountdATA = new Account();
        accountData.Name=name+'123';
        upsert accountData;
        return 'Hello '+name;
    }
}