import {
  Flex,
  Text,
} from '@chakra-ui/react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface SliderItemProps {
    bgImage:string,
    continent:string,
    desc:string
}
export function SliderItem({bgImage, continent, desc}: SliderItemProps){
    return (
        <Flex
            w="100vw"
            h={["250px","450px"]}
            maxH="450px"
            flexDir="column"
            objectFit="cover"
            backgroundImage={bgImage}
            alignItems="center"
            justifyContent="center"
        >
            <Text color="gray.50" lineHeight={['36px','72px']} fontSize={["24px", "48px"]} fontWeight="700">{continent}</Text>
            <Text color="gray.100" lineHeight={['21px', '24px']} fontSize={["14px", "24px"]} fontWeight="700">{desc}</Text>
        </Flex>
    )
}