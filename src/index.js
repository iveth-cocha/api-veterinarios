//importo la variaple app
import app from './server.js'
import connection from './database.js'; 

connection()

//incio el servidor en le puerto 300 
app.listen(app.get('port'),()=>{
    console.log(`Server ok on http://localhost:${app.get('port')}`);
})



