public with sharing class innerClassDemo {//outer class

    public static DataWrapper getList(){ // outer class static method
        return new DataWrapper();

    }

    public class DataWrapper{ //inner class
        List<Account> accountList;
        List<Opportunity> opportunityList;
        List<Contact> contactList;

        public DataWrapper(){ //inner class constructor
            accountList= [Select Name, ID, ownerId, industry From Account];
            opportunityList= [Select Name, ID, StageName From Opportunity];
            contactList= [Select FirstName, LastName, Id, AccountID From Contact];
        }

    }
}
