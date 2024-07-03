function calculate(){

    const totalAmount = document.getElementById("total-amount");
    const principleInput = document.getElementById("principle");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");


    let principle = Number (principleInput.value);
    let rate = Number (rateInput.value / 100);
    let years = Number (yearsInput.value);



    if(principle < 0 || isNaN(principle)){
        principle = 0;
        principleInput.value = 0;
    }
    if(rate < 0 || isNaN(rate)){
        rate = 0;
        rateInput.value = 0;
    }
    if(years < 0 || isNaN(years)){
        years = 0;
        yearsInput.value = 0;
    }



    const result = principle * Math.pow((1 + rate / 1), 1 * years)

    totalAmount.textContent = result.toLocaleString(undefined, 
                                                    {style: "currency",
                                                     currency: "USD"    
                                                    });
}