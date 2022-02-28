// console.log("OK")
const searchPlayer = () => {
//     console.log("Ok")
    document.getElementById('player-container').innerHTML = '';
    const inputPlayer = document.getElementById('input-name').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputPlayer}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data =>displayPlayer(data.player))
        
       
}

const displayPlayer = (playerData) =>{
    // console.log(playerData);
    if(playerData){
        document.getElementById('spiner').style.display = 'none';
        
    }
        else{
            document.getElementById('spiner').style.display = 'block';
        }
    
    for(const player of playerData){
        
    const playerContainer = document.getElementById('player-container');
    const div = document.createElement('div');
    
    div.innerHTML = 
            `<div class="card mt-5" style="width: 18rem;">
                <img class="w-50" src="${player.strThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h3 class="card-title bg-light text-center text-danger">Name: ${player.strPlayer} </h3>
                <h3 class="card-title bg-light text-center text-success">ID : ${player.idPlayer} </h3>
                <h4 class="card-title">Team: ${player.strTeam} </h4>
                <h5 class="card-title">Country: ${player.strNationality}</h5>
                <button class="btn btn-danger">Delete</button>
                <button onclick="details(${player.idPlayer})" class="btn btn-success">Details</button>
                </div>
            </div>
        `
        playerContainer.appendChild(div);
      
        // console.log(player);
    }
   
}

const details = (id) => {
    const urlById = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}
    `
    fetch(urlById)
        .then(res => res.json())
        .then(data => setDetailsById(data.players[0]))
    // .then(data => console.log(data))
    // console.log(urlById);
    // console.log('boss paiche');
    // console.log(info);
}

const setDetailsById = (details) => {
    console.log(details);

    if(details.strGender == 'Male'){
        document.getElementById('male').style.display = 'block';
        document.getElementById('female').style.display = 'none';
    }
        else{
            document.getElementById('male').style.display = 'none';
            document.getElementById('female').style.display = 'block';
        }
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = 
        `
            <div class="card mx-auto" style="width: 22rem;">
                <img class="w-50" src="${details.strThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h3 class="card-title bg-light text-center text-danger">Name: ${details.strPlayer}</h3>
                <h3 class="card-title bg-light text-center text-info">DOB: ${details.dateBorn}</h3>
                <h3 class="card-title bg-light text-center text-success">Nationality:${details.strNationality}  </h3>
                <h4 class="card-title">Team: ${details.strTeam} </h4>
                <p class="card-text"> Details Info: ${details.strDescriptionIT}</p>
            </div>
        `          
}