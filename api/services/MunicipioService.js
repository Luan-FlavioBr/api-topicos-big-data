import Localidade from "../model/Municipio.js"

export async function findMunicipiosPorUF(uf) {
    console.log(uf);
    const municipios = await Localidade.find({"municipio.microrregiao.mesorregiao.UF.sigla": uf})
    return municipios;
}

export async function findCidade(cidade) {
    console.log(cidade);
    const cidades = await Localidade.findOne({"municipio.nome": cidade})
    return cidades?.municipio;
}