
//function to add a number to the "shopping cart" when button is pressed
function buttonCart(selectedButton){
    var myTextObject = document.getElementById("myOutputText");

    if(selectedButton.value === "Add to Cart"){
        //button has been pressed
        myTextObject.innerHTML = "Item added to cart";
        //increment the count
        buttonOneCount += 1;
        var mybuttonObject = document.getElementById("buttonOneCountText");
        mybuttonObject.innerHTML = buttonOneCount;
    }
}
//Reference: Lab 11
//script file to hold the array
//handler functions for associative array data
function populateDropdown(){
    var myPriceList = document.getElementById("myPriceList");
    var option = document.createElement("option");
    myPriceList.add(option);
    for(var service in priceList){
        // Create option for each service in array
        option = document.createElement("option");
        option.value= service;
        option.text= service;
        option.innerHTML = service;
        myPriceList.add(option);
     }
}
//Reference - Lab 11
function getPriceData(){
    var myPriceList =document.getElementById("myPriceList");
    var keyName = myPriceList.options[myPriceList.selectedIndex].text;
    if(keyName in priceList){
        buildPriceInfo(priceList[keyName]);
        }
}
//Reference - Lab 11
function buildPriceInfo(priceInfoArray){

    // get access to sings paragraph and clear
    var element = document.getElementById("pricing");
    element.innerHTML="";

    // Iterate through priceInfoArray
    for(var pricing in priceInfoArray){

        var para;
        var node;

    	for(var key in priceInfoArray[pricing]){

                para = document.createElement("p");
                node = document.createTextNode(key);
                para.appendChild(node);
                para.id = key;
                element.appendChild(para);

            for(var item in priceInfoArray[pricing][key]){

                    para = document.createElement("p");
                    node = document.createTextNode(item + " : " + priceInfoArray[pricing][key][item]);
                    para.appendChild(node);
                    para.id = item;
                    element = document.getElementById("pricing");
                    element.appendChild(para);
            }
        }
    }
}
