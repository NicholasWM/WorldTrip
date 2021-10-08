import {
    Text,
    Box,
    Flex,
    Icon,
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
                {info && (
                    <Icon h="10px" w="10px" mx="5px" as={IoIosInformationCircleOutline}/>
                )}
            </Flex>
        </Box>
    )

}