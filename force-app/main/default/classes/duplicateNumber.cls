public class duplicateNumber {
    public static void Method(){
    
    List<String> strList = new List<String>{'A','B','C','D','A','B','A','A','A','A'};
    Set<String> strSet = new Set<String>();
        for(String str: strList ){
                strSet.add(str);
             
          }
        system.debug('Duplicate count is'+strSet);
        system.debug('Duplicate count is'+strSet.size());
    }
}