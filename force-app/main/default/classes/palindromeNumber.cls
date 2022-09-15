public class palindromeNumber {
 public static void method(){  
  integer r,sum=0,temp;    
  integer n=454;//It is the number variable to be checked for palindrome  
  
  temp=n;    
  while(n>0){    
   r=math.mod(n,10);  //getting remainder  
   sum=(sum*10)+r;    
   n=n/10;    
  }    
  if(temp==sum)    
   System.debug('palindrome number'+n);    
  else    
   System.debug('not palindrome');    
}  
}