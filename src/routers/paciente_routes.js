import {Router} from 'express'
import verificarAutenticacion from "../middlewares/autenticacion.js";

const router = Router()
import {
    actualizarPaciente,
    detallePaciente,
    eliminarPaciente,
    listarPacientes,
    registrarPaciente,
    loginPaciente,
    perfilPaciente 
} from "../controllers/paciente_controller.js";


//login paciente--- dueño
router.post('/paciente/login',loginPaciente)
//perfil
router.get('/paciente/perfil',verificarAutenticacion,perfilPaciente)
//listar todos los pacientes
router.get("/pacientes",verificarAutenticacion,listarPacientes);
//ver el detalle de un paciente en particular
router.get("/paciente/:id",verificarAutenticacion, detallePaciente);
//registrar un paciente
router.post("/paciente/registro", verificarAutenticacion,registrarPaciente);
//actualizar info paciente
router.put("/paciente/actualizar/:id", verificarAutenticacion,actualizarPaciente);
//eliminar páciente
router.delete("/paciente/eliminar/:id", verificarAutenticacion,eliminarPaciente);


export default router