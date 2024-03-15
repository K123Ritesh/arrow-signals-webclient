import {
  Flex,
  Box,
  Input,
  Heading,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  IconButton,
  Stack,
  Text, Center,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  useToast,
  Spinner,
  Link,
  // Link,

} from "@chakra-ui/react";
import { FcGoogle } from 'react-icons/fc';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export default function LoginPage() {



  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();

  function handleFormUpdate(name: string, value: string) {
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  }

  function validateForm(): boolean {
    let isValid = true;
    if (loginForm.email === "" || emailRegex.test(loginForm.email) === false) {
      setFormError((prevFormErrors) => {
        return { ...prevFormErrors, email: "Email is not valid!" };
      });
      isValid = false;
    }
    if (loginForm.password === "") {
      setFormError((prevFormErrors) => {
        return { ...prevFormErrors, password: "Password cannot be empty!" };
      });
      isValid = false;
    }
    return isValid;
  }

  function resetFormErrorDefault() {
    setFormError({
      email: "",
      password: "",
    });
  }
  function submitLoginForm() {
    resetFormErrorDefault();
    if (!validateForm()) {
      toast({
        title: "Invalid login form!",
        description: "Please fill in the form correctly!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } else {
      setLoading(true);
      // login(loginForm.email, loginForm.password)
      //   .then((res) => {
      //     return res.json();
      //   })
      //   .then((data) => {
      //     console.log(data);
      //     setLoading(false);
      //   });
    }
  }

  return (
    <Flex
      minH={"100vh"}
      maxW={"100vw"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >  <Stack
    py={12}
    width={'60vw'}
    px={6} backgroundColor={'red'}
  ></Stack>
    
      <Stack
        w={'40vw'}
        py={12}
        px={6} backgroundColor={'black'}
      >
        <Flex  
        align={"center"}
        // justify={"center"}
        // minH={'100vh'}
        minW={'40vw'}
        >
          <Stack 
            // spacing={8}
          mx={"auto"}
          w={{ sm: "xl", md: "md", lg: "md" }}
          py={12}
          px={6}>

        
        <Stack align={"flex-end"} >

<Text color={'white'} >
  For Sign up<Button
    bg={"Purple"}
    color={"white"}
    _hover={{
      bg: "white",
      color: 'black'
    }} marginLeft={5}

    padding={2} textDecoration={"ButtonText"}

  // onClick={}
  ><Link href="/signup">Register Here</Link>
    {/* {loading ? <Spinner /> : "Login"} */}

  </Button>
</Text>


</Stack>
<Stack align={"left"} marginLeft={8}>
<Heading fontSize={"3xl"} color={'white'}>Log in</Heading>
</Stack>
<Box
rounded={"lg"}
bg={'black'}
boxShadow={"lg"}
p={8}
>
<Stack spacing={4}>
  <FormControl id="email" isInvalid={formError.email.length !== 0}>
    <FormLabel color={'white'}>Email address</FormLabel>
    <Input
      type="email"
      name="email"
      onChange={(e) =>
        handleFormUpdate(e.target.name, e.target.value)
      }
    />
    <FormErrorMessage>{formError.email}</FormErrorMessage>
  </FormControl>
  <FormControl
    id="password"
    isInvalid={formError.password.length !== 0}
  >
    <FormLabel color={'white'}>Password</FormLabel>
    <InputGroup>
      <Input
        type={showPassword ? "text" : "password"}
        name="password"
        onChange={(e) =>
          handleFormUpdate(e.target.name, e.target.value)
        }
      />
      <InputRightElement>
        <IconButton
          variant="ghost"
          aria-label="show/hide password"
          icon={showPassword ? <FiEye /> : <FiEyeOff />}
          onClick={() =>
            setShowPassword(
              (prevShowPassword: boolean) => !prevShowPassword
            )
          }
        />
      </InputRightElement>
    </InputGroup>
    <FormErrorMessage>{formError.password}</FormErrorMessage>
  </FormControl>
  <Stack spacing={10}>
    <Stack
      // direction={{ base: "column", sm: "row" }}
      align={"flex-end"}
      justify={"space-between"}
    >
      {/* <Text color={"white"}>Forgot password ?</Text> */}
      <Link href="/signup" color={'white'}>Forgot password ?</Link>
    </Stack>
    <Button
      bg={"Purple"}
      color={"white"}
      _hover={{
        bg: "white",
        color:'black'
      }}
      onClick={submitLoginForm}
    >
      {loading ? <Spinner /> : "Login"}
    </Button>
  </Stack>
</Stack>

<Stack textAlign={"center"} mt="2" alignItems={"center"}>
  <Text fontSize={"sm"} color={'white'}>
    Continue with
  </Text>
  <Button w={'full'} variant={'outline'} backgroundColor={'white'} borderColor={'purple'} borderWidth={2} leftIcon={<FcGoogle />} isLoading={loading}>
    <Center>
      <Text>  {loading ? <Spinner /> : " Google"}</Text>
    </Center>
  </Button>
  {/* <Button
      bg={"blue.400"}
      color={"white"}
      _hover={{
        bg: "blue.500",
      }}
    
    >
    
    </Button> */}
</Stack>

{/* <Stack textAlign={"center"}>
    <Text mt="4">
      Dont have an account?{" "}
      <Link color={"red"} href="/signup">Sign up</Link>
    </Text>
  </Stack> */}
</Box>
</Stack>
        </Flex>
      </Stack>
    </Flex>
  );
}
