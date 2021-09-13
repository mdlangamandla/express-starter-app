module.exports = function PizzaFactory(){

    let largePizza = 87.99;
    let mediumPizza = 58.99;
    let smallPizza = 31.99;

    let smallPizzaTotal =0;
    let mediumPizzaTotal = 0;
    let largePizzaTotal = 0;
    let pizzaTotal = 0;


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