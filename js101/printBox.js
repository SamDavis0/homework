// BOX

function box(width, height){

    for(let x =1; x<width+1; x++){
        for(let y =1; y<height+1; y++){
            if(x == 1 || x == width || y == 1 || y == height){
            process.stdout.write("*");
            }
            else process.stdout.write(" ");
            
        }       
    console.log(" ");
    }
}

box(10, 10)