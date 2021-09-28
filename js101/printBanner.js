
function printBanner(x){
    let str = "*";
    let count = "";
    let strLength = x.length;

    for(let i = 0; i < strLength; i++){
    count += str
    } 

    console.log(count + "**");
    console.log(`${str}${x}${str}`);  
    console.log(count + "**");  
}


printBanner("Big Test Banner")




