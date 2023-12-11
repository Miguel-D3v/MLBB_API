# Documentação API Mobile Legends
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_MD6c0tRfY6lUW34ld0ZSjbGdPN9ZqI8ZiU7Pwds1HLORHoC2-fh3Kne&s=10 " width="500px" />

# Tecnologias 

- Nodejs
- Express
- Sequelize
- PostegreSQL

# Visão Geral

Disponibilizada em 18 de julho de 2023  <br>
Essa API foi criada com o objetivo de facilitar para programadores com qualquer linguagem de programação testar a aplicação que está sendo construída. <br> Essa API também se destina a você que ainda está em fase de aprendizado e precisa de uma API que possa ser acessada gratuitamente.
Nela haverá informações sobre os heróis do game e seus avatares .

# Endpoints

API → https://mlbb-api.vercel.app/

### /heroes
- **Método:** GET
- **Descrição:** Retorna os 10 primeiros heróis.
- **Exemplo de uso:**
  ```bash
  curl -X GET  https://mlbb-api.vercel.app/heroes
  ```

### /heroes/?offset=10&limit=10
- **Método:** GET
- **Descrição:** Retorna 10 heróis a partir do décimo.
- **Exemplo de uso:**
  ```bash
  curl -X GET  https://mlbb-api.vercel.app/heroes/?offset=10&limit=10
  ```
### /heroes/{name}
- **Método:** GET
- **Descrição:** Retorna o herói pelo nome.
- **Exemplo de uso:**
  ```bash
  curl -X GET  https://mlbb-api.vercel.app/heroes/Atlas
  ```
### /{id}
- **Método:** GET
- **Descrição:** Retorna o herói pelo id.
- **Exemplo de uso:**
  ```bash
  curl -X GET  https://mlbb-api.vercel.app/5
  ```

### /roles/{role}
- **Método:** GET
- **Descrição:** Retorna os heróis pela função..
- **Exemplo de uso:**
  ```bash
  curl -X GET  https://mlbb-api.vercel.app/roles/Mage
  ```


