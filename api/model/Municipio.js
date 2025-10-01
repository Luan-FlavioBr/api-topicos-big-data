import mongoose from "mongoose";

const regiaoSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    sigla: { type: String, required: true, trim: true },
    nome: { type: String, required: true, trim: true }
}, { _id: false });

const ufSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    sigla: { type: String, required: true, trim: true },
    nome: { type: String, required: true, trim: true },
    regiao: regiaoSchema
}, { _id: false });

const mesorregiaoSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    nome: { type: String, required: true, trim: true },
    UF: ufSchema
}, { _id: false });

const microrregiaoSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    nome: { type: String, required: true, trim: true },
    mesorregiao: mesorregiaoSchema
}, { _id: false });

const regiaoIntermediariaSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    nome: { type: String, required: true, trim: true },
    UF: ufSchema
}, { _id: false });

const regiaoImediataSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    nome: { type: String, required: true, trim: true },
    'regiao-intermediaria': regiaoIntermediariaSchema
}, { _id: false });

const municipioSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    nome: { type: String, required: true, trim: true },
    microrregiao: microrregiaoSchema,
    'regiao-imediata': regiaoImediataSchema
}, { _id: false });

const localidadeSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    nome: {
        type: String,
        required: true,
        trim: true
    },
    municipio: {
        type: municipioSchema,
        required: true
    }
}, {
    timestamps: true
});

const Localidade = mongoose.model('Localidade', localidadeSchema, 'municipios');

export default Localidade;