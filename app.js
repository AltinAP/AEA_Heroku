const express = require('express');
const app = express();
app.set('port', 3001);
const path = require('path');


app.use(express.static(__dirname + '/public'));

app.use(express.static(__dirname + '/js'));

app.get('/homepage',(req,res)=>{    
    res.sendFile(path.join(__dirname+'/homePage.html'));
})

app.get('/endpage',(req,res)=>{    
    res.sendFile(path.join(__dirname+'/endPageTest.html'));
})

app.get('/',(req,res)=>{    
    res.sendFile(path.join(__dirname+'/landingpage.html'));
})

app.get('/notfound',(req,res)=>{    
    res.sendFile(path.join(__dirname+'/pageNotFound.html'));
})

app.use((req, res) => {
    res.type('text/html');
    res.status(404);
    res.sendFile(path.join(__dirname+'/pageNotFound.html'));
    }
);

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'));
/* app.listen(app.get('port'), 
    ()=>console.log( '[server] http://localhost:' + app.get('port')));*/



