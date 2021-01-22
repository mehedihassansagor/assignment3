//kilometer to meter
function kilometerToMeter( kilometer ){
    //we know 1 km = 1000 m
var  meter = kilometer*1000;
if( kilometer < 0 ){
   var negativeMeter = "distance cannot be negative"
    return negativeMeter;
}
else
 return meter;
}
var finalMeterIs = kilometerToMeter( 6);
console.log(finalMeterIs);

//budget calculator
function budgetCalculator(watch, phone,laptop ){
    var totalPrice = 0;

    if(watch * phone * laptop < 0){ //negative value here
        var forNegative = "element number cant be negative";
        return forNegative;
    }
    else
    var watchPrice = watch*50;
    
    var phonePrice = phone*100;
    
    var laptopPrice = laptop*500;

    var totalPrice = watchPrice +  phonePrice + laptopPrice;
    return totalPrice;

}
  var finalPrice = budgetCalculator(2,2,2);
  console.log(finalPrice);


  //hotel cost
function hotelCost( day ){ 
    totalCost = 0;
    
    if( day < 0){
        var forNegativeDay = "day cant be negative"; //negative value here
        return forNegativeDay;
    }
    if(day <= 10){
       var first10 = day*100;
       var totalCost = totalCost+first10;
       
    }
    
    else if(day <= 20){
        var firstPart = 10*100;
        var rememberDay = day - 10;
        var second10 = rememberDay*80;
        var  totalCost = firstPart + second10;
       
    
    }
    else{
        var firstPart = 10*100;
        var secondPart = 10*80;
        var rememberDay = day - 20;
        var thirdPart = rememberDay*50;
        var totalCost = firstPart + secondPart + thirdPart;
    }
            return totalCost;
    }
    
    var finalRent = hotelCost(40);
    console.log(finalRent);


    //large name
function megaFriend (nameList){
    var nameLarge  =  0;
    
    
    for (var i = 0;  i < nameList.length; i++){
      if (nameList[i].length > nameLarge) {
        var nameLarge = nameList[i].length;
        var largest = nameList [i];
      }
       
    }
    return largest;
    }
    var largeName = megaFriend(["mehedi", "hassan", "nur islam","sobi run nesa","kajol rekha"]);
      console.log(largeName );