import {
    Image,
    Flex,
    Icon,
    Box,
    IconButton,
} from '@chakra-ui/react'
import Link from 'next/link'
import {IoIosArrowBack} from 'react-icons/io'

interface HeaderProps{
    showReturnButton?: boolean
}

export function Header({showReturnButton = false}: HeaderProps){

    return (
        <Flex 
            w={["90vw","80vw"]}
            align="center"
            justifyContent={showReturnButton ? "space-between" : 'center'}
            padding={["4", "7"]}
        >
            {showReturnButton && (
                <Link href="/" passHref>
                    <IconButton 
                        aria-label="Voltar ao inicio"
                        as="a"
                        bg="inherit"
                        _hover={{ bg: "yellow.900", color:'white'}}
                        _active={{color:'gray.650'}}
                        icon={
                            <Icon
                                as={IoIosArrowBack}
                                w={["4", '8']}
                                h={["4", "8"]}
                            />
                        }
                    />
                </Link>
            )}
            <Image
                w={["81px", "184px"]}
                h={["20px", "45.92"]}
                objectFit="fill"
                src='/images/logo.svg'
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