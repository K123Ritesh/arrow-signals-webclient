import {
  Box,
  Text,
  Avatar,
  Flex,
  Stack,
  Center,
} from "@chakra-ui/react";
import { FaBell, FaEdit } from "react-icons/fa"; 

const UserProfile = () => {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
     
      direction="column"
      px={4}
      bgColor={'black'}
    >
      <Flex
        w="100%"
        justify="space-between"
        align="center"
        mb={4}
      >
        <Text fontSize="3xl" fontWeight={600} color={'white'}>Your Profile</Text>
        <Box>
          <FaBell size={24} color="white" />
        </Box>
      </Flex>
        <Box w={700} h={200} bg="#121212" borderRadius={15}><Center mt={-50}><Box w={200} h={200} >
          <Avatar
            size={"3xl"}
            borderColor={'red'}
            borderWidth={2}
            src={
              "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            }
            mt={0}
            mx="auto"
          />  <Text align={'center'} fontWeight={550} fontSize={'3xl'} color={'white'}>
            Ritesh Kumar
          </Text>
        </Box></Center>
        </Box>

      <Stack spacing={8} align="center" marginTop={30}>
      <Box w={700} h={180} bg="#121212" borderRadius={10} padding={5} >
        
        <Flex justify={'right'}>
        <Box>
          <FaEdit size={24} color={'white'}/>
        </Box>
        </Flex>
          <Flex justify={"space-between"} mt={4}>
            <Text color={'white'}>Name:</Text>
            <Text color={'white'}>Ritesh Kumar</Text>
          </Flex>
          <Flex justify={"space-between"} mt={4}>
            <Text color={'white'}>Email:</Text>
            <Text color={'white'}>john.doe@example.com</Text>
          </Flex>
          <Flex justify={"space-between"} mt={4}>
            <Text color={'white'}>Location:</Text>
            <Text color={'white'}>New York City</Text>
          </Flex>
          </Box>
          <Box w={700} h={180} bg="#121212" borderRadius={10} padding={5} >
          <Flex justify={"space-between"} mt={4}>
            <Text color={'white'}>Notification on Telegram:</Text>
            <Text color={'white'}>On</Text></Flex>
          </Box>
      </Stack>
    </Flex>
  );
};

export default UserProfile;
