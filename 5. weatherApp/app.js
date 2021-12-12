require('dotenv').config();
const { 
        readInput, 
        menu, 
        pause,
        listPlaces 
      } = require('./helpers/inquire');
const Search = require('./models/search');

const main = async () => {

    const search = new Search();
    let opt;

    do {
        opt = await menu();
        switch (opt){
            case 1:
                //show message
                const searchPlace = await readInput('City: ');

                //search places
                const places = await search.city( searchPlace );

                //Select the place
                const id = await listPlaces(places);
                if (id === '0' ) continue; //continue to another loop
                const selectPlace = places.find( l => l.id === id );

                search.addHistory( selectPlace.name );

                //get weather
                const weather = await search.weatherByPlace(selectPlace.lat, selectPlace.lng);
                 
                //show results
                console.log('\n======  Information of the City  ====='.yellow);
                console.log('City: '.white,selectPlace.name);
                console.log('Latitude: '.white,selectPlace.lat);
                console.log('Longitude: '.white,selectPlace.lng);
                console.log('Weather: '.white,weather.description);
                console.log('Longitude: '.white,weather.min);
                console.log('Longitude: '.white,weather.max);
                console.log('======================================='.yellow);

            break;
            case 2:
                search.historyCapitalized.forEach ( ( place, i ) => {
                    const idx = `${i + 1}.`.green ;
                    console.log( `${ idx } ${ place }`);
                });
            break;

        }
        if ( opt !== 0 ) await pause();
    }while( opt !== 0)
}


main();