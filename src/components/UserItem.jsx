import React from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

import { Box, Checkbox, Badge } from "@chakra-ui/react";

const UserItem = ({ tasks, deleteUser, onCompleted }) => {
  return (
    <Box>
      {tasks.length > 0 ? (
        <Box>
          {tasks.map((el) =>
            el.complete ? (
              <Box key={el.id}>
                <Box
                  display="flex"
                  bg="#ECC94B"
                  color="black"
                  maxW="500px"
                  m="auto"
                  justifyContent="space-between"
                  p="1.5rem"
                  borderRadius="2rem"
                  mt="1.5rem"
                  position="relative"
                  textDecoration="line-through"
                >
                  <Box position="absolute" bottom="3rem" left="4rem">
                    <Badge colorScheme="green">{el.title}</Badge>
                  </Box>
                  <Checkbox
                    colorScheme="green"
                    defaultChecked={el.complete}
                    onChange={() => onCompleted(el)}
                  />
                  <Box>
                    <Box fontWeight="bold">{el.task}</Box>
                  </Box>
                  <Box>
                    <DeleteIcon
                      cursor="pointer"
                      ml="1rem"
                      color="red"
                      onClick={() => deleteUser(el.id)}
                      fontSize="1.5rem"
                    />
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box key={el.id}>
                <Box
                  display="flex"
                  bg="#2A4365"
                  color="white"
                  maxW="500px"
                  m="auto"
                  justifyContent="space-between"
                  p="1.5rem"
                  borderRadius="2rem"
                  mt="1.5rem"
                  position="relative"
                >
                  <Box position="absolute" bottom="3rem" left="4rem">
                    <Badge colorScheme="purple">{el.title}</Badge>
                  </Box>
                  <Checkbox
                    colorScheme="green"
                    defaultChecked={el.complete}
                    onChange={() => onCompleted(el)}
                  />
                  <Box>
                    <Box fontWeight="bold">{el.task}</Box>
                  </Box>
                  <Box>
                    <DeleteIcon
                      cursor="pointer"
                      ml="1rem"
                      color="red"
                      onClick={() => deleteUser(el.id)}
                    />
                    <EditIcon cursor="pointer" ml="1rem" color="#BEE3F8" />
                  </Box>
                </Box>
              </Box>
            )
          )}
        </Box>
      ) : (
        <Box>
          <Box
            display="flex"
            bg="#FAF089"
            color="black"
            maxW="500px"
            m="auto"
            justifyContent="space-between"
            p="1.5rem"
            borderRadius=""
            mt="1.5rem"
            fontWeight="bold"
          >
            {" "}
            NO HAY TAREAS PENDIENTES
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default UserItem;
