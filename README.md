# API de Localidades Brasileiras

Este projeto é uma API RESTful desenvolvida em Node.js para consultar informações sobre municípios brasileiros, permitindo a busca de dados de uma cidade específica e a listagem de todos os municípios de um determinado estado (UF).
Membros: Carlos Eduardo, Heloísa Cardoso, Gustavo do Amaral, João Bruno, Luan Flavio

## Tecnologias Utilizadas

* **Node.js**: Ambiente de execução do JavaScript no servidor.
* **Express**: Framework para a construção de APIs web.
* **Mongoose**: Biblioteca para modelagem de dados do MongoDB.
* **MongoDB**: Banco de dados NoSQL utilizado para armazenar as informações das localidades.

## Estrutura do Projeto

O projeto está organizado com a seguinte estrutura de pastas e arquivos:

* **controllers/MunicipioController.js**: Responsável por receber as requisições HTTP e enviar as respostas, intermediando a comunicação entre as rotas e os serviços.
* **model/Municipio.js**: Define o schema do Mongoose para os dados dos municípios, detalhando a estrutura de como as informações são armazenadas no banco de dados.
* **routes/MunicipioRoutes.js**: Gerencia e define as rotas da API, associando cada endpoint a uma função do controller.
* **services/MunicipioService.js**: Contém a lógica de negócio da aplicação, incluindo as consultas ao banco de dados para buscar as informações solicitadas.
* **.env**: Arquivo de configuração para as variáveis de ambiente do projeto.

## Configuração do Ambiente

1.  **Clone o repositório:**
    ```bash
    git clone <url-do-seu-repositorio>
    cd <nome-do-seu-repositorio>
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz do projeto com base nos arquivos fornecidos.
    ```properties
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/api
    ```
    * `PORT`: Porta em que a aplicação será executada.
    * `MONGODB_URI`: String de conexão com o banco de dados MongoDB.

4.  **Inicie a aplicação:**
    ```bash
    npm start
    ```

## Endpoints da API

A API possui os seguintes endpoints disponíveis:

### 1. Listar Dados de uma Cidade

Retorna os dados detalhados de um município específico.

* **URL**: `/cidades/:cidade`
* **Método**: `GET`
* **Parâmetros da URL**:
    * `cidade` (String, obrigatório): O nome do município a ser buscado.
* **Exemplo de Requisição**:
    ```bash
    curl http://localhost:3000/cidades/São%20Paulo
    ```
* **Resposta de Sucesso (200)**:
    ```json
    {
        "id": 3550308,
        "nome": "São Paulo",
        "microrregiao": {
            "id": 35061,
            "nome": "São Paulo",
            "mesorregiao": {
                "id": 3515,
                "nome": "Metropolitana de São Paulo",
                "UF": {
                    "id": 35,
                    "sigla": "SP",
                    "nome": "São Paulo",
                    "regiao": {
                        "id": 3,
                        "sigla": "SE",
                        "nome": "Sudeste"
                    }
                }
            }
        },
        "regiao-imediata": {
            "id": 350001,
            "nome": "São Paulo",
            "regiao-intermediaria": {
                "id": 3501,
                "nome": "São Paulo",
                "UF": {
                    "id": 35,
                    "sigla": "SP",
                    "nome": "São Paulo",
                    "regiao": {
                        "id": 3,
                        "sigla": "SE",
                        "nome": "Sudeste"
                    }
                }
            }
        }
    }
    ```
* **Resposta de Erro (404)**:
    ```json
    {
        "error": "Não foi encontrado a cidade/municipio: <nome-da-cidade>"
    }
    ```

### 2. Listar Municípios por UF

Retorna uma lista de todos os municípios pertencentes a uma Unidade Federativa (UF).

* **URL**: `/estados/:uf/cidades`
* **Método**: `GET`
* **Parâmetros da URL**:
    * `uf` (String, obrigatório): A sigla do estado (ex: SP, RJ, BA).
* **Exemplo de Requisição**:
    ```bash
    curl http://localhost:3000/estados/sp/cidades
    ```
* **Resposta de Sucesso (200)**:
    ```json
    
        {
            "_id": "...",
            "id": 3500105,
            "nome": "Adamantina",
            "municipio": {
                "id": 3500105,
                "nome": "Adamantina",
                "microrregiao": {
                    "id": 35002,
                    "nome": "Adamantina",
                    "mesorregiao": {
                        "id": 3501,
                        "nome": "Presidente Prudente",
                        "UF": {
                            "id": 35,
                            "sigla": "SP",
                            "nome": "São Paulo",
                            "regiao": {
                                "id": 3,
                                "sigla": "SE",
                                "nome": "Sudeste"
                            }
                        }
                    }
                },
                "regiao-imediata": {
                    "id": 350028,
                    "nome": "Adamantina - Lucélia",
                    "regiao-intermediaria": {
                        "id": 3508,
                        "nome": "Presidente Prudente",
                        "UF": {
                            "id": 35,
                            "sigla": "SP",
                            "nome": "São Paulo",
                            "regiao": {
                                "id": 3,
                                "sigla": "SE",
                                "nome": "Sudeste"
                            }
                        }
                    }
                }
            }
        }
    ```
* **Resposta de Erro (404)**:
    ```json
    {
        "error": "Não foi encontrado municípios para essa UF: <sigla-da-uf>"
    }
    ```
