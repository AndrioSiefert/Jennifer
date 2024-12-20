import { Box, Button, Image, ChakraProvider, Flex, Text, Link } from '@chakra-ui/react';
import theme from '@/app/theme';
import { useContext } from 'react';
import { LoginContext } from '@/Context/LoginContext';

export default function MenuBar({ showButtons = true }) {
    const { user, isLoggedIn, handleLogout } = useContext(LoginContext);

    return (
        <ChakraProvider theme={theme}>
            <Box px={4}>
                <Flex h={16} alignItems='center' justifyContent='space-between' mt={5}>
                    <Flex alignItems='center'>
                        <Link href='/'>
                            <Image src='/wise-share.png' alt='logo' width='50px' height='50px' />
                        </Link>
                        <Text color='#FF6A16' fontWeight='bold' fontSize='xl' ml={4}>
                            Wise Share
                        </Text>
                    </Flex>
                    <Flex alignItems='center'>
                        {isLoggedIn && user ? (
                            <>
                                <Text color='white' mr={4}>
                                    Bem-vindo, {user.nome}
                                </Text>
                                <Button onClick={handleLogout} colorScheme='red'>
                                    SAIR
                                </Button>{' '}
                            </>
                        ) : (
                            showButtons && (
                                <>
                                    <Link href='/cadastrar'>
                                        <Button colorScheme='laranja' mr={4}>
                                            Cadastrar-se
                                        </Button>
                                    </Link>
                                    <Link href='/login'>
                                        <Button colorScheme='laranja'>Logar</Button>
                                    </Link>
                                </>
                            )
                        )}
                    </Flex>
                </Flex>
            </Box>
        </ChakraProvider>
    );
}
