import * as MunicipioService from "../services/MunicipioService.js"

export async function listarMunicipiosPorUf(req, res) {
    try {
        const uf = req.params.uf
        const municipios = await MunicipioService.findMunicipiosPorUF(uf?.toUpperCase())
        if (municipios && municipios.length > 0) {
            res.status(200).json(municipios)
        } else {
            municipios && municipios.length === 0 ? res.status(404).json({error: `Não foi encontrado municípios para essa UF: ${uf}`}) : res.status(400).json([]);
        }

    } catch (error) {
        res.status(500).json({
            error: "Ocorreu um erro em nosso sistema, tente novamente mais tarde!"
        })
        console.log(error);
    }
}

export async function listarDadosCidade(req, res) {
    try {
        console.log(req.params.uf)
        const cidade = await MunicipioService.findCidade(req.params.cidade)
        if (cidade) {
            res.status(200).json(cidade)
        } else {
            res.status(404).json({error: `Não foi encontrado a cidade/municipio: ${req.params.cidade}`})
        }

    } catch (error) {
        res.status(500).json({
            error: "Ocorreu um erro em nosso sistema, tente novamente mais tarde!"
        })
        console.log(error);
    }
}
