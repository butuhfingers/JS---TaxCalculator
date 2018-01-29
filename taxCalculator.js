function TaxCalculator(grossPayment, taxRate) {
        var myTax = function () {
            return grossPayment * taxRate;
        };
        var homePay = function(){
            return grossPayment - myTax();
        };

        return {
            calculate: {
                grossPayment: grossPayment,
                taxHeld: myTax(),
                homePay: homePay()
            },

            toString: function(){
                    return "Gross payment: " + grossPayment +
                        " Tax withheld: " + myTax() +
                        " Take home pay: " + homePay()
                }
        }
}

var tax = new TaxCalculator(10, .20);
var tax2 = new TaxCalculator(12, .50);
console.log(tax.toString());
console.log(tax2.toString());