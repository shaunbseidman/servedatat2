const express = require('express')
const cors = require('cors')
const app = express ()
const port = process.env.PORT|| 3000
const data = require('./content.json')
app.use(cors())

function getId(data, id){
    for (let i = 0; i < data.length; i++){
        if (data[i].id == id){
            return data[i]
        }
    }
    return null
}

app.get('/', function(req,res) {
  res.json({data})
})

app.get("/:id", function (req, res) {
    var record = getId(data, req.params.id);
    if (!record){
        res.status(404).json({
            error: {message: "No record found!"}
        });
    } else {
        res.json({data: record})
    }
});

app.listen(port, function() {
  console.log('Server started on port ' + port)
});
