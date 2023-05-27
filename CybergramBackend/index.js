const express = require ('express')
require('dotenv').config()
const {dbConnection} =  require('./database/config')

const app = express();
dbConnection();
app.use(express.static('public'))
app.use(express.json())

app.use('/api/user' , require('./routes/user'))
app.use('/api/publicacion' , require('./routes/publicacion'))
app.use('/api/autorPublicacion' , require('./routes/autorPublicacion'))


app.listen(process.env.PORT, ()  =>{
    console.log('servidor corriendo en puerto', process.env.PORT)
})