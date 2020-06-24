const mongoose = require('../../db/conexao');

const Acao = mongoose.model('acoes',{
    nome_empresa : {type: String, required: true, unique: true},
    cod_empresa : {type: String, required: true, unique: true, uppercase: true},
    taxa_juros : {type: Number, required: true},
    tipo: {
        type: String,
        uppercase: true,
        enum: ['ON', 'PN'],
        required: true,
        message: 'Investidor deve escolher qual tipo de ação ordinaria/preferencial (ON/PN)'
    }    
});

module.exports = Acao;