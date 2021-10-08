import {
    Text,
    Box
} from '@chakra-ui/react'

interface InfoHighlightProps{
    number: number,
    label: string
}
export function InfoHighlight({label, number}:InfoHighlightProps){
    return (
        <Box textAlign="center" fontWeight="600">
            <Text lineHeight={["72px"]} fontSize={["48px"]} color="yellow.900">{number}</Text>
            <Text lineHeight={["36px"]} fontSize={["24px"]} color="gray.650">{label}</Text>
        </Box>
    )

}