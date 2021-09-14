module.exports = function PizzaFactory(){
  
    let smallPizza =0;
    let mediumPizza = 0;
    let largePizza = 0;
    let pizzaTotal = 0;

    
    function addPizza(quntity,size) {
            
    }

    function removePizza(){

    }
    
    function totalUpdate(){
               
    }

    function pizzaSum(){
       return smallPizzaPrice + mediumPizzaPrice + largePizzaPrice       
    
    }
    
    return{
        addPizza,
        removePizza,
        totalUpdate,
        pizzaSum,
    }
}