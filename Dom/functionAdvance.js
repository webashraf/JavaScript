function even(num){
    let rslT;
    if (num % 2 == 0) {
        rslT = num;
    }
    else{
        rslT = num *2;
    }
    return rslT;
}
let fR = even(15);
let squre = fR * fR
console.log(squre);

function evenAll(nums){
    let EvenArray = []
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let result = even(num);
        EvenArray.push(result);
    }
    return EvenArray;
}
let nums = [21, 51, 55, 54]; 
let finalResult = evenAll(nums); 
console.log(finalResult); 

// Function in Function call
function details(nam, age, habit){
    console.log('Nam -', nam);
    console.log('Your Age -', age);
    habit();
}
function DrinkWater(){
    console.log('Habit - I Drink water');
}
function Alcohol(){
    console.log('Habit - Drink Alcohol');
}
details('Ali Ashraf', 23, DrinkWater);
details('Khairul Bashar Emon', 22, Alcohol);
details('Rayhan', 22, Alcohol);