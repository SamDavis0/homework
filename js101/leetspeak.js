// LEET SPEAK
// Write a function leetspeak which is given a string, and returns the leetspeak 
// equivalent of the string. To convert text to its leetspeak version, make the following substitutions:

// A => 4 E => 3 G => 6 I => 1 O => 0 S => 5 T => 7

const cipher = {
    "A": "4",
    "E": "3",
    "G": "6",
    "I": "1",
    "O": "0",
    "S": "5",
    "T": "7"
}

function leetspeak(phrase){
    let newString = []
    let upperPhrase = phrase.toUpperCase()
    for(let x in upperPhrase){
        
        if(upperPhrase[x] in cipher){
            newString.push(cipher[upperPhrase[x]])
        }else{
            newString.push(upperPhrase[x])
        }
        
    }
    let z = newString.join("")
    console.log(z);
    
}


leetspeak("greetings world hi")










