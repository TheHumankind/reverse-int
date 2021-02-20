module.exports = function reverse (n) {
    let newN = 0;
    n = Math.abs(n);
    while(n >= 10){
        newN = newN + n % 10;
        n /= 10;
        n = Math.floor(n);
        newN = newN * 10;
    }
    
    return newN + n;
}
