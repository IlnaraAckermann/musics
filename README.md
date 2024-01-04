# 🎧 My Musics - Spa React 

## 🔍 Visão Geral 
Este é um projeto de página única (SPA) desenvolvido em React, utilizando Axios para integração com uma API em Kotlin. A página exibe dados provenientes da API e possui uma funcionalidade para sincronizar dados por meio do envio de uma URL contendo um JSON. Esse botão se connecta a um endpoint na API responsável por persistir os dados da URL no banco de dados PostgreSQL.

## ⚙️ Tecnologias Utilizadas
React
Axios
React Router Dom
Docker

## 🛠️Funcionalidades
Integração com API: Utiliza o Axios para realizar requisições à API em Kotlin.
Exibição de Dados: Mapeia os dados da API na interface do usuário.
Sincronização de Dados: Botão para enviar uma URL contendo um JSON para o endpoint responsável por capturar o JSON e persistir os dados no PostgreSQL.


## Como rodar ⚡
Clone o repositório e instale as dependências:
```
cd music
npm install
cp .env.example .env # ajuste os valores
npm run dev`
```

### Docker 🐋
Execute os comandos de build e run:
```
docker build -t music-app .
docker run -it --rm -p 3000:3000 music-app
```

## 🚪BackEnd
Para o BackEnd Acesse:

https://github.com/IlnaraAckermann/api-rest-music