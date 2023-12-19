# Estrutura do Banco de Dados

## Tabelas

### Tabela `users`
  - `id`: Identificador único do usuário
  - `first_name`: Primeiro nome do usuário
  - `last_name`: Último nome do usuário
  - `email`: E-mail do usuário
  - `mobile_number`: Número de telefone móvel do usuário
  - `phone_number`: Número de telefone do usuário (fixo)
  - `address_id`: Identificador único do endereço do usuário
  - `notes`: Notas sobre o usuário
  - `timezone`: Fuso horário do usuário
  - `language`: Idioma do usuário
  - `id_roles`: Identificador único do papel do usuário

### Tabela `categories`
  - `id`: Identificador único da categoria
  - `name`: Nome da categoria
  - `description`: Descrição da categoria

### Tabela `services`
  - `id`: Identificador único do serviço
  - `name`: Nome do serviço
  - `description`: Descrição do serviço
  - `category_id`: Identificador único da categoria do serviço
  - `price`: Preço do serviço
  - `currency`: Moeda do preço do serviço
  - `duration`: Duração do serviço (em minutos)
  - `availableType`: Tipo de disponibilidade do serviço
  - `attendantsNumber`: Número de pessoas necessárias para atender o serviço
  - `location_id`: Identificador único do local do serviço

### Tabela `locations`
  - `id`: Identificador único do local
  - `name`: Nome do local
  - `description`: Descrição do local
  - `address_id`: Identificador único do endereço do local

### Tabela `addresses`
  - `id`: Identificador único do endereço
  - `street`: Rua do endereço
  - `number`: Número do endereço
  - `complement`: Complemento do endereço
  - `neighborhood`: Bairro do endereço
  - `city`: Cidade do endereço
  - `state`: Estado do endereço
  - `country`: País do endereço
  - `zipCode`: CEP do endereço

### Tabela `appointments`
  - `id`: Identificador único do agendamento
  - `book_datetime`: Data e hora do agendamento
  - `start_datetime`: Data e hora de início do agendamento
  - `end_datetime`: Data e hora de término do agendamento
  - `location`: Local do agendamento
  - `notes`: Notas sobre o agendamento
  - `hash`: Hash do agendamento
  - `is_unavailable`: Indica se o agendamento é de indisponibilidade
  - `id_users_provider`: Identificador único do usuário provedor do agendamento
  - `id_users_customer`: Identificador único do usuário cliente do agendamento
  - `id_services`: Identificador único do serviço do agendamento
  - `id_google_calendar`: Identificador único do evento no Google Calendar

### Tabela `roles`
  - `id`: Identificador único do papel
  - `name`: Nome do papel
  - `slug`: Slug do papel
  - `is_admin`: Indica se o papel é de administrador
  - `appointments`: Permissão de agendamentos
  - `customers`: Permissão de clientes
  - `services`: Permissão de serviços
  - `users`: Permissão de usuários
  - `system_settings`: Permissão de configurações do sistema
  - `user_settings`: Permissão de configurações do usuário

### Tabela `user_settings`
  - `id_users`: Identificador único do usuário
  - `username`: Nome de usuário
  - `password`: Senha do usuário
  - `salt`: Salt da senha do usuário
  - `working_plan`: Plano de trabalho do usuário
  - `working_plan_exceptions`: Exceções do plano de trabalho do usuário
  - `notifications`: Notificações do usuário
  - `google_sync`: Sincronização com o Google
  - `google_token`: Token do Google
  - `google_calendar`: Calendário do Google
  - `sync_past_days`: Dias passados a serem sincronizados
  - `sync_future_days`: Dias futuros a serem sincronizados
  - `calendar_view`: Visualização do calendário