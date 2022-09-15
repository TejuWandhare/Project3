public with sharing class arithmaticOperations {
    
        public static Integer xvalue {get;set;}
        public static Integer yvalue {get;set;}
        public static Integer result {get;set;}
        public static string operation {get;set;}
     
        public static pagereference sub() {
            result = xvalue-yvalue;
            operation = 'Subtraction';
            return null;
        }
        public static pagereference add() {
            result = xvalue+yvalue;
            operation = 'Addition';
            return null;
        }
        public static pagereference mul() {
            result = xvalue*yvalue;
            operation = 'Multiplication';
            return null;
        }
        public static pagereference div() {
            result = xvalue/yvalue;
            operation = 'Division';
            return null;
    }
}