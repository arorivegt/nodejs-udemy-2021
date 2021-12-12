const fs = require('fs');

const axios  = require("axios");

class Search {
    history = [];
    file = './db/database.json';

    constructor(){
        //TODO leer DB si existe
        this.readData();
    }

    get historyCapitalized(){
        return this.history.map( place => {
            let words = place.split(' ');
            let wordsCapitalized = words.map( p => p[0].toUpperCase() + p.substring(1));
            return wordsCapitalized.join(' ');
        })
    }

    get paramsMapBox(){
        return {
            'access_token':process.env["MAPBOX-KEY"],
            'limit':5,
            'language':'en'
        }
    }

    get paramsOpenWeather(){
       return  {
            appid: process.env["OPEN_WEATHER_KEY"],
            units: 'metric'
        }
    }

    async city( place = '' ){

        try{

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
                params: this.paramsMapBox
            })

            const resp = await instance.get();
            //const resp = await axios.get('https://reqres.in/api/users?page=2');

            return resp.data.features.map( place => ({
                id: place.id,
                name: place.place_name,
                lng: place.center[0],
                lat: place.center[1]
            }));
        }catch(err){

            console.log(err);
            return [];
        }
    }

    async weatherByPlace ( lat, lon ) {
        try{
            
            const instance = axios.create({
                baseURL: 'https://api.openweathermap.org/data/2.5/weather',
                params: {...this.paramsOpenWeather, lat, lon}
            })

            const resp = await instance.get();
            const { weather, main } = resp.data;

            return {
                description : weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temperature: main.temp
            }
        }catch( error ){
            console.log(error);
        }
    }

    addHistory( place = '' ){
        if( this.history.includes ( place.toLocaleLowerCase() ) ){
            return;
        }

        this.history = this.history.splice(0,5);
        this.history.unshift( place.toLocaleLowerCase() );
        this.saveData();

    }

    saveData(){

        const payLoad = {
            history : this.history
        }
        fs.writeFileSync(this.file, JSON.stringify(payLoad),err => {
            throw err;
        });
    }

    readData(){

        if( !fs.existsSync(this.file) ){
            return null;
        }
    
        const info = fs.readFileSync(this.file, { encoding: 'utf-8' } );
        const data =  JSON.parse(info);

        this.history = data.history;

    }
}


module.exports = Search; 