import Localidade from "../model/Municipio.js"

// Service
// Nos apoiar nas operações do CRUD no MongoDB


export async function createAluno(data) {
    // const aluno = Aluno.insertOne(data)
    const aluno = Localidade.insertOne(data)
    return aluno;

}

export async function updateAluno(id, data) {
    const aluno = Localidade.findByIdAndUpdate(id, data)
    return aluno;
}
export async function deleteAluno(id) {
    const aluno = Localidade.findByIdAndDelete(id)
    return aluno
}

export async function findAluno(data) {
    const aluno = Localidade.findOne(data)
    return aluno
}

export async function findAllAluno(uf) {
    console.log(uf);
    const aluno = await Localidade.find({"municipio.microrregiao.mesorregiao.UF.sigla": uf})
    return aluno;
}