import {
  Image,
  Text,
  Stack,
  useBreakpointValue,
  Icon,
  Flex,
} from '@chakra-ui/react'
import { GoPrimitiveDot } from 'react-icons/go'

interface ItemListProps {
  src: string,
  label: string
}
export function ItemList({label, src}: ItemListProps){
    const isWideVersion = useBreakpointValue({
      base: false,
      lg: true
    })
    return isWideVersion ? (
      <Stack spacing="24px" align="center">
        <Image 
          w={"85px"}
          h={"85px"}
          objectFit="fill"
          src={src}
        />
        <Text 
          fontSize={["24px"]}
          lineHeight={["36px"]}
          color="gray.650"
          fontWeight="600"
        >
          {label}
        </Text>
      </Stack>
      )
      :
      (
        <Flex align="center" justifyItems="center">
          <Icon color="yellow.900" m={0} w="15px" h="15px" as={GoPrimitiveDot}/>
          <Text color="gray.650" fontSize="20px" lineHeight="27px" fontWeight="500" textAlign="center">{label}</Text>
        </Flex>
      )
    
}