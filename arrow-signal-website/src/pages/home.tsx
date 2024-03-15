import { Button, Text, Box, Link, FormControl, FormLabel, FormHelperText, Input, Heading, ListItem, List } from "@chakra-ui/react";
import { FcGoogle } from 'react-icons/fc';
export default function Home() {
    return (
        <Box textAlign="center" my={10} mx={50} py={50} px={50} width={'auto'}>
            <Heading>Log in</Heading>
            <Box my={5}>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="angail@gmail.com" />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
            </Box>
            <Box my={5}>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Password" />
                </FormControl>
            </Box>
            <Box my={5}>
                <Text>
                    <Link href="#">Forgot Password?</Link>
                </Text>
            </Box>
            <List>
                <ListItem>
                    <Button variant="solid" size="lg" colorScheme="teal">
                        Login
                    </Button>

                </ListItem>
                <ListItem my={10} >
                    <Button bgColor={'black'} leftIcon={<FcGoogle />} textColor={'white'}>

                        Twitter
                    </Button>
                </ListItem>
            </List>
        </Box>

    );
}