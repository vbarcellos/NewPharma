Quickstart
    - Inicia o container do docker com o banco de dados
        - docker start newpharmadb
    - Inicia o app (porta 3001)
        - npm run dev

Passo-a-Passo como foi construido o app
    - npm init -y
    - Instalei o express como dependencia
        - npm install express
    - Criei o index.js usando o express e vou usar a porta 3001
    - Instalei o nodemon como dependencia de desenvolvimento
        - npm install -D nodemon
    - Criei um script "dev" para executar "nodemon index.js"
        - npm run dev
    

Vou usar o docker, já tenho instalado.
    Baxei uma imagem do mongo
        - docker pull mongo
    Criei um container para meu BD, com o nome "newpharmadb" e a imagem do mongo, redirecionei a porta 27017 do meu pc para a porta 27017 do container
        - docker run --name newpharmadb -p 27017:27017 -d mongo
    Para GUI do banco de dados usarei o Robo3T, e para conectar ao meu BD que está dentro de um container eu preciso do IP do container com o comando abaixo:
        - docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' newpharmadb
    Agora posso conectar ao ipRetornado:27017 com o Robo3T
    Para enviar requisições usarei o Postman

Vou usar mongoose
    Instalar mongoose como dependencia de producao
        - npm install mongoose
    Inclui o mongoose no index.js e escrevi um connect para iniciar o DB

Minha estrutura basica de organização de pastas será a seguinte:
    Schema: definição do schema
    Model: importa o schema e exporta um modelo deste
    Routes: Define o que deve ser feito ao receber uma requisição
    API: contém as funções de CRUD.