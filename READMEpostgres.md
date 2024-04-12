Ao atualizar o Postgresql, nota-se os seguintes possíveis problemas:

1 - As permissões de /var/lib/postgresql/<versão>/main são revogadas. É necessário mudar as permissões de ambas as versões.
2 - A nova versão não vem com senha configurada para o usuário postgres. É necessário mudar a forma de autenticação para "peer" no pg_hba.conf, restartar o postgres, entrar sem senha na porta da nova versão, modificar a senha do usuário postgres, mudar a forma de autenticação para senha novamente, restartar o postgres e aí sim logar na base nova.
3 - Os dados da base antiga não migram automaticamente para a versão nova baixada. É necessário migrar o backup da versão antiga para a versão nova. Tudo isso exige as senhas da versão antiga e da nova.
4 - A nova versão é servida em porta diferente da nova. A antiga é 5432 e a nova é 5433. É necessário mudar o arquivo "/etc/postgresql/<versão>/main/postgresql.conf" para que a porta se torne "5432" OU os arquivos de conexão da API para que a porta conectada reflita com a versão nova.

COMANDOS ÚTEIS

// Restarta a base
systemctl restart postgresql

// Faz login na base de dados utilizando senha
psql -U postgres -h localhost

// Faz login numa PORT específica
psql -U postgres -h localhost -p 5432

// Após logar, exibe a versão do postgresql
SELECT version();

// pasta das versões do postgresql instaladas
cd /etc/postgresql

// arquivo de configuração
cat /etc/postgresql/<versão>/main/pg_hba.conf

// logs do postgresql
cd /var/log/postgresql/

// conectar a base sem senha (se ela estiver configurada pra não ter senha)
sudo -u postgres psql -p 5433

// estando logado, comando SQL para mudar a senha do usuário postgres
ALTER USER postgres WITH PASSWORD 'new_password';

// faz o backup da base de uma versão do postgresql (porta 5432) e salva num local específico
sudo pg_dumpall -h localhost -p 5432 -U postgres > /home/andre.rodrigues/backup_pg11.sql

// restaura o backup para a versão nova do postgresql (porta 5433)
psql -h localhost -p 5433 -U postgres -d postgres -f /home/andre.rodrigues/backup_pg11.sql

// achar aonde está determinado arquivo
sudo find / -name "*backup.sql"

// checar as permissões
ls -ld /var/lib/postgresql/13/main

// listar grupos
groups

//listar grupos de um usuário
id usuário

// edita as configurações avançadas da versão do postgresql, como a porta em que ele roda
sudo vi /etc/postgresql/13/main/postgresql.conf

// restarta uma versão específica após alguma modificação
sudo systemctl restart postgresql@13-main

// checa o status de uma versão específica
sudo systemctl status postgresql@13-main

// em casos extremos -> mudar as permissões da base
sudo chown -R postgres:postgres /var/lib/postgresql/13/main
sudo chmod 700 /var/lib/postgresql/13/main

// em casos extremos -> se o acima não funcionar-> mudar a permissão para um usuário e grupo
sudo chown -R usuário:grupo /var/lib/postgresql/13/main