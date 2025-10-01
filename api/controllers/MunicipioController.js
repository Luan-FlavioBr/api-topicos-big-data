import * as AlunoService from "../services/MunicipioService.js"

export async function create(req, res) {
    try {
        const aluno = await AlunoService.createAluno(req.body)
        res.status(201).json(aluno)
        // if (aluno) {
        //     res.status(201).json(aluno)
        // } else {
        //     res.status(401).json({
        //         error: "Falha ao cadastrar o aluno"
        //     })
        // }
    } catch (error) {

    }
}

export async function list(req, res) {
    try {
        console.log(req.params.uf)
        const aluno = await AlunoService.findAllAluno(req.params.uf)
        if (aluno) {
            res.status(201).json(aluno)
        } else {
            res.status(401).json({
                error: "Falha ao localizar os alunos"
            })
        }

    } catch (error) {

    }
}


export async function remove(req, res) {
    try {
        const aluno = await AlunoService.deleteAluno(req.params.id)
        if (aluno) {
            res.status(201).json(aluno)
        } else {
            res.status(401).json({
                error: 'Falha ao remover o aluno'
            })
        }
    } catch (error) {

    }

}


export async function update(req, res) {
    try {
        const aluno = await AlunoService.updateAluno(req.params.id, req.body)
        if (aluno) {
            res.status(201).json(aluno)
        } else {
            res.status(401).json({
                error: 'Falha ao atualizar o aluno'
            })
        }
    } catch (error) {

    }
}


export async function findOne(req, res) {
    try {
        const aluno = await AlunoService.findAluno(req.params.id)
        if (aluno) {
            res.status(201).json(aluno)
        } else {
            res.status(401).json({
                error: 'Falha ao localizar o aluno'
            })
        }
    } catch (error) {

    }
}