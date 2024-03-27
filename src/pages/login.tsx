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
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  useToast,
  Spinner,
  Link,
  Center,
} from "@chakra-ui/react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

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
  async function submitLoginForm() {
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
    }

    const res = await fetch("http://localhost:3000/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: loginForm.email,
        password: loginForm.password,
      }),
    });

    const data = await res.json();

    if (data.accessToken) {
      localStorage.setItem("accessToken", data.accessToken);
      console.log(data.accessToken);
    }
    if (data.message) {
      console.log(data.message);
    }
  }

  async function handleGoogleLogin() {
    const res = fetch("http://localhost:3000/auth/oauth2/signin/google", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res);
  }

  return (
    <Flex
      minH={"100vh"}
      minW={"100vw"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={8}
        mx={"auto"}
        w={{ sm: "xl", md: "md", lg: "md" }}
        py={12}
        px={6}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isInvalid={formError.email.length !== 0}>
              <FormLabel>Email address</FormLabel>
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
              <FormLabel>Password</FormLabel>
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
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Text color={"blue.400"}>Forgot password?</Text>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={submitLoginForm}
              >
                {loading ? <Spinner /> : "Login"}
              </Button>
            </Stack>
          </Stack>

          <Stack textAlign={"center"} mt="2" alignItems={"center"}>
            <Text fontSize={"sm"} color={useColorModeValue("black", "white")}>
              or
            </Text>

            <Button
              w={"full"}
              maxW={"md"}
              variant={"outline"}
              leftIcon={<FcGoogle />}
              onClick={handleGoogleLogin}
            >
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>
          </Stack>

          <Stack textAlign={"center"}>
            <Text mt="2">
              Dont have an account?{" "}
              <Link href="/signup" color={"blue.400"}>
                SignUp
              </Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
