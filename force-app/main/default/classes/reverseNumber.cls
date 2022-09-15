public class reverseNumber {
public static void Method(){
integer num = 987654, rev = 0;  
while(num != 0)   
{  
integer remainder = math.mod(num,10);  
rev = rev * 10 + remainder;  
num = num/10;  
}  
System.debug('The reverse of the given number is: ' + rev);  
}  
    
}