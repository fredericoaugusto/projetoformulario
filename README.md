## Projeto Formulário de Inscrição
### O projeto consiste em um formulário simulando uma inscrição em uma vaga de emprego, com um front-end desenvolvido em React e um back-end desenvolvido em Spring Boot. Sendo necessário o preenchimento de algumas informações que são validadas e o envio de um arquivo de currículo que também é validado tanto em sua extensão, quanto em seu tamanho, sendo necessário que o arquivo não passe de 1MB de tamanho e o arquivo seja .doc .pdf ou .docx.
#### O eventual recrutador precisará seguir os passos dados a seguir, valendo ressaltar que o projeto foi pensado para receber um email de gmail, visto que, quando o formulário for preenchido e enviado, será enviado também um email para o eventual recrutador contendo as informacões e o arquivo do currículo.

## Estrutura do Projeto
  front: Contém o código do front-end.

  send-mail-main: Contém o código do back-end.

  O SCGB utilizado no projeto é o PostgreSQL. É necessário que ele esteja rodando em sua máquina ao rodar o backend e que seu usuário e senha estejam de acordo com os configurados no arquivo application.properties.

## Tecnologias Utilizadas
### Front-end
  Linguagem: JavaScript
  Biblioteca: React
  Biblioteca de Componentes: Chakra UI v2
### Back-end
  Linguagem: Java
  Framework: Spring Boot

## Configurações iniciais para o projeto
### Front-end
  1. Instalar Vite: Siga o guia de instalação do Vite para configurar um novo projeto React com Vite.

  2. Navegue até a pasta front
  ```
  cd front
  ```

  3. Instale as dependências:
  ```
  npm install
  ```

  4. Instale o Chakra UI:
  ```
  npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
  ```

### Back-end
  1. Navegue até a pasta send-mail-main:
  ```
  cd send-mail-main
  ```
  2. Compile e execute o projeto:
  ./mvnw spring-boot:run

  3. No backend para receber em seu email é necessário seguir os seguintes passos:

  3.1. Criar uma SENHA DE APP no site do google logando com sua conta que deseja receber o email clicando [aqui](https://myaccount.google.com/apppasswords)
    3.1.1. Basta entrar com sua conta, criar um novo nome de app e depois o google irá lhe fornecer uma senha de 16 digitos separados em 4 grupos de 4 digitos que deverá ser usada conforme item 3.3.2

  3.2. Após isso deve se direcionar ao código e ir no arquivo MailService e alterar o código na linha 30 onde mostra helper.setTo(to); e substituir o to para "seu-email". Exemplo de como deve ficar: helper.setTo("teste@gmail.com")

  3.3. Após isso, deve se direcionar ao arquivo application.properties e alterar as seguintes informações:
  3.3.1. Na linha 16 deve ser alterado com o seu email, ficando, por exemplo: spring.mail.username=teste@gmail.com

  3.3.2. Na linha 17 deve ser colocada a senha que o google irá fornecer ao seguir os passos previstos no 3.1

  3.4 O seu usuário e senha do BANCO DE DADOS devem ser inseridos nas linhas 10 e 11, respectivamente, do arquivo application.properties, conforme configuração do seu banco de dados

  4.0 Após essas configurações pode seguir para a inicialização do programa

### Rodando o projeto completo
  1. Após alguns testes é recomendado que abra a pasta do backend, nomeada de send-mail-main, no intelij e a pasta do frontend, nomeada de front, no VSCode, ou em outro editor de código de sua prefrência
  2. Primeiro deve ser iniciado o backend utilizando o próprio intelij apenas colocando pra iniciar a aplicação, que deve ser reconhecida automaticamente pelo próprio intelij, mas caso não seja reconhecida é a aplicação SendEmailApplication
  3. Com o backend em funcionamento e devidamente configurando, como ensinado anteriormente, pode partir para o frontend
  4. Inicializando o front com o comando npm run dev
  5. Após isso cabe observar se a porta que será inicializado o front é a 5173, caso seja diferente será necessário encerrar a aplicação (front e back), se dirigir até o arquivo do backend CurriculoController e na linha 19 alterar o localhost para a sua porta
  6. Depois de alterar, caso necessário, apenas siga os passos novamente, inicializando o backend, depois o frontend e preenchendo o formulário, ao clicar em enviar, será enviado diretamente para o seu email com as informações
  7. OBS: As informações adicionais como IP e Hora e data do envio estarão disponíveis no banco de dados

### Conectando Front-end e Back-end
Certifique-se de que o back-end está rodando e configure as requisições no front-end para apontar para o endereço do back-end (ex: http://localhost:8080).

## Links Úteis

- [Vite Documentation](https://vitejs.dev/guide/)
- [Chakra UI v2 Documentation](https://v2.chakra-ui.com/docs/components/modal/usage)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
  
Licença Este projeto está licenciado sob a MIT License.
