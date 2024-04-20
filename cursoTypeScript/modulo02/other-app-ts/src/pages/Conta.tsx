import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { AppContext } from "../components/AppContext";

interface UserData {
    email: string;
    password: string;
    name: string;
    balance: number;
    id: string;
}


const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>()
    const { id } = useParams();
    const navigate = useNavigate();


    const { isLoggedIn } = useContext(AppContext);

    !isLoggedIn && navigate('/')

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api;
            setUserData(data)
        }

        getData()
    }, [])

    const actualData = new Date();



    if (userData && id !== userData.id) {
        navigate('/')
    }

    return (
        <Center textAlign={'center'}>
            <SimpleGrid
                column={2}
                spacing={8}

            >
                {
                    userData === undefined || userData === null ?
                        (<Center>
                            <Spinner marginRight={3}
                                color="green" />
                            <h1>Carregando...</h1>
                        </Center>) :
                        (
                            <>
                                <CardInfo
                                    mainContent={`Bem vindo, ${userData?.name}`}
                                    content={`
                                            ${actualData.getDate()}
                                            /${actualData.getMonth() + 1}
                                            /${actualData.getFullYear()} 
                                            ${actualData.getHours()}:
                                            ${actualData.getMinutes()}:
                                            ${actualData.getSeconds()}`} />


                                <CardInfo mainContent={"Saldo"} content={`R$ ${userData.balance}`} />
                            </>

                        )
                }

            </SimpleGrid>
        </Center>
    )
}

export default Conta;