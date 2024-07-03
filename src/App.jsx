import React, { useState } from "react";
import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  Button,
  Select,
  Textarea,
} from "@chakra-ui/react";

function App() {
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const formElements = event.target.elements;
    const newErrors = {};

    // Validação
    if (!formElements.nome.value) newErrors.nome = "Nome é obrigatório";
    if (!formElements.sobrenome.value)
      newErrors.sobrenome = "Sobrenome é obrigatório";
    if (!formElements.email.value) newErrors.email = "E-mail é obrigatório";
    if (!formElements.tel.value) newErrors.tel = "Telefone é obrigatório";
    if (!formElements.posicao.value)
      newErrors.posicao = "Cargo desejado é obrigatório";
    if (!formElements.educacao.value)
      newErrors.educacao = "Escolaridade é obrigatória";

    const fileInput = formElements.file;
    const allowedExtensions = ["doc", "docx", "pdf"];
    const maxFileSize = 1024 * 1024; // 1MB

    if (fileInput.files.length > 0) {
      const uploadedFile = fileInput.files[0];
      const fileSize = uploadedFile.size;

      // Tamanho do arquivo
      const fileExtension = uploadedFile.name.split(".").pop().toLowerCase();
      if (!allowedExtensions.includes(fileExtension)) {
        newErrors.file =
          "Formato de arquivo inválido. Apenas .doc, .docx ou .pdf são permitidos.";
      }
      if (fileSize > maxFileSize) {
        newErrors.file = "O arquivo excede o tamanho máximo permitido (1MB).";
      }
    } else {
      newErrors.file = "Arquivo é obrigatório.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Se tudo for validado, enviar o formulário
      console.log("Formulário enviado com sucesso");
      setErrors({});
    }
  };

  return (
    <Box h="100vh">
      <Center
        as="header"
        h={150}
        bg="green.500"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="8"
      >
        Formulário de Inscrição
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh - 150px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={4}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >
          <form onSubmit={handleSubmit}>
            <FormControl display="flex" flexDir="column" gap="4">
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="nome">Nome</FormLabel>
                  <Input
                    id="nome"
                    isInvalid={!!errors.nome}
                    borderColor="green.600"
                  />
                  {errors.nome && <Box color="red.500">{errors.nome}</Box>}
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="sobrenome">Sobrenome</FormLabel>
                  <Input
                    id="sobrenome"
                    isInvalid={!!errors.sobrenome}
                    borderColor="green.600"
                  />
                  {errors.sobrenome && (
                    <Box color="red.500">{errors.sobrenome}</Box>
                  )}
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    isInvalid={!!errors.email}
                    borderColor="green.600"
                  />
                  {errors.email && <Box color="red.500">{errors.email}</Box>}
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="tel">Telefone com DDD</FormLabel>
                  <Input
                    id="tel"
                    type="tel"
                    isInvalid={!!errors.tel}
                    borderColor="green.600"
                  />
                  {errors.tel && <Box color="red.500">{errors.tel}</Box>}
                </Box>
              </HStack>
              <Box w="100%">
                <FormLabel htmlFor="posicao">Cargo Desejado</FormLabel>
                <Input
                  id="posicao"
                  isInvalid={!!errors.posicao}
                  borderColor="green.600"
                />
                {errors.posicao && <Box color="red.500">{errors.posicao}</Box>}
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="educacao">Escolaridade</FormLabel>
                <Select
                  id="educacao"
                  placeholder="Selecione a escolaridade"
                  isInvalid={!!errors.educacao}
                  borderColor="green.600"
                >
                  <option value="fundamental">Ensino Fundamental</option>
                  <option value="medio">Ensino Médio</option>
                  <option value="superior">Ensino Superior</option>
                  <option value="pos">Pós-graduação</option>
                </Select>
                {errors.educacao && (
                  <Box color="red.500">{errors.educacao}</Box>
                )}
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="observacoes">Observações</FormLabel>
                <Textarea id="observacoes" borderColor="green.600" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="file">Arquivo (Currículo)</FormLabel>
                <Flex
                  alignItems="center"
                  border="1px solid"
                  borderColor="green.600"
                  borderRadius="md"
                  p="2"
                >
                  <Input
                    id="file"
                    type="file"
                    isInvalid={!!errors.file}
                    border="none"
                    px="1"
                  />
                  {errors.file && (
                    <Box color="red.500" ml="2">
                      {errors.file}
                    </Box>
                  )}
                </Flex>
              </Box>
              <HStack justify="center">
                <Button
                  w={240}
                  p="6"
                  type="submit"
                  bg="green.600"
                  color="white"
                  fontWeight="bold"
                  fontSize="xl"
                  mt="2"
                  _hover={{ bg: "green.800" }}
                >
                  Enviar
                </Button>
              </HStack>
            </FormControl>
          </form>
        </Center>
      </Flex>
    </Box>
  );
}

export default App;
