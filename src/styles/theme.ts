import {extendTheme, Theme} from '@chakra-ui/react'

export const theme = extendTheme({
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
    colors: {
        gray:{
            "1000": '#000000', // Black Dark
            "900": '#181B23',
            "800": '#1F2029',
            "650": '#47585B', // Headings and Text Dark
            "600": 'rgba(153, 153, 153, 0.5)',  // info 50% Dark
            "500": '#999999', // Info Dark
            "400": '#797D9A',
            "300": '#9699B0',
            "200": '#B3B5C6',
            "100": '#DADADA', // Info Light
            "50": '#F5F8FA', // Headings and Text Light
        },
        yellow:{
            "900": "#FFBA08",
            "50": "rgba(255, 186, 8, 0.5)",
        },
    },
    textStyles:{
        'card': {
            fontFamily:"Barlow, sans-serif",
        }
    },
    fonts:{
        heading: 'Poppins, sans-serif',
        body: 'Poppins, sans-serif',
    },
    styles:{
        global:{
            body:{
                bg: 'gray.50',
                color:'gray.650',
                maxWidth: "1440px",
                margin: "0 auto"
                
            },
            ".slideTitle":{
                color:"gray.50",
            },
            ".slideTitle::hover":{
                color:'yellow.900'
            },
            ".slideSubtitle":{
                color:"gray.100"
            },
            ".swiper-button-next, .swiper-button-prev ":{
                color:"yellow.900",
            },
            ".swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet":{
                background:"#999999",
                opacity: 1,
                height:"16px",
                width:"16px",
            },
            ".swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet-active":{
                background:"yellow.900",
            },
        }
    }
})