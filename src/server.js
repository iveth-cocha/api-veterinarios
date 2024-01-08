//------------------ESmodules-------------------------
//-*-*-*-**-importat expres-*-*-**-*-*-*
import express from 'express'

import dotenv from 'dotenv'
import cors from 'cors';



//-*-*-*-*-*-*crear una instancia de expres
const app = express()
dotenv.config()

// *-*-*-*-*-Configuraciones 
app.set('port',process.env.port || 3000)
app.use(cors())

// *-*-*-*-Middlewares 
app.use(express.json())


// *-*-*-*-Variables globales


// *-*-*-*-Rutas 
app.get('/',(req,res)=>{
    res.send("Server on")
})

//-*-*-*-*-*-exportar la variable
export default  app