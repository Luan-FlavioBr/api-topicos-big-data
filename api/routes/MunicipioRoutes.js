import { Router } from "express";
import {
    listarMunicipiosPorUf,
    listarDadosCidade

} from "../controllers/MunicipioController.js"

const router = Router()

router.get('/cidades/:cidade',listarDadosCidade)
router.get('/estados/:uf/cidades',listarMunicipiosPorUf)


export default router;