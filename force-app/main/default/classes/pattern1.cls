//Write a logic to get the following pattern 1,1,2,2,3,1,3,4,2,4,5,1,3,5,6,2,4,6.

public with sharing class pattern1 {
    public static void method() {
        integer no=100;

        for(Integer i=1;i<=no;i++)
        {
        if (0==math.mod(i,2) )
        {
        System.debug('Display the even numbers'+i);
        }
    }
}
}