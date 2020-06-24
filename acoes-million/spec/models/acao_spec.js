const Acao = require("../../app/models/acao.js");

describe('Modelo de Ação', () => {

  beforeEach(async ()=>{
    await Acao.deleteMany()
  });
// teste Find
  it('Deve retornar o modelo de ação', async () => {
    const acao = await Acao.find({})
    expect(acao != undefined).toBe(true)

  });
// teste Create
  it('Deve incluir uma ação', async () => {
    let nome = `nomeTeste ${new Date().getTime()}`;
    const acao = await Acao.create({
      nome_empresa: nome,
      cod_empresa :'TEST123',
      taxa_juros: '6',
      tipo: 'ON'   
    });
    expect(acao).not.toBe(undefined)
  });

  it('Não deve incluir um cod_empresa repetido', async() => {
    let nome = `nomeTeste2 ${new Date().getTime()}`;
    let erro=''
    const acao = await Acao.create({
      nome_empresa: nome,
      cod_empresa :'TEST321',
      taxa_juros: '5',
      tipo: 'ON'   
    }); 
    try{
      const acao2 = await Acao.create({
        nome_empresa: nome,
        cod_empresa :'TEST321',
        taxa_juros: '5',
        tipo: 'ON' 
      });  
    }
    catch(err){
      erro = err
    }
    expect(erro).not.toBe(undefined)
  });

  it('Não deve incluir uma empresa sem nome', async () => {
    let nome = null;
    let erro = ''
    try {
      const acao = await Acao.create({
        nome_empresa: nome,
        cod_empresa :'TEST456',
        taxa_juros: '3',
        tipo: 'PN'   
      }); 
    } catch (error) {
      erro = error
    }
    expect(erro).not.toBe(undefined)
  });

//teste update
  it('Não deve alterar um registro', async() => {
    let nome = `teste ${new Date().getTime()}`;
    const acao = await Acao.create({
      nome_empresa: nome,
      cod_empresa :'TEST456',
      taxa_juros: '3',
      tipo: 'PN'   
    }); 
    try{
      const acao = await Acao.findByIdAndUpdate( 'Band',{
        nome_empresa: nome,
        cod_empresa :'TEST456',
        taxa_juros: '3',
        tipo: 'PN' 
      });  
    }
    catch(error){
      err = error
    }
    expect(err).toBeDefined();
  });
  
  //teste deletar um registro
  it('Não deve deletar um registro', async() => {
    let nome = `testeDelete ${new Date().getTime()}`;
    const acao = await Acao.create({
      nome_empresa: nome,
      cod_empresa :'BCD123',
      taxa_juros: '3',
      tipo: 'PN'   
    }); 
    try{
      const acao = await Acao.findByIdAndDelete( 'testeDelete',{
        nome_empresa: nome,
        cod_empresa :'BCD123',
        taxa_juros: '3',
        tipo: 'PN' 
      });  
    }
    catch(error){
      err = error
    }
    expect(err).toBeDefined();
  });
});  