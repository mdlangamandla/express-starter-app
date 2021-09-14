const express = require('express');
const exphbs  = require('express-handlebars');
const session = require('express-session');
const pizzaFactory = require('./pizzaCart');
const app = express();
const PORT =  process.env.PORT || 3017;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

//instance for pizza factory function
const PizzaInstance = pizzaFactory();

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//configure http-session midlleware
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

// let counter = 0;

app.get('/', function(req, res) {
	res.render('index', {
		counter : req.session.counter
	});
});

app.get('/login', function(req,res){
	res.render('login');
	
})

app.post('/login', function(req,res){
	// res.render('login');

	if (req.body.username){

	}
	res.redirect('/');
	
})

app.post('/count', function(req, res) {
	
	if(!req.session.counter) {
		req.session.counter = 0;
	}
	req.session.counter++;
	res.redirect('/')
});

app.post('/reset', function(req, res) {
		
	req.session.counter = 0;		
	res.redirect('/')
});

app.post('/logout', function(req, res) {
		
	req.session.counter = 0;		
	res.redirect('/login')
});


// app.get('/', function(req,res) {
// 	res.render('index', {
// 		small:pizzaCart.getSmallPizza(),
// 		medium:pizzaCart.getMediumPizza(),
// 		large:pizzaCart.getLargePizza(),
// 		total:pizzaCart.getTotal(),
// 		smallPrice:pizzaCart.getPizzaPriceSmall(),
// 		mediumPrice:pizzaCart.getPizzaPriceMedium(),
// 		largePrice:pizzaCart.getPizzaPriceLarge(),
// 	});
// });

// app.get("/addSmall",(req,res)=>{
// 	pizzaFactory.addSmallPizza();
// 	res.redirect("/")
	
// })

// app.get("/addMedium",(req,res)=>{
// 	pizzaFactory.addMediumPizza();
// 	res.redirect("/")

// })

// app.get("/addLarge",(req,res)=>{
// 	pizzaFactory.addLargePizza();
// 	res.redirect("/")
// })


// app.get("/subSmall",(req,res)=>{
// 	pizzaFactory.subSmallPizza()
// 	res.redirect("/")

// })

// app.get("/subMedium",(req,res)=>{
// 	pizzaFactory.subMediumPizza()
// 	res.redirect("/")

// })

// app.get("/subLarge",(req,res)=>{
// 	pizzaFactory.subLargePizza()
// 	res.redirect("/")

// })


// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});
