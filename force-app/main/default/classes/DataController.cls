public with sharing class DataController {
    @AuraEnabled
    public static String passError(String message) {
        Exception ex = new AuraHandledException('');
        ex.setMessage('not authorized');
        throw ex;
    }
}
