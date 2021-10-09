# WordTrip

## Dados Mockados

* Dados:
https://www.visualcapitalist.com/the-100-most-popular-city-destinations/

### Script no Developer Tools usado para extrair os dados da tabela

```js
    let data = [];
    for(i=2; i < 102; i++){
        let query = document.querySelector(`.row-${i}`);
        data.push({
            id: query.querySelector('.column-1').innerText,
            name:query.querySelector('.column-2').innerText,
            country: query.querySelector('.column-3').innerText,
        });
    }
```
Resultado: Uma Lista de 100 objetos(id, name, country).

- Buscando apenas os Paises, retirando os repetidos
```js
    countries new Set(data.map(item => item.country))
```
Resultado: Uma lista de 44 strings, de 100 cidades, apenas 44 países

O grande problema é que eu preciso do objeto no formato:
```ts
    interface CityProps{
        id: number,
        name: string,
        country: string,
    }
    interface ContinentProps{
        id: number,
        cities: CityProps[] 
    }
```
E o objeto que consegui não tem nenhuma referencia ao continente do país onde a cidade está.

Então fui em um site para pegar uma lista de todos os paises e seus respectivos continentes, para cruzar os dados de uma estrutura de dados com a outra.

* Fonte:
https://datahub.io/JohnSnowLabs/country-and-continent-codes-list

O problema é que ele disponibiliza o download de um CSV, e esse CSV é exibido como uma string gigante no navegador, copiei e colei, transformei cada linha em uma string, coloquei numa lista, fiz um map dando split e retornando uma estrutura de dados apenas com oque eu necessitava de cada string: nome do país e continente, visto que, dentro de cada string cada dado está separado por uma virgula:
```js
    listaDeStrings.map(item => {
        const [continent_name, code, country_name] = item.split(',')
        return {continent: continent_name.replace('"', ""), country:country_name.replace('"', "")}
    })
```

Agora eu tenho duas variaveis:

* *continentCountries* -> Estrutura de dados com {continente, pais}

* *citieCountry* -> Estrutura de dados com {cidade, pais}
```js
    const citiesByContinent = {}
    formatedData.forEach(({continent, country, name, id})=>{
        if(!Object.keys(citiesByContinent).includes(continent)){
            citiesByContinent[continent] = []    
        }
        citiesByContinent[continent].push({country, name, id})
    })
```

Pronto, estruturas de dados para o JSON-Server prontas.
Percebi que a lista inicial de cidades seria interessante colocar tambem, visto que a tela inicial exibe o numero de cidades e tambem porque a lista está na ordem das 100+, conforme a fonte citada para utilizar pela RocketSeat.

Formato dos dados no JSON-Server:
```ts
    interface CityProps{
        id: number,
        name: string,
        country: string,
    }
    interface ContinentProps{
        id: number,
        cities: CityProps[] 
    }
    interface DataApiProps{
        "continents":ContinentProps[],
        "cities":CityProps[],
    }
```

O interessante é depois de tudo, os ID´s batem, não a toa programar é tão massa.

Como esse projeto é para praticar, deixei o script na past raiz, em formating.js
