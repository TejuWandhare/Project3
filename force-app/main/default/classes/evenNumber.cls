public with sharing class evenNumber {
public static void evenNumber() {
   
integer no=100;

System.debug('Printing even numbers between 1 to '+no);

for(Integer i=1;i<=no;i++)
{
if (0==math.mod(i, 2))
{
System.debug('Display the even numbers'+i);
}
}
}

}