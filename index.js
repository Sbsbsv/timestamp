const express = require('express');
const app = express();
const port = 3000;

 

function unixToUtc(unixTimestamp) {
    return new Date(unixTimestamp*1).toUTCString();
  }
app.get('/api/:id', function(req, res) {
   let val=req.params.id;
   console.log(val)
   let second=new Date(val)
   console.log(second)
   if(second!='Invalid Date')
   {
    let unis=parseInt((new Date(val).getTime()))

    let satis=unixToUtc(unis)
    if(satis!='Invalid Date'){
        res.json({"unix":unis,"utc":satis})
    }else{
        res.json({'error':'Invalid Date'})
    }
   }
   else{
    
    let satis=unixToUtc(val)
    console.log(satis)
    if(satis!='Invalid Date'){
        res.json({"unix":val,"utc":satis})
    }else{
        res.json({'error':'Invalid Date'})
    }

   }

 
});
app.get('/api', (req, res) => {
    let val=new Date();
    let unis=parseInt((new Date(val).getTime()))

    let satis=unixToUtc(unis)
    if(satis!='Invalid Date'){
        res.json({"unix":unis,"utc":satis})
    }else{
        res.json({'error':'Invalid Date'})
    }


  });



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
