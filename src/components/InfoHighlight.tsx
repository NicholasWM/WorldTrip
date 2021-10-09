import {
    Text,
    Box,
    Flex,
    Icon,
    Tooltip,
} from '@chakra-ui/react'

import { IoIosInformationCircleOutline } from 'react-icons/io'

interface InfoHighlightProps{
    number: number,
    label: string
    info?: {
        label:string
    }
}

export function InfoHighlight({label, number, info}:InfoHighlightProps){
    return (
        <Box textAlign={["left","center"]} fontWeight="600">
            <Text lineHeight={["36px", "72px"]} fontSize={["24px", "48px"]} color="yellow.900">{number}</Text>
            <Flex align="center">
                <Text lineHeight={["30px", "36px"]} fontSize={["17px", "24px"]} color="gray.650">{label}</Text>
                {!!info && (
                    <Tooltip label="Número de cidades que o Continente tem entre as +100 catalogadas">
                        <span style={{marginLeft:"5px"}}>
                            <Icon h={["10px","16px"]} w={["10px","16px"]} as={IoIosInformationCircleOutline}/>
                        </span>
                    </Tooltip>
                )}
            </Flex>
        </Box>
    )

}