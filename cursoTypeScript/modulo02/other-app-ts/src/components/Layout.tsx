import { Footer } from "./Footer";
import { Header } from "./Header";
import { Box, Flex } from "@chakra-ui/react";


export const Layout = ({ children }: any) => {
    return (
        <>
            <Header />
            <Flex
                minHeight='100vh'
                backgroundColor={'#ADEA74'}
                padding={'25px'}
                justifyContent='center'
                alignItems='baseline'
            >
                <Box
                    backgroundColor={'#EBE075'}
                    borderRadius={'10px'}
                    padding={'36px'}
                    border={'1px solid'}
                    width={'500px'}
                    maxWidth={'500px'}
                    maxHeight={'900px'}
                >
                    {children}
                </Box>
                <Footer />
            </Flex>
        </>
    )
}