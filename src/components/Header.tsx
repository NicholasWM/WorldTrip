import {
    Image,
    Flex,
    Icon,
    Box,
    useBreakpointValue
} from '@chakra-ui/react'

import {IoIosArrowBack} from 'react-icons/io'

interface HeaderProps{
    showReturnButton?: boolean
}

export function Header({showReturnButton = false}: HeaderProps){

    return (
        <Flex 
            margin="0 auto"
            w="90%"
            align="center"
            justifyContent={showReturnButton ? "space-between" : 'center'}
            p={["4", "7"]}
        >
            {showReturnButton && (
                <Icon
                    w={["4", '8']} 
                    h={["4", "8"]} 
                    as={IoIosArrowBack}
                />
            )}
            <Image
                objectFit="fill"
                src='./images/logo.svg'
                alt="Segun Adebayo"
            />
            {showReturnButton && (
                <Box
                    w={["4", '8']} 
                    h={["4", "8"]} 
                ></Box>
            )}
        </Flex>
    )
}