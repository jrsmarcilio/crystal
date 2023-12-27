# Estrutura do Banco de Dados

## Tabelas
---

**Tabela: `users`**

A tabela `users` é responsável por armazenar dados relacionados aos usuários do sistema. Cada registro representa um usuário individual e inclui informações essenciais, como detalhes pessoais, informações de contato e dados relacionados ao gerenciamento do usuário.

**Campos:**
1. `email` (varchar(100)): O endereço de e-mail exclusivo associado ao usuário.
2. `name` (varchar(100)): O nome do usuário.
3. `picture` (varchar(100), opcional): Um caminho para a imagem de perfil do usuário.
4. `birthday` (timestamp): A data de nascimento do usuário.
5. `phone` (varchar(100)): O número de telefone do usuário.
6. `blocked` (tinyint(4)): Indica se o usuário está bloqueado (0 para não bloqueado, 1 para bloqueado).
7. `deleted` (tinyint(4)): Indica se o usuário foi excluído (0 para não excluído, 1 para excluído).
8. `createdAt` (datetime(6)): A data e hora em que o registro do usuário foi criado.
9. `updatedAt` (datetime(6)): A data e hora da última atualização do registro do usuário.
10. `id` (varchar(36)): Identificador único do usuário (chave primária).
11. `addressId` (varchar(36), opcional): Identificador único de um endereço associado ao usuário (chave estrangeira referenciando a tabela `addresses`).

**Restrições e Índices:**
- A chave primária é definida na coluna `id`.
- A coluna `email` possui um índice único (`IDX_97672ac88f789774dd47f7c8be`).
- A coluna `addressId` é uma chave estrangeira que referencia a coluna `id` na tabela `addresses`.
--- 

**Tabela: `addresses`**

A tabela `addresses` é responsável por armazenar informações relacionadas aos endereços associados aos usuários do sistema. Cada registro representa um endereço específico, com detalhes como rua, número, complemento, bairro, cidade, estado, país, código postal, coordenadas geográficas e a associação opcional com um usuário específico.

**Campos:**
1. `street` (varchar(100)): Nome da rua do endereço.
2. `number` (varchar(10)): Número do endereço.
3. `complement` (varchar(100), opcional): Informações adicionais sobre o endereço.
4. `neighborhood` (varchar(100)): Nome do bairro do endereço.
5. `city` (varchar(100)): Nome da cidade do endereço.
6. `state` (varchar(100)): Nome do estado ou província do endereço.
7. `country` (varchar(100), padrão 'Brazil'): Nome do país do endereço.
8. `zipcode` (varchar(100)): Código postal do endereço.
9. `latitude` (varchar(100), opcional): Coordenada de latitude do endereço.
10. `longitude` (varchar(100), opcional): Coordenada de longitude do endereço.
11. `userId` (varchar(36), opcional): Identificador único do usuário associado a este endereço (chave estrangeira referenciando a tabela `users`).
12. `id` (varchar(36)): Identificador único do endereço (chave primária).

**Restrições e Índices:**
- A chave primária é definida na coluna `id`.
- A coluna `userId` possui um índice único (`REL_95c93a584de49f0b0e13f75363`).
- A coluna `userId` é uma chave estrangeira que referencia a coluna `id` na tabela `users`.

**Observações:**
- A tabela permite a associação opcional de um endereço a um usuário através do campo `userId`.
- Os campos de coordenadas geográficas (`latitude` e `longitude`) permitem armazenar a localização exata do endereço, se disponível.
- O país padrão é definido como 'Brazil'.
- A tabela suporta a integridade referencial, garantindo que um endereço não seja associado a um usuário inexistente.
---