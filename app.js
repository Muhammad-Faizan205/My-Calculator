var display = document.getElementById('display');
var currentValue = '';


function values(value)
{
    currentValue += value;
    display.value = currentValue;
}


function delet()
{
    currentValue = currentValue.slice(0,-1);
    display.value = currentValue
}


function ClearAll()
{
    currentValue = '';
    display.value = currentValue;
}


function result()
{
    try{
     currentValue = eval(currentValue)
     display.value = currentValue;
    }catch{
       display.value = "Error"
    }

}
