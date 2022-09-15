public class palindromeInput {
    public static void method(integer n){  
        integer r,sum=0,temp;    
        temp=n;    
        while(n>0){    
            r=math.mod(n,10);  //getting remainder  
            sum=(sum*10)+r;    
            n=n/10;    
        }    
        if(temp==sum)    
            System.debug('palindrome number');    
        else    
            System.debug('not palindrome');    
    }  
}