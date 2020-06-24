const supertest = require('supertest');
const Acao = require('../../app/models/acao');
const TOKEN = "123456";
const app = require('../../app.js');
const request = supertest(app);

describe("AcoesController", () =>{
  beforeEach(async() => {
    await Acao.deleteMany({}, async(err, removed) => {
      await Acao.create({
        nome_empresa: "Itausa Investimentos Itau SA",
        cod_empresa: "ITSA3",
        taxa_juros: "3",
        tipo: "ON"
      })

      await Acao.create({
        nome_empresa: "Banco Inter SA",
        cod_empresa: "bidi4",
        taxa_juros: "7",
        tipo: "pn"
      })
    })
  });

  describe("POST /acoes.json - Deve retornar se o controller de Acoes (AcoesController)", () => {
    it('cadastrou uma ação', async(done) => {

      body = {
        nome_empresa: "Petroleo Brasileiro SA Petrobras Preference Shares",
        cod_empresa: "petr4",
        taxa_juros: "8",
        tipo: "pn"
      }

      const response = await request.post('/acoes.json').set('token', TOKEN).send(body)
      expect(response.status).toBe(201)
      done()
    });
  });
  
  describe("GET/acoes.json - Deve retornar uma lista de Acoes ", () => {
    it("deve retornar o status code de 200", async(done) => {
      const response = await request.get(`/acoes.json`).set({ 'token': TOKEN})
      expect(response.status).toBe(200)
      done();
    });

    it("deve retornar dados na API", async(done) => {
       const response = await request.get(`/acoes.json`).set({'token': TOKEN})
        const itens = response.body;
        expect(itens[0].nome_empresa).toBe("Itausa Investimentos Itau SA");
        expect(itens[1].nome_empresa).toBe("Banco Inter SA");
        done()
      })
  });

  describe("PUT/acoes.json - Deve alterar",() =>{
    it('Deve alterar uma Ação',async(done) =>{

      let nomeEmpresa = "Zoom"
      //Cria um registro
      const acao = await Acao.create({
        nome_empresa: nomeEmpresa,
        cod_empresa: "ZM001",
        taxa_juros: "4",
        tipo: "ON"
      });

      //Altera o registro criado anteriormente - cod_empresa e taxa_juros
      const body = {
        nome_empresa :nomeEmpresa,
        cod_empresa : "ZM001-alt",
        taxa_juros:"3",
        tipo:"ON"
      };
      
      const response = await request.put(`/acoes/${acao._id}.json`).set('token', TOKEN).send(body)
      expect(response.status).toBe(204);
      done();
    });
  });

  describe("DELETE/acoes.json -",() =>{
    it('Deve deletar uma ação',async(done) =>{
      let nomeEmpresa = "Youtube";
      //deleta uma ação
      const acao = await Acao.create({
        nome_empresa: nomeEmpresa,
        cod_empresa: "GOGL34",
        taxa_juros: "4",
        tipo: "ON"
     
      });  
       
      const response = await request.delete(`/acoes/${acao._id}.json`).set('token', TOKEN)
      expect(response.status).toBe(204);

      done();
      
    });
  }); 
});