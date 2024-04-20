import { Text, Center, Box, Flex, Spacer, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../components/AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../services/storage";



export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate()

    const logout = () => {
        changeLocalStorage({ login: false })
        setIsLoggedIn(false)
        navigate('/')
    }
    return (
        <Flex
            backgroundColor={"#63F445"}
            padding={'5px'}>
            <Box>
                <Center>
                    <Text
                        fontSize={32}
                    >Bank</Text>
                </Center>
            </Box>
            {
                isLoggedIn && (
                    <>
                        <Spacer />
                        <Center>
                            <Button
                                onClick={() => logout()}>
                                Sair
                            </Button>
                        </Center>
                    </>
                )
            }

        </Flex>
    )
}