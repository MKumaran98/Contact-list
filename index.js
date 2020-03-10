const express=require('express');
const port =8000;
const path=require('path');

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());
app.use(express.static('assets'));

var contactList=[
    {
        name:"Kumaran",
        number:"1234567890"
    }
];

app.get('/',function(req,res){
    res.render('home',{
        contact_list:contactList
    })
});

app.post('/add-contact',function(req,res){
    contactList.push(req.body);
    return res.redirect('back');
});

app.listen(port,function(error){
    if(error){
        console.log(error);
    }
    console.log("Server works")
}
);