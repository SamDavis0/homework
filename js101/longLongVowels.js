// LONG LONG VOWELS

const cipher = {
    aa: "aaaaa",
    ee: "eeeee",
    ii: "iiiii",
    oo: "ooooo",
    uu: "uuuuu"  
}

function longVowels(phrase){
    let newString = []
    let lowerPhrase = phrase.toLowerCase()
    for(let x in lowerPhrase){
        
        if(lowerPhrase[x] in cipher){
            newString.push(cipher[lowerPhrase[x]])
        }else{
            newString.push(lowerPhrase[x])
        }
        
    }
    let z = newString.join("")
    console.log(z);
    
}


longVowels("good cheese man")


















