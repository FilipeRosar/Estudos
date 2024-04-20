import { Button } from "@chakra-ui/react";

interface IDButton {
    onClick: () => void
}

export const DButton = ({ onClick }: IDButton) => {
    return(
        <Button
            onClick={onClick}
            mt={'10px'}
            colorScheme='teal'
            size='md'
            type="submit">Entrar
        </Button>
    )
}

export default DButton;