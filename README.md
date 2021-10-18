# WordTrip
Desafio desenvolvido durante o Ignite da RocketSeat

<br />

[***1. Guide***](#guide)
--------------------------------

> [Guide](#guide) <br />
> [Installation](#Installation) <br />
> [Clone this repository](#Clone-this-repository) <br />
> [Move into the directory](#Move-into-the-directory) <br />
> [Install dependencies](#Install-dependencies) <br />
> [Run JSON Server](#Run-JSON-Server) <br />
> [Run WordTrip Web App](#Run-WordTrip-Web-App) <br />

<br />

[***2. Project View***](#project-view)
--------------------------------

> [Home](#home) <br />
> [Continent](#continent) <br />

<br />


[***3. Technologies(External links)***](#)
--------------------------------

> [React](https://github.com/facebook/react/) <br />
> [Typescript](https://github.com/microsoft/TypeScript) <br />
> [Next](https://nextjs.org/docs/getting-started) <br />
> [Swiper](https://swiperjs.com/get-started) <br />
> [Axios](https://github.com/axios/axios) <br />
> [Chakra UI](https://chakra-ui.com/docs/getting-started) <br />
> [React Icons](https://react-icons.github.io/react-icons/) <br />
> [JSON Server](https://github.com/typicode/json-server) <br />


<br />

[***4. Extras***](#extras)
--------------------------------

> [Extracting Mocked Data](#Extracting-Mocked-Data) <br />

<br />

<br />
<hr />

# Project View

## Home
<hr />

<br />

<img src="./docs/Home.gif">
<img src="./docs/Home_Responsible.gif?raw=true">

<br />
<br />
<hr />


## Continent
<hr />
<br />

<img src="./docs/Continent.gif?raw=true">
<img src="./docs/Continent_Responsible.gif?raw=true">

<br />
<hr />
<!-- <h3 align="center">Você pode acessar o projeto <a href="#" target="_blank">clicando aqui</a></h3>
<hr /> -->

<br />
<br />


## Guide
<hr />

### Clone this repository
```
$ git clone https://github.com/NicholasWM/WorldTrip.git
```

### Move into the directory
```
$ cd WorldTrip
```

### Install dependencies

```
# Install with Yarn
$ yarn

# Install with NPM
$ npm i
```

### Run JSON Server
```
# Inicializando JSON SERVER com os dados mockados
$ yarn server
```

### Run WordTrip Web App
```
$ yarn dev
```
---
<br />
<br />

# Extras

## Extracting Mocked Data
---
### *Data Source:*
https://www.visualcapitalist.com/the-100-most-popular-city-destinations/

---

### Script made in the Developer Tools to extract data from Table

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
#### this script returns a list of 100 objects (id, name, country).
---

### Searching only the countries, removing the repeated

```js
    countries new Set(data.map(item => item.country))
```

#### This script returns a list of 44 strings, 100 cities and 44 countries
---
#### The big problem is that I need the object in this format:
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

And the object I got has no reference to the continent of the country where the city is.

So I went to a website to get a list of all countries and their respective continents, to cross-check data from one data structure with another.

## Source:

https://datahub.io/JohnSnowLabs/country-and-continent-codes-list

---

The problem is that it makes downloading a CSV available, and that CSV is displayed as a giant string in the browser, I copied and pasted, turned each line into a string, put it in a list, made a map by splitting and returning a data structure just what I needed for each string: name of the country and continent, since within each string each data is separated by a comma:
```js
    stringList.map(item => {
        const [continent_name, code, country_name] = item.split(',')
        return {continent: continent_name.replace('"', ""), country:country_name.replace('"', "")}
    })
```
---
Now I have two variables:

* *continentCountries* -> Data structure with {continent, country}

* *citieCountry* -> Data structure with {city, country}
```js
    const citiesByContinent = {}
    formatedData.forEach(({continent, country, name, id})=>{
        if(!Object.keys(citiesByContinent).includes(continent)){
            citiesByContinent[continent] = []    
        }
        citiesByContinent[continent].push({country, name, id})
    })
```
---
Ready, data structures for the JSON-Server ready.
I realized that the initial list of cities would be interesting to place as well, since the initial screen displays the number of cities and also because the list is in the order of 100+, according to the source cited for use by RocketSeat.

---
## Data format in JSON-Server:

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


The interesting thing is after all, the ID's match, not for nothing programming is so awesome.
