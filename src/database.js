//importar
import mongoose from 'mongoose'

//permitir que solo los campos definidos en el schema se guarden en la BDD
mongoose.set('strictQuery', true)

//crear una función llamada conection
const connection = async()=>{
    try {
        //establecer la conexion con la bdd
        const {connection} = await mongoose.connect(process.env.MONGODB_URI)
        //presentar la conexion en consola
        console.log(`Database is connected on ${connection.host} - ${connection.port}`)
    } catch (error) {
        //capturar error de conexion
        console.log(error);
    }
}

//-*-*-*-*exportar la funcion
export default  connection