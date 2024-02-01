function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
            let answer = [0,1];
        if(n === 1) {
            return [0]
        } else if (n === 2) {
            return answer
        }
    
    
        for(let i = 2 ;i < n; i++) {

            let y = answer[answer.length-1]
            let x = answer[answer.length-2]
            answer.push(y+x)
        }
        return answer;
        
        
        
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }

    console.log(fibonacciGenerator(10
        ))


function BellBoy(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
}

let bell1 = new BellBoy("timmy", 10, 6)
console.log(bell1)