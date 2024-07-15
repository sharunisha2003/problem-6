function fact(n){
    if(n<=1){
        return 1;
}
return n*fact(n-1);
}
document.write("The factorial of 5 is "+fact(5));