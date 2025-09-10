🎬 Roadmap do Projeto – “MovieTracker”
1. Planejamento e Setup Inicial

Definir escopo (o que vai e o que não vai ter):

✅ Login com usuários.

✅ Tela inicial de boas-vindas.

✅ Área de pesquisa (filmes, séries, animes).

✅ Salvar listas: Assistindo, Quero Assistir, Assistidos.

✅ Linkar para site oficial (IMDb, MyAnimeList, TMDB, etc.).

❌ Não ter player de vídeo.

❌ Não ter recomendação automática.

Tecnologias sugeridas:

Front: Vue 3 + Vuetify (pra UI bonita e responsiva).

Back-end: Node.js (Express).

Banco: MySQL (simples pra armazenar usuários e listas).

API externa: TMDB (The Movie Database) → grátis, gigante, cobre filmes, séries e animes.

Setup inicial:

Criar repositório no GitHub.

Criar projeto Vue com Vite.

Configurar Vuetify no front.

Configurar servidor (PHP ou Node).

2. Autenticação

Front-end:

Página de Login e Cadastro (usuário + senha).

Tela de boas-vindas depois do login.

Back-end:

Rotas POST /register e POST /login.

Criptografar senha (bcrypt se usar Node, password_hash se usar PHP).

Gerar token JWT para autenticação.

Banco:

Tabela users:

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) UNIQUE,
  password VARCHAR(255)
);

3. Área de Pesquisa

Integrar API TMDB para buscar filmes/séries/animes.

Criar rota no back: GET /search?query=xxx.

No front, campo de pesquisa → exibe cards com pôster + título + botão “Adicionar à Lista”.

Salvar no banco apenas o ID do item + título + tipo (filme/série/anime).

4. Gerenciamento de Listas

Criar tabelas:

CREATE TABLE lists (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  item_id VARCHAR(50),
  title VARCHAR(255),
  type ENUM('filme', 'serie', 'anime'),
  status ENUM('assistindo', 'quero assistir', 'assistido'),
  FOREIGN KEY (user_id) REFERENCES users(id)
);


Funcionalidades:

Botão para adicionar/remover da lista.

Dropdown para mudar status (Assistindo / Quero assistir / Assistido).

Página “Minhas Listas” com filtros por status.

5. Detalhes e Redirecionamento

Ao clicar em um item salvo:

Abrir uma página de detalhes (capa, sinopse, ano, gênero).

Botão “Ver mais” → redireciona para site oficial (ou página TMDB/IMDb/MyAnimeList).

6. UI / UX

Layout sugerido:

Login → Dashboard (Boas-vindas).

Navbar: Pesquisa | Minhas Listas | Perfil.

Cards estilizados com Vuetify (pôster + título).

Extras:

Dark Mode (fácil no Vuetify).

Responsivo (funcionar bem no celular).

7. Finalização e Deploy

Testar fluxos principais:

Criar conta → logar → pesquisar → adicionar item → mudar status → ver lista.

Deploy:

Front-end → Netlify / Vercel.

Back-end → Render / Railway / seu próprio Wamp.

Banco → PlanetScale (MySQL grátis na nuvem) ou local no Wamp.

🚀 Roadmap Visual (Passo a Passo)

Criar projeto Vue + Vuetify.

Criar servidor (Node/PHP) + banco MySQL.

Implementar login/cadastro com JWT.

Criar tela inicial de boas-vindas.

Implementar pesquisa via TMDB.

Criar listas no banco.

Implementar gerenciamento de status.

Criar página de detalhes com redirecionamento.

Polir UI/UX.

Fazer deploy.