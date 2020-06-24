const Acao = require('../models/acao');
const TOKEN = "123456";

const AcoesController = {
  index: async(req,res, next)=>{
      if(req.headers.token === TOKEN){
          try{ 
              const acoes = await Acao.find({})
              return res.status(200).send(acoes)
          }
          catch(err){
              return res.status(401).send(err)
          }
          
      }
      return res.status(401).json({error: "Acesso negado API açoes-Token header inválido"})    
  },
  create: async (req, res, next) => {
      if(req.headers.token === TOKEN){
        const {nome_empresa,cod_empresa,taxa_juros,tipo} = req.body
        try {
          const acao = await Acao.create({nome_empresa,cod_empresa,taxa_juros,tipo});
          return res.status(201).send({message:`Ação de ${acao.nome_empresa} de código ${acao.cod_empresa} criada com sucesso.`})
        } catch (error) {
          return res.status(401).send(error)
        }
      }
      return res.status(401).json({error: "Acesso não autorizado"})
    },

  change: async(req, res, next) => {
    if(req.headers.token === TOKEN){
      try{
        
        await Acao.findOneAndUpdate({_id: req.params.acoes_id}, { nome_empresa: req.body.nome_empresa, cod_empresa: req.body.cod_empresa, taxa_juros: req.body.taxa_juros, tipo: req.body.tipo})
        return res.status(204).send({message: `Alterado com o id ${req.params.acoes_id}`})
      }
      catch(err){
        console.log(err)
        return res.status(401).send(`Erro: ${err}`)
      }
    }
    return res.status(401).json({error: "Acesso não autorizado"})
  },
  delete: async(req, res, next) => {
    if(req.headers.token === TOKEN){
      try{
        await Acao.findByIdAndDelete(req.params.acoes_id)
        return res.status(204).send({});
      }
      catch(err){
       return res.status(401).send(err)
      }
    }
    return res.status(401).json({error: "Acesso não autorizado"})
  }
}

module.exports = AcoesController;