public class duplicatename {
    public static void Method(){
        Set<String> strSet = new Set<String>();
        List<String> strList = new List<String>{'A','B','C','D','A','B','A','A','A','A'};
            for(String str: strList ){
                strSet.add(str);
            }
        //Map
        Map<String, Integer> myMap = new Map<String,Integer>();
        //iterate through set
        
        for(String str1: strSet){
            Integer countofChar = 0;
            for(String str: strList ){
                if(str == str1){
                    countofChar++;
                }
            }
            myMap.put(str1, countofChar);
        }
        System.debug(myMap);
    }
}