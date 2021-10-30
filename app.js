const express = require('express');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
// app.use(express.static('public'));
// app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render('index',{title:'Home'});
})

app.get('/about',(req,res)=>{
    res.render('about',{title:'About'});
})

app.get('/contact',(req,res)=>{
    res.render('contact',{title:'Contact'});
})

app.use((req, res) => {
    res.status(404).render('404',{title:'Page not found'});
})

app.listen(PORT,()=>{
    console.log("Listening...");
});
