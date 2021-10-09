let continentCountries = [
    `Asia,AS,"Afghanistan, Islamic Republic of",AF,AFG,4`,
`Europe,EU,"Albania, Republic of",AL,ALB,8`,
`Antarctica,AN,Antarctica (the territory South of 60 deg S),AQ,ATA,10`,
`Africa,AF,"Algeria, People's Democratic Republic of",DZ,DZA,12`,
`Oceania,OC,American Samoa,AS,ASM,16`,
`Europe,EU,"Andorra, Principality of",AD,AND,20`,
`Africa,AF,"Angola, Republic of",AO,AGO,24`,
`North America,NA,Antigua and Barbuda,AG,ATG,28`,
`Europe,EU,"Azerbaijan, Republic of",AZ,AZE,31`,
`Asia,AS,"Azerbaijan, Republic of",AZ,AZE,31`,
`South America,SA,"Argentina, Argentine Republic",AR,ARG,32`,
`Oceania,OC,"Australia, Commonwealth of",AU,AUS,36`,
`Europe,EU,"Austria, Republic of",AT,AUT,40`,
`North America,NA,"Bahamas, Commonwealth of the",BS,BHS,44`,
`Asia,AS,"Bahrain, Kingdom of",BH,BHR,48`,
`Asia,AS,"Bangladesh, People's Republic of",BD,BGD,50`,
`Europe,EU,"Armenia, Republic of",AM,ARM,51`,
`Asia,AS,"Armenia, Republic of",AM,ARM,51`,
`North America,NA,Barbados,BB,BRB,52`,
`Europe,EU,"Belgium, Kingdom of",BE,BEL,56`,
`North America,NA,Bermuda,BM,BMU,60`,
`Asia,AS,"Bhutan, Kingdom of",BT,BTN,64`,
`South America,SA,"Bolivia, Republic of",BO,BOL,68`,
`Europe,EU,Bosnia and Herzegovina,BA,BIH,70`,
`Africa,AF,"Botswana, Republic of",BW,BWA,72`,
`Antarctica,AN,Bouvet Island (Bouvetoya),BV,BVT,74`,
`South America,SA,"Brazil, Federative Republic of",BR,BRA,76`,
`North America,NA,Belize,BZ,BLZ,84`,
`Asia,AS,British Indian Ocean Territory (Chagos Archipelago),IO,IOT,86`,
`Oceania,OC,Solomon Islands,SB,SLB,90`,
`North America,NA,British Virgin Islands,VG,VGB,92`,
`Asia,AS,Brunei Darussalam,BN,BRN,96`,
`Europe,EU,"Bulgaria, Republic of",BG,BGR,100`,
`Asia,AS,"Myanmar, Union of",MM,MMR,104`,
`Africa,AF,"Burundi, Republic of",BI,BDI,108`,
`Europe,EU,"Belarus, Republic of",BY,BLR,112`,
`Asia,AS,"Cambodia, Kingdom of",KH,KHM,116`,
`Africa,AF,"Cameroon, Republic of",CM,CMR,120`,
`North America,NA,Canada,CA,CAN,124`,
`Africa,AF,"Cape Verde, Republic of",CV,CPV,132`,
`North America,NA,Cayman Islands,KY,CYM,136`,
`Africa,AF,Central African Republic,CF,CAF,140`,
`Asia,AS,"Sri Lanka, Democratic Socialist Republic of",LK,LKA,144`,
`Africa,AF,"Chad, Republic of",TD,TCD,148`,
`South America,SA,"Chile, Republic of",CL,CHL,152`,
`Asia,AS,"China, People's Republic of",CN,CHN,156`,
`Asia,AS,Taiwan,TW,TWN,158`,
`Asia,AS,Christmas Island,CX,CXR,162`,
`Asia,AS,Cocos (Keeling) Islands,CC,CCK,166`,
`South America,SA,"Colombia, Republic of",CO,COL,170`,
`Africa,AF,"Comoros, Union of the",KM,COM,174`,
`Africa,AF,Mayotte,YT,MYT,175`,
`Africa,AF,"Congo, Republic of the",CG,COG,178`,
`Africa,AF,"Congo, Democratic Republic of the",CD,COD,180`,
`Oceania,OC,Cook Islands,CK,COK,184`,
`North America,NA,"Costa Rica, Republic of",CR,CRI,188`,
`Europe,EU,"Croatia, Republic of",HR,HRV,191`,
`North America,NA,"Cuba, Republic of",CU,CUB,192`,
`Europe,EU,"Cyprus, Republic of",CY,CYP,196`,
`Asia,AS,"Cyprus, Republic of",CY,CYP,196`,
`Europe,EU,Czech Republic,CZ,CZE,203`,
`Africa,AF,"Benin, Republic of",BJ,BEN,204`,
`Europe,EU,"Denmark, Kingdom of",DK,DNK,208`,
`North America,NA,"Dominica, Commonwealth of",DM,DMA,212`,
`North America,NA,Dominican Republic,DO,DOM,214`,
`South America,SA,"Ecuador, Republic of",EC,ECU,218`,
`North America,NA,"El Salvador, Republic of",SV,SLV,222`,
`Africa,AF,"Equatorial Guinea, Republic of",GQ,GNQ,226`,
`Africa,AF,"Ethiopia, Federal Democratic Republic of",ET,ETH,231`,
`Africa,AF,"Eritrea, State of",ER,ERI,232`,
`Europe,EU,"Estonia, Republic of",EE,EST,233`,
`Europe,EU,Faroe Islands,FO,FRO,234`,
`South America,SA,Falkland Islands (Malvinas),FK,FLK,238`,
`Antarctica,AN,South Georgia and the South Sandwich Islands,GS,SGS,239`,
`Oceania,OC,"Fiji, Republic of the Fiji Islands",FJ,FJI,242`,
`Europe,EU,"Finland, Republic of",FI,FIN,246`,
`Europe,EU,Ã…land Islands,AX,ALA,248`,
`Europe,EU,"France, French Republic",FR,FRA,250`,
`South America,SA,French Guiana,GF,GUF,254`,
`Oceania,OC,French Polynesia,PF,PYF,258`,
`Antarctica,AN,French Southern Territories,TF,ATF,260`,
`Africa,AF,"Djibouti, Republic of",DJ,DJI,262`,
`Africa,AF,"Gabon, Gabonese Republic",GA,GAB,266`,
`Europe,EU,Georgia,GE,GEO,268`,
`Asia,AS,Georgia,GE,GEO,268`,
`Africa,AF,"Gambia, Republic of the",GM,GMB,270`,
`Asia,AS,"Palestinian Territory, Occupied",PS,PSE,275`,
`Europe,EU,"Germany, Federal Republic of",DE,DEU,276`,
`Africa,AF,"Ghana, Republic of",GH,GHA,288`,
`Europe,EU,Gibraltar,GI,GIB,292`,
`Oceania,OC,"Kiribati, Republic of",KI,KIR,296`,
`Europe,EU,"Greece, Hellenic Republic",GR,GRC,300`,
`North America,NA,Greenland,GL,GRL,304`,
`North America,NA,Grenada,GD,GRD,308`,
`North America,NA,Guadeloupe,GP,GLP,312`,
`Oceania,OC,Guam,GU,GUM,316`,
`North America,NA,"Guatemala, Republic of",GT,GTM,320`,
`Africa,AF,"Guinea, Republic of",GN,GIN,324`,
`South America,SA,"Guyana, Co-operative Republic of",GY,GUY,328`,
`North America,NA,"Haiti, Republic of",HT,HTI,332`,
`Antarctica,AN,Heard Island and McDonald Islands,HM,HMD,334`,
`Europe,EU,Holy See (Vatican City State),VA,VAT,336`,
`North America,NA,"Honduras, Republic of",HN,HND,340`,
`Asia,AS,"Hong Kong, Special Administrative Region of China",HK,HKG,344`,
`Europe,EU,"Hungary, Republic of",HU,HUN,348`,
`Europe,EU,"Iceland, Republic of",IS,ISL,352`,
`Asia,AS,"India, Republic of",IN,IND,356`,
`Asia,AS,"Indonesia, Republic of",ID,IDN,360`,
`Asia,AS,"Iran, Islamic Republic of",IR,IRN,364`,
`Asia,AS,"Iraq, Republic of",IQ,IRQ,368`,
`Europe,EU,Ireland,IE,IRL,372`,
`Asia,AS,"Israel, State of",IL,ISR,376`,
`Europe,EU,"Italy, Italian Republic",IT,ITA,380`,
`Africa,AF,"Cote d'Ivoire, Republic of",CI,CIV,384`,
`North America,NA,Jamaica,JM,JAM,388`,
`Asia,AS,Japan,JP,JPN,392`,
`Europe,EU,"Kazakhstan, Republic of",KZ,KAZ,398`,
`Asia,AS,"Kazakhstan, Republic of",KZ,KAZ,398`,
`Asia,AS,"Jordan, Hashemite Kingdom of",JO,JOR,400`,
`Africa,AF,"Kenya, Republic of",KE,KEN,404`,
`Asia,AS,"Korea, Democratic People's Republic of",KP,PRK,408`,
`Asia,AS,"Korea, Republic of",KR,KOR,410`,
`Asia,AS,"Kuwait, State of",KW,KWT,414`,
`Asia,AS,Kyrgyz Republic,KG,KGZ,417`,
`Asia,AS,Lao People's Democratic Republic,LA,LAO,418`,
`Asia,AS,"Lebanon, Lebanese Republic",LB,LBN,422`,
`Africa,AF,"Lesotho, Kingdom of",LS,LSO,426`,
`Europe,EU,"Latvia, Republic of",LV,LVA,428`,
`Africa,AF,"Liberia, Republic of",LR,LBR,430`,
`Africa,AF,Libyan Arab Jamahiriya,LY,LBY,434`,
`Europe,EU,"Liechtenstein, Principality of",LI,LIE,438`,
`Europe,EU,"Lithuania, Republic of",LT,LTU,440`,
`Europe,EU,"Luxembourg, Grand Duchy of",LU,LUX,442`,
`Asia,AS,"Macao, Special Administrative Region of China",MO,MAC,446`,
`Africa,AF,"Madagascar, Republic of",MG,MDG,450`,
`Africa,AF,"Malawi, Republic of",MW,MWI,454`,
`Asia,AS,Malaysia,MY,MYS,458`,
`Asia,AS,"Maldives, Republic of",MV,MDV,462`,
`Africa,AF,"Mali, Republic of",ML,MLI,466`,
`Europe,EU,"Malta, Republic of",MT,MLT,470`,
`North America,NA,Martinique,MQ,MTQ,474`,
`Africa,AF,"Mauritania, Islamic Republic of",MR,MRT,478`,
`Africa,AF,"Mauritius, Republic of",MU,MUS,480`,
`North America,NA,"Mexico, United Mexican States",MX,MEX,484`,
`Europe,EU,"Monaco, Principality of",MC,MCO,492`,
`Asia,AS,Mongolia,MN,MNG,496`,
`Europe,EU,"Moldova, Republic of",MD,MDA,498`,
`Europe,EU,"Montenegro, Republic of",ME,MNE,499`,
`North America,NA,Montserrat,MS,MSR,500`,
`Africa,AF,"Morocco, Kingdom of",MA,MAR,504`,
`Africa,AF,"Mozambique, Republic of",MZ,MOZ,508`,
`Asia,AS,"Oman, Sultanate of",OM,OMN,512`,
`Africa,AF,"Namibia, Republic of",NA,NAM,516`,
`Oceania,OC,"Nauru, Republic of",NR,NRU,520`,
`Asia,AS,"Nepal, State of",NP,NPL,524`,
`Europe,EU,"Netherlands, Kingdom of the",NL,NLD,528`,
`North America,NA,Netherlands Antilles,AN,ANT,530`,
`North America,NA,CuraÃ§ao,CW,CUW,531`,
`North America,NA,Aruba,AW,ABW,533`,
`North America,NA,Sint Maarten (Netherlands),SX,SXM,534`,
`North America,NA,"Bonaire, Sint Eustatius and Saba",BQ,BES,535`,
`Oceania,OC,New Caledonia,NC,NCL,540`,
`Oceania,OC,"Vanuatu, Republic of",VU,VUT,548`,
`Oceania,OC,New Zealand,NZ,NZL,554`,
`North America,NA,"Nicaragua, Republic of",NI,NIC,558`,
`Africa,AF,"Niger, Republic of",NE,NER,562`,
`Africa,AF,"Nigeria, Federal Republic of",NG,NGA,566`,
`Oceania,OC,Niue,NU,NIU,570`,
`Oceania,OC,Norfolk Island,NF,NFK,574`,
`Europe,EU,"Norway, Kingdom of",NO,NOR,578`,
`Oceania,OC,"Northern Mariana Islands, Commonwealth of the",MP,MNP,580`,
`Oceania,OC,United States Minor Outlying Islands,UM,UMI,581`,
`North America,NA,United States Minor Outlying Islands,UM,UMI,581`,
`Oceania,OC,"Micronesia, Federated States of",FM,FSM,583`,
`Oceania,OC,"Marshall Islands, Republic of the",MH,MHL,584`,
`Oceania,OC,"Palau, Republic of",PW,PLW,585`,
`Asia,AS,"Pakistan, Islamic Republic of",PK,PAK,586`,
`North America,NA,"Panama, Republic of",PA,PAN,591`,
`Oceania,OC,"Papua New Guinea, Independent State of",PG,PNG,598`,
`South America,SA,"Paraguay, Republic of",PY,PRY,600`,
`South America,SA,"Peru, Republic of",PE,PER,604`,
`Asia,AS,"Philippines, Republic of the",PH,PHL,608`,
`Oceania,OC,Pitcairn Islands,PN,PCN,612`,
`Europe,EU,"Poland, Republic of",PL,POL,616`,
`Europe,EU,"Portugal, Portuguese Republic",PT,PRT,620`,
`Africa,AF,"Guinea-Bissau, Republic of",GW,GNB,624`,
`Asia,AS,"Timor-Leste, Democratic Republic of",TL,TLS,626`,
`North America,NA,"Puerto Rico, Commonwealth of",PR,PRI,630`,
`Asia,AS,"Qatar, State of",QA,QAT,634`,
`Africa,AF,Reunion,RE,REU,638`,
`Europe,EU,Romania,RO,ROU,642`,
`Europe,EU,Russian Federation,RU,RUS,643`,
`Asia,AS,Russian Federation,RU,RUS,643`,
`Africa,AF,"Rwanda, Republic of",RW,RWA,646`,
`North America,NA,Saint Barthelemy,BL,BLM,652`,
`Africa,AF,Saint Helena,SH,SHN,654`,
`North America,NA,"Saint Kitts and Nevis, Federation of",KN,KNA,659`,
`North America,NA,Anguilla,AI,AIA,660`,
`North America,NA,Saint Lucia,LC,LCA,662`,
`North America,NA,Saint Martin,MF,MAF,663`,
`North America,NA,Saint Pierre and Miquelon,PM,SPM,666`,
`North America,NA,Saint Vincent and the Grenadines,VC,VCT,670`,
`Europe,EU,"San Marino, Republic of",SM,SMR,674`,
`Africa,AF,"Sao Tome and Principe, Democratic Republic of",ST,STP,678`,
`Asia,AS,"Saudi Arabia, Kingdom of",SA,SAU,682`,
`Africa,AF,"Senegal, Republic of",SN,SEN,686`,
`Europe,EU,"Serbia, Republic of",RS,SRB,688`,
`Africa,AF,"Seychelles, Republic of",SC,SYC,690`,
`Africa,AF,"Sierra Leone, Republic of",SL,SLE,694`,
`Asia,AS,"Singapore, Republic of",SG,SGP,702`,
`Europe,EU,Slovakia (Slovak Republic),SK,SVK,703`,
`Asia,AS,"Vietnam, Socialist Republic of",VN,VNM,704`,
`Europe,EU,"Slovenia, Republic of",SI,SVN,705`,
`Africa,AF,"Somalia, Somali Republic",SO,SOM,706`,
`Africa,AF,"South Africa, Republic of",ZA,ZAF,710`,
`Africa,AF,"Zimbabwe, Republic of",ZW,ZWE,716`,
`Europe,EU,"Spain, Kingdom of",ES,ESP,724`,
`Africa,AF,South Sudan,SS,SSD,728`,
`Africa,AF,Western Sahara,EH,ESH,732`,
`Africa,AF,"Sudan, Republic of",SD,SDN,736`,
`South America,SA,"Suriname, Republic of",SR,SUR,740`,
`Europe,EU,Svalbard & Jan Mayen Islands,SJ,SJM,744`,
`Africa,AF,"Swaziland, Kingdom of",SZ,SWZ,748`,
`Europe,EU,"Sweden, Kingdom of",SE,SWE,752`,
`Europe,EU,"Switzerland, Swiss Confederation",CH,CHE,756`,
`Asia,AS,Syrian Arab Republic,SY,SYR,760`,
`Asia,AS,"Tajikistan, Republic of",TJ,TJK,762`,
`Asia,AS,"Thailand, Kingdom of",TH,THA,764`,
`Africa,AF,"Togo, Togolese Republic",TG,TGO,768`,
`Oceania,OC,Tokelau,TK,TKL,772`,
`Oceania,OC,"Tonga, Kingdom of",TO,TON,776`,
`North America,NA,"Trinidad and Tobago, Republic of",TT,TTO,780`,
`Asia,AS,United Arab Emirates,AE,ARE,784`,
`Africa,AF,"Tunisia, Tunisian Republic",TN,TUN,788`,
`Europe,EU,"Turkey, Republic of",TR,TUR,792`,
`Asia,AS,"Turkey, Republic of",TR,TUR,792`,
`Asia,AS,Turkmenistan,TM,TKM,795`,
`North America,NA,Turks and Caicos Islands,TC,TCA,796`,
`Oceania,OC,Tuvalu,TV,TUV,798`,
`Africa,AF,"Uganda, Republic of",UG,UGA,800`,
`Europe,EU,Ukraine,UA,UKR,804`,
`Europe,EU,"Macedonia, The Former Yugoslav Republic of",MK,MKD,807`,
`Africa,AF,"Egypt, Arab Republic of",EG,EGY,818`,
`Europe,EU,United Kingdom of Great Britain & Northern Ireland,GB,GBR,826`,
`Europe,EU,"Guernsey, Bailiwick of",GG,GGY,831`,
`Europe,EU,"Jersey, Bailiwick of",JE,JEY,832`,
`Europe,EU,Isle of Man,IM,IMN,833`,
`Africa,AF,"Tanzania, United Republic of",TZ,TZA,834`,
`North America,NA,United States of America,US,USA,840`,
`North America,NA,United States Virgin Islands,VI,VIR,850`,
`Africa,AF,Burkina Faso,BF,BFA,854`,
`South America,SA,"Uruguay, Eastern Republic of",UY,URY,858`,
`Asia,AS,"Uzbekistan, Republic of",UZ,UZB,860`,
`South America,SA,"Venezuela, Bolivarian Republic of",VE,VEN,862`,
`Oceania,OC,Wallis and Futuna,WF,WLF,876`,
`Oceania,OC,"Samoa, Independent State of",WS,WSM,882`,
`Asia,AS,Yemen,YE,YEM,887`,
`Africa,AF,"Zambia, Republic of",ZM,ZMB,894`,
`Oceania,OC,Disputed Territory,XX,,`,
`Asia,AS,Iraq-Saudi Arabia Neutral Zone,XE,,`,
`Asia,AS,United Nations Neutral Zone,XD,,`,
`Asia,AS,Spratly Islands,XS,,`,
].map(item => {
    const [continent_name, code, country_name] = item.split(',')
    return {continent: continent_name.replace('"', ""), country:country_name.replace('"', "")}
})
let citiesCountry = [
    {
      "id": "1",
      "name": "Hong Kong",
      "country": "China (SAR)"
    },
    {
      "id": "2",
      "name": "Bangkok",
      "country": "Thailand"
    },
    {
      "id": "3",
      "name": "London",
      "country": "United Kingdom"
    },
    {
      "id": "4",
      "name": "Macau",
      "country": "China (SAR)"
    },
    {
      "id": "5",
      "name": "Singapore",
      "country": "Singapore"
    },
    {
      "id": "6",
      "name": "Paris",
      "country": "France"
    },
    {
      "id": "7",
      "name": "Dubai",
      "country": "United Arab Emirates"
    },
    {
      "id": "8",
      "name": "New York City",
      "country": "USA"
    },
    {
      "id": "9",
      "name": "Kuala Lumpur",
      "country": "Malaysia"
    },
    {
      "id": "10",
      "name": "Istanbul",
      "country": "Turkey"
    },
    {
      "id": "11",
      "name": "Delhi",
      "country": "India"
    },
    {
      "id": "12",
      "name": "Antalya",
      "country": "Turkey"
    },
    {
      "id": "13",
      "name": "Shenzhen",
      "country": "China"
    },
    {
      "id": "14",
      "name": "Mumbai",
      "country": "India"
    },
    {
      "id": "15",
      "name": "Phuket",
      "country": "Thailand"
    },
    {
      "id": "16",
      "name": "Rome",
      "country": "Italy"
    },
    {
      "id": "17",
      "name": "Tokyo",
      "country": "Japan"
    },
    {
      "id": "18",
      "name": "Pattaya",
      "country": "Thailand"
    },
    {
      "id": "19",
      "name": "Taipei",
      "country": "Taiwan, China"
    },
    {
      "id": "20",
      "name": "Mecca",
      "country": "Saudi Arabia"
    },
    {
      "id": "21",
      "name": "Guangzhou",
      "country": "China"
    },
    {
      "id": "22",
      "name": "Prague",
      "country": "Czechia"
    },
    {
      "id": "23",
      "name": "Medina",
      "country": "Saudi Arabia"
    },
    {
      "id": "24",
      "name": "Seoul",
      "country": "South Korea"
    },
    {
      "id": "25",
      "name": "Amsterdam",
      "country": "Netherlands"
    },
    {
      "id": "26",
      "name": "Agra",
      "country": "India"
    },
    {
      "id": "27",
      "name": "Miami",
      "country": "USA"
    },
    {
      "id": "28",
      "name": "Osaka",
      "country": "Japan"
    },
    {
      "id": "29",
      "name": "Los Angeles",
      "country": "USA"
    },
    {
      "id": "30",
      "name": "Shanghai",
      "country": "China"
    },
    {
      "id": "31",
      "name": "Ho Chi Minh City",
      "country": "Vietnam"
    },
    {
      "id": "32",
      "name": "Denpasar",
      "country": "Indonesia"
    },
    {
      "id": "33",
      "name": "Barcelona",
      "country": "Spain"
    },
    {
      "id": "34",
      "name": "Las Vegas",
      "country": "USA"
    },
    {
      "id": "35",
      "name": "Milan",
      "country": "Italy"
    },
    {
      "id": "36",
      "name": "Chennai",
      "country": "India"
    },
    {
      "id": "37",
      "name": "Vienna",
      "country": "Austria"
    },
    {
      "id": "38",
      "name": "Johor Bahru",
      "country": "Malaysia"
    },
    {
      "id": "39",
      "name": "Jaipur",
      "country": "India"
    },
    {
      "id": "40",
      "name": "Cancun",
      "country": "Mexico"
    },
    {
      "id": "41",
      "name": "Berlin",
      "country": "Germany"
    },
    {
      "id": "42",
      "name": "Cairo",
      "country": "Egypt"
    },
    {
      "id": "43",
      "name": "Athens",
      "country": "Greece"
    },
    {
      "id": "44",
      "name": "Orlando",
      "country": "USA"
    },
    {
      "id": "45",
      "name": "Moscow",
      "country": "Russia"
    },
    {
      "id": "46",
      "name": "Venice",
      "country": "Italy"
    },
    {
      "id": "47",
      "name": "Madrid",
      "country": "Spain"
    },
    {
      "id": "48",
      "name": "Ha Long",
      "country": "Vietnam"
    },
    {
      "id": "49",
      "name": "Riyadh",
      "country": "Saudi Arabia"
    },
    {
      "id": "50",
      "name": "Dublin",
      "country": "Ireland"
    },
    {
      "id": "51",
      "name": "Florence",
      "country": "Italy"
    },
    {
      "id": "52",
      "name": "Ha Noi",
      "country": "Vietnam"
    },
    {
      "id": "53",
      "name": "Toronto",
      "country": "Canada"
    },
    {
      "id": "54",
      "name": "Johannesburg",
      "country": "South Africa"
    },
    {
      "id": "55",
      "name": "Sydney",
      "country": "Australia"
    },
    {
      "id": "56",
      "name": "Munich",
      "country": "Germany"
    },
    {
      "id": "57",
      "name": "Jakarta",
      "country": "Indonesia"
    },
    {
      "id": "58",
      "name": "Beijing",
      "country": "China"
    },
    {
      "id": "59",
      "name": "St. Petersburg",
      "country": "Russia"
    },
    {
      "id": "60",
      "name": "Brussels",
      "country": "Belgium"
    },
    {
      "id": "61",
      "name": "Jerusalem",
      "country": "Israel"
    },
    {
      "id": "62",
      "name": "Budapest",
      "country": "Hungary"
    },
    {
      "id": "63",
      "name": "Lisbon",
      "country": "Portugal"
    },
    {
      "id": "64",
      "name": "Dammam",
      "country": "Saudi Arabia"
    },
    {
      "id": "65",
      "name": "Penang Island",
      "country": "Malaysia"
    },
    {
      "id": "66",
      "name": "Heraklion",
      "country": "Greece"
    },
    {
      "id": "67",
      "name": "Kyoto",
      "country": "Japan"
    },
    {
      "id": "68",
      "name": "Zhuhai",
      "country": "China"
    },
    {
      "id": "69",
      "name": "Vancouver",
      "country": "Canada"
    },
    {
      "id": "70",
      "name": "Chiang Mai",
      "country": "Thailand"
    },
    {
      "id": "71",
      "name": "Copenhagen",
      "country": "Denmark"
    },
    {
      "id": "72",
      "name": "San Francisco",
      "country": "USA"
    },
    {
      "id": "73",
      "name": "Melbourne",
      "country": "Australia"
    },
    {
      "id": "74",
      "name": "Krakow",
      "country": "Poland"
    },
    {
      "id": "75",
      "name": "Marrakech",
      "country": "Morocco"
    },
    {
      "id": "76",
      "name": "Kolkatta",
      "country": "India"
    },
    {
      "id": "77",
      "name": "Cebu",
      "country": "Philippines"
    },
    {
      "id": "78",
      "name": "Auckland",
      "country": "New Zealand"
    },
    {
      "id": "79",
      "name": "Tel Aviv",
      "country": "Israel"
    },
    {
      "id": "80",
      "name": "Guilin",
      "country": "China"
    },
    {
      "id": "81",
      "name": "Honolulu",
      "country": "USA"
    },
    {
      "id": "82",
      "name": "Hurgada",
      "country": "Egypt"
    },
    {
      "id": "83",
      "name": "Warsaw",
      "country": "Poland"
    },
    {
      "id": "84",
      "name": "Mugla",
      "country": "Turkey"
    },
    {
      "id": "85",
      "name": "Buenos Aires City",
      "country": "Argentina"
    },
    {
      "id": "86",
      "name": "Chiba",
      "country": "Japan"
    },
    {
      "id": "87",
      "name": "Frankfurt",
      "country": "Germany"
    },
    {
      "id": "88",
      "name": "Stockholm",
      "country": "Sweden"
    },
    {
      "id": "89",
      "name": "Lima",
      "country": "Peru"
    },
    {
      "id": "90",
      "name": "Da Nang",
      "country": "Vietnam"
    },
    {
      "id": "91",
      "name": "Batam",
      "country": "Indonesia"
    },
    {
      "id": "92",
      "name": "Nice",
      "country": "France"
    },
    {
      "id": "93",
      "name": "Fukuoka",
      "country": "Japan"
    },
    {
      "id": "94",
      "name": "Abu Dhabi",
      "country": "United Arab Emirates"
    },
    {
      "id": "95",
      "name": "Jeju",
      "country": "South Korea"
    },
    {
      "id": "96",
      "name": "Porto",
      "country": "Portugal"
    },
    {
      "id": "97",
      "name": "Rhodes",
      "country": "Greece"
    },
    {
      "id": "98",
      "name": "Rio de Janeiro",
      "country": "Brazil"
    },
    {
      "id": "99",
      "name": "Krabi",
      "country": "Thailand"
    },
    {
      "id": "100",
      "name": "Bangalore",
      "country": "India"
    }
]

let result = citiesCountry.map(city => {
    const continent = continentCountries.find(continent => city.country.includes(continent.country))
    return {...city, continent:continent?.continent}
})

// Continent_Name,
// Continent_Code,
// Country_Name,
// Two_Letter_Country_Code,
// Three_Letter_Country_Code,
// Country_Number

const formatedData = [
    {
      id: '1',
      name: 'Hong Kong',
      country: 'China (SAR)',
      continent: 'Asia'
    },
    { id: '2', name: 'Bangkok', country: 'Thailand', continent: 'Asia' },
    {
      id: '3',
      name: 'London',
      country: 'United Kingdom',
      continent: 'Europe'
    },
    { id: '4', name: 'Macau', country: 'China (SAR)', continent: 'Asia' },
    {
      id: '5',
      name: 'Singapore',
      country: 'Singapore',
      continent: 'Asia'
    },
    { id: '6', name: 'Paris', country: 'France', continent: 'Europe' },
    {
      id: '7',
      name: 'Dubai',
      country: 'United Arab Emirates',
      continent: 'Asia'
    },
    {
      id: '8',
      name: 'New York City',
      country: 'USA',
      continent: 'North America'
    },
    {
      id: '9',
      name: 'Kuala Lumpur',
      country: 'Malaysia',
      continent: 'Asia'
    },
    {
      id: '10',
      name: 'Istanbul',
      country: 'Turkey',
      continent: 'Europe'
    },
    { id: '11', name: 'Delhi', country: 'India', continent: 'Asia' },
    { id: '12', name: 'Antalya', country: 'Turkey', continent: 'Europe' },
    { id: '13', name: 'Shenzhen', country: 'China', continent: 'Asia' },
    { id: '14', name: 'Mumbai', country: 'India', continent: 'Asia' },
    { id: '15', name: 'Phuket', country: 'Thailand', continent: 'Asia' },
    { id: '16', name: 'Rome', country: 'Italy', continent: 'Europe' },
    { id: '17', name: 'Tokyo', country: 'Japan', continent: 'Asia' },
    { id: '18', name: 'Pattaya', country: 'Thailand', continent: 'Asia' },
    {
      id: '19',
      name: 'Taipei',
      country: 'Taiwan, China',
      continent: 'Asia'
    },
    {
      id: '20',
      name: 'Mecca',
      country: 'Saudi Arabia',
      continent: 'Asia'
    },
    { id: '21', name: 'Guangzhou', country: 'China', continent: 'Asia' },
    {
      id: '22',
      name: 'Prague',
      country: 'Czechia',
      continent: 'Europe'
    },
    {
      id: '23',
      name: 'Medina',
      country: 'Saudi Arabia',
      continent: 'Asia'
    },
    {
      id: '24',
      name: 'Seoul',
      country: 'South Korea',
      continent: 'Asia'
    },
    {
      id: '25',
      name: 'Amsterdam',
      country: 'Netherlands',
      continent: 'Europe'
    },
    { id: '26', name: 'Agra', country: 'India', continent: 'Asia' },
    { id: '27', name: 'Miami', country: 'USA', continent: 'North America' },
    { id: '28', name: 'Osaka', country: 'Japan', continent: 'Asia' },
    {
      id: '29',
      name: 'Los Angeles',
      country: 'USA',
      continent: 'North America'
    },
    { id: '30', name: 'Shanghai', country: 'China', continent: 'Asia' },
    {
      id: '31',
      name: 'Ho Chi Minh City',
      country: 'Vietnam',
      continent: 'Asia'
    },
    {
      id: '32',
      name: 'Denpasar',
      country: 'Indonesia',
      continent: 'Asia'
    },
    {
      id: '33',
      name: 'Barcelona',
      country: 'Spain',
      continent: 'Europe'
    },
    { id: '34', name: 'Las Vegas', country: 'USA', continent: 'North America' },
    { id: '35', name: 'Milan', country: 'Italy', continent: 'Europe' },
    { id: '36', name: 'Chennai', country: 'India', continent: 'Asia' },
    { id: '37', name: 'Vienna', country: 'Austria', continent: 'Europe' },
    {
      id: '38',
      name: 'Johor Bahru',
      country: 'Malaysia',
      continent: 'Asia'
    },
    { id: '39', name: 'Jaipur', country: 'India', continent: 'Asia' },
    {
      id: '40',
      name: 'Cancun',
      country: 'Mexico',
      continent: 'North America'
    },
    { id: '41', name: 'Berlin', country: 'Germany', continent: 'Europe' },
    { id: '42', name: 'Cairo', country: 'Egypt', continent: 'Africa' },
    { id: '43', name: 'Athens', country: 'Greece', continent: 'Europe' },
    { id: '44', name: 'Orlando', country: 'USA', continent: 'North America' },
    { id: '45', name: 'Moscow', country: 'Russia', continent: 'Asia' },
    { id: '46', name: 'Venice', country: 'Italy', continent: 'Europe' },
    { id: '47', name: 'Madrid', country: 'Spain', continent: 'Europe' },
    { id: '48', name: 'Ha Long', country: 'Vietnam', continent: 'Asia' },
    {
      id: '49',
      name: 'Riyadh',
      country: 'Saudi Arabia',
      continent: 'Asia'
    },
    { id: '50', name: 'Dublin', country: 'Ireland', continent: 'Europe' },
    { id: '51', name: 'Florence', country: 'Italy', continent: 'Europe' },
    { id: '52', name: 'Ha Noi', country: 'Vietnam', continent: 'Asia' },
    {
      id: '53',
      name: 'Toronto',
      country: 'Canada',
      continent: 'North America'
    },
    {
      id: '54',
      name: 'Johannesburg',
      country: 'South Africa',
      continent: 'Africa'
    },
    {
      id: '55',
      name: 'Sydney',
      country: 'Australia',
      continent: 'Oceania'
    },
    { id: '56', name: 'Munich', country: 'Germany', continent: 'Europe' },
    {
      id: '57',
      name: 'Jakarta',
      country: 'Indonesia',
      continent: 'Asia'
    },
    { id: '58', name: 'Beijing', country: 'China', continent: 'Asia' },
    {
      id: '59',
      name: 'St. Petersburg',
      country: 'Russia',
      continent: 'Asia'
    },
    {
      id: '60',
      name: 'Brussels',
      country: 'Belgium',
      continent: 'Europe'
    },
    { id: '61', name: 'Jerusalem', country: 'Israel', continent: 'Asia' },
    {
      id: '62',
      name: 'Budapest',
      country: 'Hungary',
      continent: 'Europe'
    },
    {
      id: '63',
      name: 'Lisbon',
      country: 'Portugal',
      continent: 'Europe'
    },
    {
      id: '64',
      name: 'Dammam',
      country: 'Saudi Arabia',
      continent: 'Asia'
    },
    {
      id: '65',
      name: 'Penang Island',
      country: 'Malaysia',
      continent: 'Asia'
    },
    {
      id: '66',
      name: 'Heraklion',
      country: 'Greece',
      continent: 'Europe'
    },
    { id: '67', name: 'Kyoto', country: 'Japan', continent: 'Asia' },
    { id: '68', name: 'Zhuhai', country: 'China', continent: 'Asia' },
    {
      id: '69',
      name: 'Vancouver',
      country: 'Canada',
      continent: 'North America'
    },
    {
      id: '70',
      name: 'Chiang Mai',
      country: 'Thailand',
      continent: 'Asia'
    },
    {
      id: '71',
      name: 'Copenhagen',
      country: 'Denmark',
      continent: 'Europe'
    },
    {
      id: '72',
      name: 'San Francisco',
      country: 'USA',
      continent: 'North America'
    },
    {
      id: '73',
      name: 'Melbourne',
      country: 'Australia',
      continent: 'Oceania'
    },
    { id: '74', name: 'Krakow', country: 'Poland', continent: 'Europe' },
    {
      id: '75',
      name: 'Marrakech',
      country: 'Morocco',
      continent: 'Africa'
    },
    { id: '76', name: 'Kolkatta', country: 'India', continent: 'Asia' },
    { id: '77', name: 'Cebu', country: 'Philippines', continent: 'Asia' },
    {
      id: '78',
      name: 'Auckland',
      country: 'New Zealand',
      continent: 'Oceania'
    },
    { id: '79', name: 'Tel Aviv', country: 'Israel', continent: 'Asia' },
    { id: '80', name: 'Guilin', country: 'China', continent: 'Asia' },
    { id: '81', name: 'Honolulu', country: 'USA', continent: 'North America' },
    { id: '82', name: 'Hurgada', country: 'Egypt', continent: 'Africa' },
    { id: '83', name: 'Warsaw', country: 'Poland', continent: 'Europe' },
    { id: '84', name: 'Mugla', country: 'Turkey', continent: 'Europe' },
    {
      id: '85',
      name: 'Buenos Aires City',
      country: 'Argentina',
      continent: 'South America'
    },
    { id: '86', name: 'Chiba', country: 'Japan', continent: 'Asia' },
    {
      id: '87',
      name: 'Frankfurt',
      country: 'Germany',
      continent: 'Europe'
    },
    {
      id: '88',
      name: 'Stockholm',
      country: 'Sweden',
      continent: 'Europe'
    },
    {
      id: '89',
      name: 'Lima',
      country: 'Peru',
      continent: 'South America'
    },
    { id: '90', name: 'Da Nang', country: 'Vietnam', continent: 'Asia' },
    { id: '91', name: 'Batam', country: 'Indonesia', continent: 'Asia' },
    { id: '92', name: 'Nice', country: 'France', continent: 'Europe' },
    { id: '93', name: 'Fukuoka', country: 'Japan', continent: 'Asia' },
    {
      id: '94',
      name: 'Abu Dhabi',
      country: 'United Arab Emirates',
      continent: 'Asia'
    },
    { id: '95', name: 'Jeju', country: 'South Korea', continent: 'Asia' },
    { id: '96', name: 'Porto', country: 'Portugal', continent: 'Europe' },
    { id: '97', name: 'Rhodes', country: 'Greece', continent: 'Europe' },
    {
      id: '98',
      name: 'Rio de Janeiro',
      country: 'Brazil',
      continent: 'South America'
    },
    { id: '99', name: 'Krabi', country: 'Thailand', continent: 'Asia' },
    { id: '100', name: 'Bangalore', country: 'India', continent: 'Asia' }
  ]

const citiesByContinent = {}
formatedData.forEach(({continent, country, name, id})=>{
    if(!Object.keys(citiesByContinent).includes(continent)){
        citiesByContinent[continent] = []    
    }
    citiesByContinent[continent].push({country, name, id})
})

console.log(citiesByContinent)