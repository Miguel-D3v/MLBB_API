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


|  |  | 
| --- | --- |
| Exibe os 10 primeiros herois | /heroes |
| Retorna 10 herois a partir do décimo | /heroes/?offset=10&limit=10 |
| Filtra heróis por nome | /heroes/{name} |
| Retorna o herói pelo id | /{id} |
| Retorna os heróis pela função  | /roles/{role} |

---


