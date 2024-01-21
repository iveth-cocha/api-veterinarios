import { sendMailToPaciente } from "../config/nodemailer.js"
import Paciente from "../models/Paciente.js"


//metodo login
const loginPaciente = (req,res)=>{
    res.send("Login del paciente")
}
//metodo ver perfil pacien te
const perfilPaciente = (req,res)=>{
    res.send("Perfil del paciente")
}
//metodo listar pacientes
const listarPacientes = async (req,res)=>{
    const pacientes = await Paciente.find({estado:true}).where('veterinario').equals(req.veterinarioBDD).select("-salida -createdAt -updatedAt -__v").populate('veterinario','_id nombre apellido')
    //select(campos a omitir), no mostrar en la consulta
    //populate(modelo,..campos..)
    res.status(200).json(pacientes)
}
//metodo detalle paciente
const detallePaciente = (req,res)=>{
    res.send("Detalle del paciente")
}
//metodo registrar oaciente
const registrarPaciente = async(req,res)=>{
    const {email} = req.body
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const verificarEmailBDD = await Paciente.findOne({email})
    if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
    const nuevoPaciente = new Paciente(req.body)
    const password = Math.random().toString(36).slice(2)
    nuevoPaciente.password = await nuevoPaciente.encrypPassword("vet"+password)
    await sendMailToPaciente(email,"vet"+password)
    nuevoPaciente.veterinario=req.veterinarioBDD._id
    await nuevoPaciente.save()
    res.status(200).json({msg:"Registro exitoso del paciente y correo enviado"})
}
//metodo actualizar paciente
const actualizarPaciente = (req,res)=>{
    res.send("Actualizar paciente")
}
//metodo eliminar paciente
const eliminarPaciente = (req,res)=>{
    res.send("Eliminar paciente")
}

export {
		loginPaciente,
		perfilPaciente, 
        listarPacientes,
        detallePaciente,
        registrarPaciente,
        actualizarPaciente,
        eliminarPaciente
}