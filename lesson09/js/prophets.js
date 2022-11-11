const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL).then(function (response) {
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);  
    console.log(jsonObject.prophets);
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);

});



function displayProphets(prophet){

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');

    let i = 1;


    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} - ${i}th Latter-day President`);
    portrait.setAttribute("loading","lazy");
    birthDate.textContent = `Birth Date: ${prophet.birthdate}`;
    birthPlace.textContent = `Birth Place: ${prophet.birthplace}`;
    
    card.appendChild(h2);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);
    
    
    document.querySelector("div.cards").appendChild(card);
    
    i++;
}

