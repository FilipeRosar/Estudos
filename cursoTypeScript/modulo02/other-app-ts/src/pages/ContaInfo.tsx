import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ContaInfo = () => {
    return (
        <>
            <Text textAlign={'center'}>
                <p>Informações da conta</p>
            </Text>
            <Link to={'/conta/4'}>
                <Text textAlign={`center`}>
                    <p>Conta</p>
                </Text>
            </Link>
        </>

    )
}

export default ContaInfo;