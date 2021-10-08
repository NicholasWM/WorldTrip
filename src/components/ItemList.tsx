import {
  Image,
  Text,
  Stack,
  useBreakpointValue,
  Icon,
  Flex,
} from '@chakra-ui/react'
import { IoIosInformationCircleOutline } from 'react-icons/io'

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
        <Text>{label}</Text>
      )
    
}