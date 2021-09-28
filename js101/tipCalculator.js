// bill = float(input("What is the total: "))

// service_quality = (input("What kind of tip would you like to leave, good, fair, or bad?: "))

// number_of_people = int(input("How many are dining?"))

// if service_quality == "good":
//     tip = bill * .20
// elif service_quality == "fair":
//     tip = bill * .15
// elif service_quality == "bad":
//     tip = bill * .10
// else:
//     print("Enter the bill please")

// total = bill + tip

// print("Tip: $%.2f" % tip)
// print("Total: $%.2f" % total)
// print(f"Per person: ${total / number_of_people}")

function tipAmount(bill, service){
    if(service == "good"){
        console.log(bill * .2);
    }
    else if(service == "fair"){
        console.log(bill * .15);
    }
    else if(service == "bad"){
        console.log(bill * .1);
    }
    else{
        console.log("Please enter the bill and the service quality: good, fair, or bad");
    }
}
function totalAmount(bill, service){
    if(service === "good"){
        console.log(bill * .2 + bill);
    }
    else if(service == "fair"){
        console.log(bill * .15 + bill);
    }
    else if(service == "bad"){
        console.log(bill * .1 + bill);
    }
    else{
        console.log("Please enter the bill and the service quality: good, fair, or bad");
    }
}

function splitAmount(bill, service, groupSize){
    if(service === "good"){
        console.log(bill * .2 + bill / groupSize);
    }
    else if(service == "fair"){
        console.log(bill * .15 + bill);
    }
    else if(service == "bad"){
        console.log(bill * .1 + bill);
    }
    else{
        console.log("Please enter the bill and the service quality: good, fair, or bad");
    }
}
tipAmount(100, "good")

totalAmount(100, "good")

splitAmount(100, "good", 5)










