# API Ações million

## Padrão de rotas
<pre>
	const AcoesController = require("../app/controllers/acoes_controller");
	
	Rota GET ("/acoes.json", ProdutoController.index);
	Rota POST ("/acoes.json", ProdutoController.create);
	Rota UPDATE ("/acoes/:id.json", ProdutoController.update);
	Rota DELETE ("/acoes/:id.json", ProdutoController.delete);
</pre>

## Estrutura de dados
<pre>
	acoes = {
		nome_empresa: "String",
		codigo_empresa: "String",
		taxa_juros: Number,
		tipo_acao: String (limitado a apenas 2 opções, ON e PN)
	}
</pre>


## Instruções

### Clonar o codigo fonte do projeto que esta no GitHub  
```sh
ubuntu@ubuntu:~$ git clone https://github.com/BrunoSDias/acoes-million.git
Cloning into 'acoes-million'...  
remote: Enumerating objects: 20, done.  
remote: Counting objects: 100% (20/20), done.  
remote: Compressing objects: 100% (12/12), done.  
remote: Total 20 (delta 0), reused 17 (delta 0), pack-reused 0  
Unpacking objects: 100% (20/20), done.  
Checking connectivity... done.  
```
### Entra na pasta do projeto  
```sh
ubuntu@ubuntu:~$ cd acoes-million/  
```  
### Verifica o status do projeto   
```sh
ubuntu@ubuntu:~/acoes-million$ git status  
Your branch is up-to-date with 'origin/master'.  
nada a submeter, diretório de trabalho vazio
```
### Saber qual  BRANCH(ramo) esta!  
```sh
ubuntu@ubuntu:~/acoes-million$ git branch   
* master 
```
### Criar uma nova branch
```sh
ubuntu@ubuntu:~/acoes-million$ git branch nome_branch
```
### Mudar de branch
```sh
ubuntu@ubuntu:~/acoes-million$ git checkout nome_branch
Switched to branch 'dev_bruno'  
  ```
  ### Instalar dependências do projeto
  ```sh
ubuntu@ubuntu: npm install  
```
  ### Startar a aplicação
  Usando o **nodemon** para não precisar ficar restartando o projeto a cada modificação  
  ```sh
ubuntu@ubuntu: npm run dev  
```
### Executar testes
  ```sh
ubuntu@ubuntu: npm test  
```

## Tutoriais para configuração de ambiente

Instalar MongoDB  
-> Windows:  
[https://treehouse.github.io/installation-guides/windows/mongo-windows.html](https://treehouse.github.io/installation-guides/windows/mongo-windows.html)  
-> Ubuntu 16,04
[Install MongoDB on Ubuntu 16.04 LTS - Hevo Blog](https://hevodata.com/blog/install-mongodb-on-ubuntu/)
  
Instalar NodeJs e Instalar NPM  
[https://dicasdejavascript.com.br/instalacao-do-nodejs-e-npm-no-windows-passo-a-passo/](https://dicasdejavascript.com.br/instalacao-do-nodejs-e-npm-no-windows-passo-a-passo/)  
[https://www.devroom.io/2011/10/24/installing-node-js-and-npm-on-ubuntu-debian/](https://www.devroom.io/2011/10/24/installing-node-js-and-npm-on-ubuntu-debian/)  
  
Instalar Express  Generator
  
[https://expressjs.com/pt-br/starter/generator.html](https://expressjs.com/pt-br/starter/generator.html)
  
Instalar GIT  
Windows:  
[https://www.hostinger.com.br/tutoriais/tutorial-do-git-basics-introducao/](https://www.hostinger.com.br/tutoriais/tutorial-do-git-basics-introducao/)  
[https://dicasdeprogramacao.com.br/como-instalar-o-git-no-windows/](https://dicasdeprogramacao.com.br/como-instalar-o-git-no-windows/)  
Ubuntu:  
[https://openwebinars.net/blog/como-instalar-git-en-ubuntu/](https://openwebinars.net/blog/como-instalar-git-en-ubuntu/)

[![](blob:https://web.telegram.org/1ab61052-96a6-4c2f-8847-8f6c55a849c0)](https://hevodata.com/blog/install-mongodb-on-ubuntu/)

Para duvida com comandos e ambiente linux  
[https://www.devmedia.com.br/comandos-importantes-linux/23893](https://www.devmedia.com.br/comandos-importantes-linux/23893)
[https://profissionaislinux.com.br/express/aula-1-ambiente/](https://profissionaislinux.com.br/express/aula-1-ambiente/)
