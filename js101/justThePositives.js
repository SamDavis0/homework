// JUST THE POSITIVES

function positiveNumbers(arr){
    let newArr = []
    for(x = 0; x < arr.length; x++){
        if(arr[x] >= 0){
            newArr.push(arr[x])
        }
    
    }
    console.log(newArr);
}


positiveNumbers([10, -5, -4, 3, 0])



