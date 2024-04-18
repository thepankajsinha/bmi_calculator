function calculateBMI(){

    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = weight / (height/100)**2

    let resultMsg = "Your BMI is " + bmi.toFixed(2)

    if(bmi < 18.5)
    {
        resultMsg = resultMsg + " ( Under weight )"
    }

    else if(bmi >= 18.5 && bmi < 25)
    {
        resultMsg = resultMsg + " ( Normal )"
    }

    else if(bmi >= 25 && bmi < 30)
    {
        resultMsg = resultMsg + " ( Over weight )"
    }

    
    else if (bmi >= 30)
    {
        resultMsg = resultMsg + " ( Obes )"
    }

    else{
        resultMsg = "Enter valid height & weight!"
    }

    document.getElementById('result').innerHTML = resultMsg;
}
