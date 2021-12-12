const axios  = require("axios");

class Search {
    history = ['Guatemala', 'Madrid', 'Canada'];

    constructor(){
        //TODO leer DB si existe
    }

    get paramsMapBox(){
        return {
            'access_token':process.env["MAPBOX-KEY"],
            'limit':5,
            'language':'en'
        }
    }

    async city( place = '' ){

        try{

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
                params: this.paramsMapBox
            })
            console.log(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?`);
            const resp = await instance.get();
            //const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);
            return resp;
        }catch(err){

            console.log(err);
            return [];
        }
    }
}


module.exports = Search; 