/*Create a List of Integer with following input {1,2,1,3,2,4,3,4,5,6,7} count how many duplicate numbers are present in the List
Expected output- 4 */

public class duplicateNumberInArray {
    public static void Method(){
        
    /* list<integer> numlist=new list<integer>{1,2,1,3,2,4,3,4,5,6,7};
            map<integer,integer> amap=new map<integer,integer>();
        for(integer a:numlist){
            if(amap.get(a)<>null){
                amap.put(a, amap.get(a)+1);}
            else{
                amap.put(a,1);
            }
        } 
        system.debug(amap);
    }*/
    Integer currentInt=0;
    List<String> nameArray = new List<String>{'A','B','C','D','A','B','A','A','A','A'};
    Map<String,Integer> elCount = new Map<String,Integer>();

    for(String key : nameArray)
   {
    if(!elCount.containsKey(key)){
    elCount.put(key,0);
        currentInt++;
    }
    //Integer currentInt=elCount.get(key)+1;
    //elCount.put(key,currentInt);
   }
        system.debug('Duplicate strings are'+currentInt);
  }
}