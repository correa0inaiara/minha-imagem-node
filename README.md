# Minha Imagem Node
Esse projeto foi desenvolvido durante os cursos de Docker do Zero e Docker Compose, durante a semana do evento Fullstack & Fullcycle 2022. 

# Sobre o Projeto
Contém um servidor em Node e Express rodando dentro de uma imagem do node:14.17.0-slim.
Possui dois Dockerfile:
- um deles seria uma versão mais simples, apenas referênciando a imagem do node, o caminho da pasta do projeto dentro do container e um comando para manter o container rodando.
- o outro Dockerfile.prod é uma versão mais desenvolvida que além de fazer o que Dockerfile mais simples faz, também copia o package.json, instala o que tiver lá, copia o restante dos arquivos e ao final roda um comando para executar o servidor.

O servidor, index.js, apenas contém um servidor escutando na porta 3000.

# Docker Hub
[Link da Imagem no Docker Hub](https://hub.docker.com/r/ncorrea001/minha-imagem-node-prod)
