import { Box, Center, Input } from "@chakra-ui/react";
import { CompCard } from "../components/Card_comp";
import { useContext, useState } from "react";
import { verification } from "../services/login";
import DButton from "../components/DButton";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
    const [user, setUser] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate();


    const handleClick = async (email: string) => {
        const loggedIn = await verification(email)

        if (!loggedIn) {
            alert('Email inválido')
            return;
        }
        setIsLoggedIn(true);

        changeLocalStorage({login: true})

        navigate('/conta/4');
    }
    return (
        <Box>
            <CompCard>
                <Center
                    fontFamily={'Arial'}
                    fontSize={'17px'}
                    fontWeight={'700'}
                    mb={'10px'}
                >

                    <h1>Faça o login: </h1>
                </Center>
                <Input
                    placeholder='Email'
                    type='email'
                    border={'1px solid black'}
                    required
                    value={user}
                    onChange={(event) => setUser(event.target.value)}
                />
                <br /><br />
                <Input
                    placeholder='Senha'
                    type='password'
                    border={'1px solid black'}
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Center>
                    <DButton
                        onClick={() => handleClick(user)}
                    />
                </Center>
            </CompCard>
        </Box>
    )
}

export default Home;