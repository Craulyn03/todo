import { useForm } from "react-hook-form";
import { Input, Button, Box, Heading } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

const UserForm = ({ addUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    data.id = uuidv4();
    data.complete = false;
    addUser(data);
  };

  return (
    <Box maxW="500px" textAlign="center" margin="auto">
      <Heading color="white">AGREGAR TAREAS</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Ingrese el Titulo"
          {...register("title", { required: true })}
          mt="1rem"
          bg="white"
          color="black"
        />
        {errors.title && <Box color="white">Campo Requerido</Box>}
        <Input
          placeholder="Ingrese la Tarea"
          {...register("task", { required: true })}
          mt="1rem"
          bg="white"
          color="black"
        />
        {errors.task && <Box color="white">Campo Requerido</Box>}

        <Box>
          <Button type="submit" onClick={() => addUser} mt="1rem">
            AGREGAR TAREA
          </Button>
        </Box>
      </form>
    </Box>
  );
};
export default UserForm;
