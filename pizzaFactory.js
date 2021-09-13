module.exports = function PizzaFactory(){
    function totals() {
        let smallTotal = getTotal('small').toFixed(2);
        let mediumTotal = getTotal('medium').toFixed(2);
        let largeTotal = getTotal('large').toFixed(2);

        return {
            smallTotal,
            mediumTotal,
            largeTotal,
            grandTotal : grandTotal() 
        }
    }
}