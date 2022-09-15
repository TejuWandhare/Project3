public class palindromeString {
    public void palindrome(){
    String temp= 'Civic';
    integer stringLength=0;
    stringLength= temp.Length();
    string revString='';
    for (Integer i=temp.Length()-1;i>=0;i--) {
        system.debug('Place of char' + I + '---'+ (i+1));
        revString = revString+ temp.substring(i,i+1) ;
        system.debug(revString);
    }
    if (temp == revString) {
        system.debug('String is Palindrom :'+revString);
    }else {
        system.debug('String is not Palindrom :'+revString);
    }
}
}