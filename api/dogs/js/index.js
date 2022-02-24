const loadDog = () => {
    fetch("https://api.thedogapi.com/v1/breeds")
    .then(res => res.json())
    .then(data => displayDogs(data))
}

const displayDogs = (dogList) =>{
    // console.log(dogList);
    const main = document.getElementById('main');
    const first90Data = dogList.slice(0,90);
    console.log(first90Data);

    for(const dog of dogList){
        // console.log(dog);
        const div = document.createElement('div');
        div.className = 'col-lg-4 col-md-8 col-sm-4 border border-5 mb-3 rounded-3 border border-success mt-5'
        div.innerHTML = `
                <h2>Name: ${dog.name}</h2>
                <p>Details: ${dog.temperament}</p>
                <h4>Height: ${dog.height.metric} CM</h4>
                <span class="fs-2">Photo:<img width="400px" height="250px" src="${dog.image.url}"> </span>
            `
        main.appendChild(div)
    }
}

