# Teste de Desenvolvimento Mindtech: Sistema de Inscrição em Newsletter

Este projeto implementa um sistema de inscrição em newsletter Full-Stack, seguindo fielmente o design proposto e as regras de negócio da avaliação.

## Estrutura do Projeto

O projeto é dividido em duas partes, integradas em uma única solução do Visual Studio:

1.  `ReactApp1.Server` (Backend): API RESTful desenvolvida em C# (.NET Core) para gerenciamento de dados.
2.  `ReactApp1.Client` (Frontend): Interface de usuário desenvolvida em React (Vite) e CSS puro.

---

## Requisitos de Execução

Para rodar o projeto, você precisará ter instalado:

* SDK do .NET 8 (ou versão mais recente, incluído no Visual Studio).
* Node.js e npm (Necessário para o Front-end React/Vite).

## Como Rodar o Projeto (Passo a Passo)

### 1. Configuração Inicial

1.  Clone o Repositório: Baixe o código do GitHub.
2.  Abra a Solução: Abra o arquivo de solução (ReactApp1.sln) no Visual Studio.

### 2. Configurar e Iniciar o Backend (C# API)

O Backend é responsável pela persistência de dados (usando SQLite) e pela lógica de negócio.

1.  Abra o Terminal no Backend: No Visual Studio, clique com o botão direito no projeto `ReactApp1.Server` e selecione Abrir em Terminal.

2.  Instalar Ferramentas do EF Core: Instale a ferramenta global para gerenciar o banco de dados (se necessário):
    ```bash
    dotnet tool install --global dotnet-ef
    ```

3.  Aplicar Migrações (Criar/Atualizar o Banco de Dados):

    dotnet ef database update


4.  Iniciar a API:
    É importante que o Back-end esteja rodando na porta correta (5158) para que o Front-end possa se conectar.
    
    dotnet run
    
    * Mantenha este terminal aberto (escutando na porta HTTP 5158).

### 3. Configurar e Iniciar o Frontend (React)

O Front-end utiliza o Proxy do Vite para se comunicar com a API C# (porta 5158), resolvendo automaticamente os problemas de CORS.

1.  Abra o Terminal no Frontend: No Visual Studio, clique com o botão direito no projeto `ReactApp1.Client` e selecione Abrir em Terminal.

2.  Instalar Dependências:
    
    npm install
    

3.  Iniciar a Aplicação React:
    
    npm run dev
    
    * O navegador será aberto automaticamente (geralmente em http://localhost:5173/).

---

### 4.Com tudo instalado

1.  rode o comando no console do BackEnd:

    dotenet run
 
    * Aguarde o servidor BackEnd iniciar ele automaticamente vai iniciar o FrontEnd e com isso você poderá acessar pelo caminho: http://localhost:5173.
