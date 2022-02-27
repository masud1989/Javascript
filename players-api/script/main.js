// console.log("OK")
const searchPlayer = () => {
//     console.log("Ok")
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
    for(const player of playerData){
    const playerContainer = document.getElementById('player-container');
    const div = document.createElement('div');
    div.innerHTML = 
            `<div class="card mt-5" style="width: 18rem;">
                <img class="w-50" src="${player.strThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h3 class="card-title bg-light text-center text-danger">Name: ${player.strPlayer} </h3>
                <h3 class="card-title bg-light text-center text-success">Name: ${player.idPlayer} </h3>
                <h4 class="card-title">Team: ${player.strTeam} </h4>
                <h5 class="card-title">Country: ${player.strNationality}</h5>
                <p class="card-text">${player.strDescriptionIT}</p>
                <button href="#" class="btn btn-danger">Delete</button>
                <button href="#" class="btn btn-success">Details</button>
                </div>
            </div>
        `
        playerContainer.appendChild(div);
        console.log(player)
    }
}