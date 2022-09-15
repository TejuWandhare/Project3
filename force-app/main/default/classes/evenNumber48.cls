public class evenNumber48 {
public static void evenMethod()
{
integer no=100;

System.debug('Printing even numbers between 1 to '+no);

for(Integer i=1;i<=no;i++)
{
if (0==math.mod(i,4) || 0==math.mod(i,8))
{
System.debug('Display the even numbers'+i);
}
}
}
}