import { Button, Text, Box, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
export default function Home() {
    const [queryParams, setQueryParams] = useState({});
    const toast = useToast();
  useEffect(() => {
    // Function to parse query parameters from URL
    const getQueryParams = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const params = {};
      for (const param of searchParams.entries()) {
        params[param[0]] = param[1];
      }
      console.log("Params",params)
      return params;
    };

    // Parse query parameters from URL when component mounts
    setQueryParams(getQueryParams());
  }, []);

  function logOut(){
    fetch('http://localhost:3000/auth/logout', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },

      })
        .then(response => response.json())
        .then((data) => {
          console.log(data);
        
          if (data['message'] != null) {
            //
            toast({
                title: "Logged Out Successfully",
                description: "See you soon....",
                status: "info",
                duration: 5000,
                isClosable: true,
                position: "top",
              });
            
            window.location.href = '/login'
          } else {
            //
          }
        });
  }
    return (
        <Box textAlign="center" my={10} mx={50} py={50} px={50} width={'auto'}>
            <Text>{queryParams['name']}</Text>
            <Button onClick={logOut}>
Logout
            </Button>
        </Box>

    );
}

