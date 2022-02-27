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
                <h3 class="card-title">Name: </h3>
                <h4 class="card-title">Team: </h4>
                <h5 class="card-title">Country: </h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button href="#" class="btn btn-danger">Delete</button>
                <button href="#" class="btn btn-success">Details</button>
                </div>
            </div>
        `
        playerContainer.appendChild(div);
    }
}