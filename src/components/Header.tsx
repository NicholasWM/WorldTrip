import {
    Image,
    Flex,
    Icon,
    Box,
} from '@chakra-ui/react'

import {IoIosArrowBack} from 'react-icons/io'

interface HeaderProps{
    showReturnButton?: boolean
}

export function Header({showReturnButton = false}: HeaderProps){

    return (
        <Flex 
            w="80vw"
            align="center"
            justifyContent={showReturnButton ? "space-between" : 'center'}
            padding={["4", "7"]}
        >
            {showReturnButton && (
                <Icon
                    w={["4", '8']} 
                    h={["4", "8"]} 
                    as={IoIosArrowBack}
                />
            )}
            <Image
                w={["81px", "184px"]}
                h={["20px", "45.92"]}
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