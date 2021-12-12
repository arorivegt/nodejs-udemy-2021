require('dotenv').config();
const { readInput, menu, pause } = require('./helpers/inquire');
const Search = require('./models/search');

const main = async () => {

    const search = new Search();
    let opt;

    do {
        opt = await menu();
        switch (opt){
            case 1:
                const place = await readInput('City: ');
                await search.city( place );
                console.log(place)
            break;
            case 2:
                console.log("second option")
            break;

        }
        if ( opt !== 0 ) await pause();
    }while( opt !== 0)
}


main();