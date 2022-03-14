// const getData = async () => {
//     let response = await axios.get(`https://ergast.com/api/f1/2020/1/driverStandings.json`)
//     console.log(response.data)
//     return response.data

// }

// //Create Constant to hold DOM Elements

// const DOM_Elements = {
//     racers: '.racer-list'
// }

// // Create Racer List HTML
// const create_driver = ( position, name ) => {
//     const html = `<a href ='#' class = 'list-group-item list-group-item-action list-group-item-light' id="${position}">${name}</a>`

//     //'Paste' new list item on document
//     document.querySelector(DOM_Elements.racers).insertAdjacentHTML("beforeend", html)                                                                                                                           
// }

// // Function to load Each Racer
// const loadData = async (query_season, query_round) => {
//     const racerList = await getData(query_season, query_round);
//     let path = racerList.MRData.StandingsTable.StandingsList[0].DriverStandings
//     // racerList.forEach(racer => createRacer(racer.driverId,racer.givenName));
//     let position = console.log(path[0].position)
//     let name = console.log(path[0].Driver.familyName)

//     create_driver(position, name)


//     console.log(path[0].Driver.nationality)
//     console.log(path[0].Constructors[0].name)
//     console.log(path[0].points)
// }

// //function to Clear Data
// const clearData = () => {
//     document.querySelector(DOM_Elements.racers).innerHTML = '';
// }


function getData(){
    let season = document.querySelector("#season").value;
    let round = document.querySelector('#round').value;

    fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    .then(response => response.json())
    .then(rawData => {
        console.log(rawData)
        for(let i = 0; i < 7; i++){
            // Getting Name Data
            let givenName = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName
            let familyName = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName
            let fullName = `${givenName} ${familyName}`;
            document.querySelector(`#name-${i}`).innerHTML=fullName;
    
    
            // Getting Nationality Data
            let nationality = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality
            document.querySelector(`#nationality-${i}`).innerHTML=nationality;
    
            // Getting Constructor Data
            let constructor = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name
            document.querySelector(`#sponser-${i}`).innerHTML=constructor;
            // Getting Points Data
            let points = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points
            document.querySelector(`#points-${i}`).innerHTML=points;
        }
    })
}