const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/api/:id', function(req, res) {
    // res.send('id: ' + req.params.id);
    let val=req.params.id;
    
        let ans= new Date(parseInt(val)).toUTCString();
        res.json({'unix':val,'utc':ans})
      });


app.get('/api', function(req, res) {
    const today=new Date();
    
   
        let deb=parseInt((new Date(today).getTime() ).toFixed(0))
        let ans= new Date(parseInt(deb)).toUTCString();
        res.json({'unix':deb,'utc':ans})
      });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
