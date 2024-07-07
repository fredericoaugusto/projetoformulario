## Projeto Formulário de Inscrição
### Este projeto consiste em um formulário de inscrição com um front-end desenvolvido em React e um back-end desenvolvido em Spring Boot.

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

  3.1. Criar uma SENHA DE APP no site do google logando com sua conta que deseja receber o email clicando aqui

  3.2. Após isso deve se direcionar ao código e ir no arquivo MailService e alterar o código na linha 30 onde mostra helper.setTo(to); e substituir o to para "seu-email". Exemplo de como deve ficar: helper.setTo("teste@gmail.com")

  3.3. Por último, deve se direcionar ao arquivo application.properties e alterar as seguintes informações:
  3.3.1. Na linha 16 deve ser alterado com o seu email, ficando, por exemplo: spring.mail.username=teste@gmail.com

  3.3.2. Na linha 17 deve ser colocada a senha que o google irá fornecer ao seguir os passos previstos no 3.1

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
