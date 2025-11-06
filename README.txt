Teste de Desenvolvimento Mindtech: Sistema de Inscri+AOcA4w-o em newsletter

Este projeto implementa um sistema de inscri+AOcA4w-o em newsletter Full-Stack, seguindo fielmente o design proposto e as regras de neg+APM-cio da avalia+AOcA4w-o.

Estrutura do Projeto

O projeto +AOk- dividido em duas partes, integradas em uma +APo-nica solu+AOcA4w-o do Visual Studio:

1.  +AGA-ReactApp1.Server+AGA- (Backend): API RESTful desenvolvida em C+ACM- (.NET Core) para gerenciamento de dados.
2.  +AGA-ReactApp1.Client+AGA- (Frontend): Interface de usu+AOE-rio desenvolvida em React (Vite) e CSS puro.

---

Requisitos de Execu+AOcA4w-o

Para rodar o projeto, voc+AOo- precisar+AOE- ter instalado:

+ACo- SDK do .NET 8 (ou vers+AOM-o mais recente, inclu+AO0-do no Visual Studio).
+ACo- Node.js e npm (Necess+AOE-rio para o Front-end React/Vite).

Como Rodar o Projeto (Passo a Passo)

1. Configura+AOcA4w-o Inicial

1.1.  Clone o Reposit+APM-rio: Baixe o c+APM-digo do GitHub.
1.2.  Abra a Solu+AOcA4w-o: Abra o arquivo de solu+AOcA4w-o (ReactApp1.sln) no Visual Studio.

2. Configurar e Iniciar o Backend (C+ACM- API)

O Backend +AOk- respons+AOE-vel pela persist+AOo-ncia de dados (usando SQLite) e pela l+APM-gica de neg+APM-cio.

2.1.  Abra o Terminal no Backend: No Visual Studio, clique com o bot+AOM-o direito no projeto +AGA-ReactApp1.Server+AGA- e selecione Abrir em Terminal.

2.2.  Instalar Ferramentas do EF Core: Instale a ferramenta global para gerenciar o banco de dados (se necess+AOE-rio):

    +AGAAYABg-bash
    dotnet tool install --global dotnet-ef
    +AGAAYABg-

2.3.  Aplicar Migra+AOcA9Q-es (Criar/Atualizar o Banco de Dados):

    +AGAAYABg-bash
+MAAwAA-dotnet ef database update
+MAAwAABgAGAAYA-
+MAAwAA-
+MAAwAA-
+MAAwAA-
+MAAwAA-
2.4. Iniciar a API:

+MAAwAADJ- CR+AM0-TICO que o Back-end esteja rodando na porta correta (5158) para que o Front-end possa se conectar.
+MAAwAA-
    +AGAAYABg-bash
    dotnet run
    +AGAAYABg-
    +ACo- Mantenha este terminal aberto (escutando na porta HTTP 5158).

3. Configurar e Iniciar o Frontend (React)

O Front-end utiliza o Proxy do Vite para se comunicar com a API C+ACM- (porta 5158), resolvendo automaticamente os problemas de CORS.

3.1.  Abra o Terminal no Frontend: No Visual Studio, clique com o bot+AOM-o direito no projeto +AGA-ReactApp1.Client+AGA- e selecione Abrir em Terminal.

3.2. Instalar Depend+AOo-ncias:

    +AGAAYABg-bash
    npm install
    +AGAAYABg-

3.3.  Iniciar a Aplica+AOcA4w-o React:

    +AGAAYABg-bash
    npm run dev
    +AGAAYABg-
    +ACo- O navegador ser+AOE- aberto automaticamente (geralmente em http://localhost:5173/).

---

4.Com tudo instalado, rode o comando +IBw-dotenet run+IB0- no console do BackEnd, aguarde o servidor BackEnd iniciar ele automaticamente vai iniciar o FrontEnd e ap+APM-s isso voc+AOo- poder+AOE- acessar pelo caminho: http://localhost:5173.
