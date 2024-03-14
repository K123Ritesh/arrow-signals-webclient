import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from 'react-icons/fc'
import { Navigate } from "react-router-dom";

const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export default function SignupPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();

  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  function handleFormUpdate(name: string, value: string) {
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  }

  function validateForm(): boolean {
    let isValid = true;
    if (signupForm.name === "") {
      setFormError((prevFormErrors) => {
        return { ...prevFormErrors, name: "Name cannot be empty!" };
      });
      isValid = false;
    }
    if (
      signupForm.email === "" ||
      emailRegex.test(signupForm.email) === false
    ) {
      setFormError((prevFormErrors) => {
        return { ...prevFormErrors, email: "Invalid Email!" };
      });
      isValid = false;
    }
    if (signupForm.phone === "") {
      setFormError((prevFormErrors) => {
        return { ...prevFormErrors, phone: "Phone cannot be empty!" };
      });
      isValid = false;
    }
    if (signupForm.password === "") {
      setFormError((prevFormErrors) => {
        return { ...prevFormErrors, password: "Password cannot be empty!" };
      });
      isValid = false;
    }
    if (signupForm.confirmPassword === "") {
      setFormError((prevFormErrors) => {
        return {
          ...prevFormErrors,
          confirmPassword: "Confirm Password cannot be empty!",
        };
      });
      isValid = false;
    }
    if (signupForm.password !== signupForm.confirmPassword) {
      setFormError((prevFormErrors) => {
        return {
          ...prevFormErrors,
          password: "Password must match!",
          confirmPassword: "Password must match!",
        };
      });
      isValid = false;
    }
    return isValid;
  }

  function resetFormErrorDefault() {
    setFormError({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  }

  async function submmitSignupForm() {
    resetFormErrorDefault();
    if (!validateForm()) {
      toast({
        title: "Invalid signup form!",
        description: "Please fill in the form correctly!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } else {
      setLoading(true);
    }

    const res = await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "name": signupForm.name,
        "email": signupForm.email,
        "password": signupForm.password,
      }),
    });

    const data = await res.json();

    if(data.accessToken) {
      console.log(data.accessToken);
      setLoading(false);
      toast({
        title: "Signup success!",
        description: "Please login to continue!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
    if(data.message) {
      console.log(data.message);
    }
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
          <Heading fontSize={"4xl"}>SignUp</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            {/* Name */}
            <FormControl id="name" isInvalid={formError.name.length !== 0}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                onChange={(e) =>
                  handleFormUpdate(e.target.name, e.target.value)
                }
              />
              <FormErrorMessage>{formError.name}</FormErrorMessage>
            </FormControl>

            {/* Email Address */}
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

            {/* Phone Number */}
            <FormControl id="phone" isInvalid={formError.phone.length !== 0}>
              <FormLabel>Phone</FormLabel>
              <Input
                type="tel"
                name="phone"
                onChange={(e) =>
                  handleFormUpdate(e.target.name, e.target.value)
                }
              />
              <FormErrorMessage>{formError.phone}</FormErrorMessage>
            </FormControl>

            {/* Password */}
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

            {/* Confirm Password */}
            <FormControl
              id="confirm-password"
              isInvalid={formError.confirmPassword.length !== 0}
            >
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
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
              <FormErrorMessage>{formError.confirmPassword}</FormErrorMessage>
            </FormControl>
          </Stack>

          <Stack textAlign={"center"}>
            <Button
              mt="4"
              bg={"blue.400"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              onClick={submmitSignupForm}
              isLoading={loading}
            >
              {loading ? <Spinner /> : "SignUp"}
            </Button>

            <Text fontSize={"sm"} color={"white"}>
              or
            </Text>

            <Button
              w={"full"}
              maxW={"md"}
              variant={"outline"}
              leftIcon={<FcGoogle />}
            >
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>
          </Stack>

          <Stack textAlign={"center"}>
            <Text mt="2">
              Already have an account?{" "}
              <Link href="/login" color={"blue.400"}>
                LogIn
              </Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
