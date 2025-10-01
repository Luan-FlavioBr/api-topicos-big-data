import { Router } from "express";
import {
    create,
    findOne,
    list,
    remove,
    update
} from "../controllers/MunicipioController.js"

const router = Router()

router.post('/aluno',create)
router.put('/aluno',update)
router.get('/aluno',findOne)
router.delete('/aluno',remove)
router.get('/estados/:uf/cidades',list)


export default router;