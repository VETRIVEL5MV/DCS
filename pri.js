function chkPrime(n)
{
    if(n == 1 || n == 0) return false;
        for(var i = 2; i < n; i++)
    {
     if(n % i == 0) return false;
    }
     return true;
}
var num = 100;
for(var i = 1; i <= num; i++)
{
   if(chkPrime(i)) {
    console.log( i );
   }
}  