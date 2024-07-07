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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
} from "@chakra-ui/react";
import axios from "axios";

function App() {
  const [errors, setErrors] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formElements = event.target.elements;
    const newErrors = {};

    // Validacao
    if (!formElements.nome.value) newErrors.nome = "Nome é obrigatório";
    if (!formElements.sobrenome.value)
      newErrors.sobrenome = "Sobrenome é obrigatório";
    if (!formElements.email.value) newErrors.email = "E-mail é obrigatório";
    if (!formElements.telefone.value)
      newErrors.telefone = "Telefone é obrigatório";
    if (!formElements.cargoDesejado.value)
      newErrors.cargoDesejado = "Cargo desejado é obrigatório";
    if (!formElements.escolaridade.value)
      newErrors.escolaridade = "Escolaridade é obrigatória";

    const fileInput = formElements.file;
    const allowedExtensions = ["doc", "docx", "pdf"];
    const maxFileSize = 1024 * 1024; // 1MB

    if (fileInput.files.length > 0) {
      const uploadedFile = fileInput.files[0];
      const fileSize = uploadedFile.size;

      // Validacao do tamanho do arquivo e do formato
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
      // Se validado passa
      const formData = new FormData();
      formData.append(
        "nome",
        `${formElements.nome.value} ${formElements.sobrenome.value}`
      );
      formData.append("email", formElements.email.value);
      formData.append("telefone", formElements.telefone.value);
      formData.append("cargoDesejado", formElements.cargoDesejado.value);
      formData.append("escolaridade", formElements.escolaridade.value);
      formData.append("observacoes", formElements.observacoes.value);
      formData.append("curriculo", fileInput.files[0]);

      try {
        const response = await axios.post(
          "http://localhost:8080/curriculo/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Formulário enviado com sucesso", response.data);
        setErrors({});
        onOpen(); // Modal de confirmacao do envio
      } catch (error) {
        console.error("Erro ao enviar o formulário", error);
      }
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
                  <FormLabel htmlFor="telefone">Telefone com DDD</FormLabel>
                  <Input
                    id="telefone"
                    type="telefone"
                    isInvalid={!!errors.telefone}
                    borderColor="green.600"
                  />
                  {errors.telefone && (
                    <Box color="red.500">{errors.telefone}</Box>
                  )}
                </Box>
              </HStack>
              <Box w="100%">
                <FormLabel htmlFor="cargoDesejado">Cargo Desejado</FormLabel>
                <Input
                  id="cargoDesejado"
                  isInvalid={!!errors.cargoDesejado}
                  borderColor="green.600"
                />
                {errors.cargoDesejado && (
                  <Box color="red.500">{errors.cargoDesejado}</Box>
                )}
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="escolaridade">Escolaridade</FormLabel>
                <Select
                  id="escolaridade"
                  placeholder="Selecione a escolaridade"
                  isInvalid={!!errors.escolaridade}
                  borderColor="green.600"
                >
                  <option value="fundamental">Ensino Fundamental</option>
                  <option value="medio">Ensino Médio</option>
                  <option value="superior">Ensino Superior</option>
                  <option value="pos">Pós-graduação</option>
                </Select>
                {errors.escolaridade && (
                  <Box color="red.500">{errors.escolaridade}</Box>
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
                  isDisabled={isOpen} // Desabilita o botao quando abre o modal
                >
                  Enviar
                </Button>
              </HStack>
            </FormControl>
          </form>
        </Center>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Formulário Enviado</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Sua inscrição foi feita com sucesso!</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default App;
