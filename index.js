
// This function creates an array with the 2 first values of the fibo seq, then it loops limit(n) times beginning at 2 (due to the array mentioned before),
// and it loops n times doing the operation stated below: at place i in the fib array, it adds the sum of i-1 and i-2(the 2 past values in the sequence). 
function fibonacci (limit){
    const fib = [0,1];
    for(let i =2; i<limit; i++ ){
        fib[i]= fib[i-1]+fib[i-2];
    }

    return fib
}

// This part of the code adds a h1 at the end of the fibonacci div and with a template string, shows the value at the index given by the user.
function printFibonacci(){
    
    let inputvalue = document.getElementById('fibIn').value
    
    const fibserie = fibonacci(inputvalue);

    const value = fibserie[inputvalue-1];
    const answer = document.createElement('h1')
    answer.innerHTML= `The position number ${inputvalue} at the fibonacci sequence is: ${value}`

    const fiboDiv = document.getElementById('fibopart')

    fiboDiv.appendChild(answer)




}



