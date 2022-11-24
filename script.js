// -------------------------------CARD CLASS---------------------------------------

class Card {
    constructor(name, img, quote, intelligence, strength, speed, durability, energyProjection, fightingSkills) {
        (this.name = name),
        (this.img = img),
        (this.quote = quote),
        (this.intelligence = intelligence),
        (this.strength = strength),
        (this.speed = speed),
        (this.durability = durability),
        (this.energyProjection = energyProjection),
        (this.fightingSkills = fightingSkills)
    }

    getPlayerCard() {
        const getPlayerCard = `
        <article class ="x-men-card">
            <h2 class ="x-men-card__name">${this.name}</h2>
            <img class="x-men-card__img" src=${this.img} />
            <p class="x-men-card__quote">${this.quote}</p>
        </article>
        `;
        return getPlayerCard;
    }

    getCpuCard() {
        const getCpuCard = `
        <article class ="x-men-card">
            <h2 class ="x-men-card__name">${this.name}</h2>
            <img class="x-men-card__img" src=${this.img} />
            <p class="x-men-card__quote">${this.quote}</p>
        </article>
        `;
        return getCpuCard;
    }

    gameOverCard() {
        const gameOverCard = `
        <article class ="x-men-card">
            <h2 class ="x-men-card__name">GAME OVER</h2>
            <img class="x-men-card__img" src=https://i.ebayimg.com/images/g/qRAAAOSwrNpiiUXR/s-l500.jpg />
            <p class="x-men-card__quote">GAME OVER</p>
        </article>
        `;
        return gameOverCard;
    }
};

// ----------------------------------ELEMENTS-----------------------------------------

const xmenPlayerCardContainer = document.querySelector(".x-men-player-card-container");

const xmenCpuCardContainer = document.querySelector(".x-men-cpu-card-container");

const playerScore = document.querySelector(".player-score");

const cpuScore = document.querySelector(".cpu-score");

const vs = document.querySelector(".versus");

// --------------------------------CARDS---------------------------------------------

const proteus = new Card("Proteus", "https://upload.wikimedia.org/wikipedia/en/0/0e/Proteus_%28Marvel_Comics_character%29.png","Everything is out there. Everything is real-- But nothing is, either.", 4, 2, 3, 7, 7, 2);

const sabretooth = new Card("Sabretooth", "https://upload.wikimedia.org/wikipedia/en/7/7f/Sabretooth_%28Victor_Creed%29.jpg", "I've been ready to die since before you was born!", 2, 3, 2, 4, 1, 6);

const colossus = new Card("Colossus", "https://upload.wikimedia.org/wikipedia/en/2/26/Colossus-AvX_Consequences.jpg", "I am not made of steel. Rage. I... am made... of RAGE!", 2, 6, 2, 6, 1, 4);

const gambit = new Card("Gambit", "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Gambit_%28Marvel_Comics%29.png/220px-Gambit_%28Marvel_Comics%29.png", "The gentleman assumes the pot is his to win...", 2, 2, 2, 2, 2, 4);

const cyclops = new Card("Cyclops", "https://i.pinimg.com/736x/b6/1c/f1/b61cf1a90d6ca39bc89cb43d86cc50df.jpg", "So what's my story? I'm a dreamer. I'm an X-Man.", 3, 2, 2, 2, 5, 4);

const phoenixForce = new Card("Phoenix Force", "https://comicvine.gamespot.com/a/uploads/scale_medium/1/10812/2363684-phoenixdone.jpg", "I am fire! And life incarnate! Now and forever -- I am PHOENIX!", 7, 7, 7, 7, 7, 1);

const apocalypse = new Card("Apocalypse", "https://upload.wikimedia.org/wikipedia/en/a/a0/Apocalypse_%28En_Sabah_Nur_-_circa_2009%29.jpg", "Peace does nothing to test -- to increase -- mutants' strength.", 6, 7, 5, 6, 6, 3);

const cassandraNova = new Card("Cassandra Nova", "https://i.pinimg.com/550x/90/54/49/905449252ad58f75bdd216988211bde3.jpg", " People must learn to hate. I'm going to be their teacher.", 3, 1, 2, 4, 5, 1);

const juggernaut = new Card("Juggernaut", "https://i.pinimg.com/originals/74/0d/ac/740dac5af280fd01ed3363d81bac3832.jpg", "I'm the Juggernaut! Ain't nothin' -- ain't nobody -- can beat me!", 2, 7, 2, 7, 1, 4);

const onslaught = new Card("Onslaught", "https://i.pinimg.com/564x/bf/44/d4/bf44d4cda7b34355017e948d50f954f3.jpg", "At last... FREEDOM! Now behold my mighty hand!", 6, 7, 3, 7, 6, 4);

const storm = new Card("Storm", "https://upload.wikimedia.org/wikipedia/en/3/34/Storm_%28Ororo_Munroe%29.png", "The true measure of life is in the living.", 2, 2, 3, 2, 5, 4);

const rogue = new Card("Rogue", "https://i.pinimg.com/236x/ba/c8/7a/bac87acb101456e99be7548e9120f0e8.jpg", "What defines us is hope. That's why we don't give up.", 3, 5, 5, 6, 1, 3);

const magneto = new Card("Magneto", "https://upload.wikimedia.org/wikipedia/en/e/e9/Magneto_%28Marvel_Comics_character%29.jpg", "There's no heroes or villains. There's just what I want and how I'll get it.", 5, 2, 5, 2, 6, 4);

const misterSinister = new Card("Mister Sinister", "https://wallpapercave.com/wp/wp9733205.jpg", "It takes more than bullets -- or a harlot's kiss -- to kill Nathaniel Essex.", 5, 4, 7, 7, 4, 4);

const kittyPryde = new Card("Kitty Pryde", "https://i.pinimg.com/564x/66/f8/97/66f897e811dda50571090f16dc6d6ef7.jpg", "I can walk around. Just a young woman of the world. But... I'm not.", 4, 2, 2, 3, 1, 5);

const beast = new Card("Beast", "https://images6.fanpop.com/image/photos/34300000/Beast-Cards-x-men-beast-34351748-740-1046.jpg", "Oh, my stars and garters!", 5, 4, 3, 4, 1, 4);

const williamStryker = new Card("William Stryker", "https://cmro.travis-starnes.com/images/characters/william_stryker.jpg", "My race is fighting for its very survival. What else do you expect?", 4, 2, 2, 2, 1, 3);

const arcade = new Card("Arcade", "https://upload.wikimedia.org/wikipedia/en/1/16/X-FactorVol330.jpg", "I'm done with death traps. Okay... maybe a tiny little death trap.", 5, 2, 2, 2, 1, 3);

const mystique = new Card("Mystique", "https://i.pinimg.com/474x/55/93/a8/5593a8449582afd616af1f993e6e993a.jpg", "I am everywhere. I am nowhere. A shadow, unchained and unleashed.", 3, 2, 2, 2, 1, 7);

const wolverine = new Card("Wolverine", "https://cdnb.artstation.com/p/assets/images/images/054/392/411/large/sadece-kaan-x-men-wolverine-03-march-2017.jpg?1664431093", "I'm the best there is at what I do, but what I do best isn't very nice.", 2, 4, 2, 4, 2, 7);

const nightcrawler = new Card("Nightcrawler", "https://upload.wikimedia.org/wikipedia/en/7/7b/Nightcrawler_%28Kurt_Wagner_circa_2018%29.png", "Odd how even in the face of tragedy, there are often such wonders.", 3, 2, 7, 2, 1, 3);

const shadowKing = new Card("Shadow King", "https://upload.wikimedia.org/wikipedia/en/e/e8/Shadow_King.png", " Happiness is a lie. Life is horror. The light is always dying...", 3, 1, 7, 7, 5, 1);

const angel = new Card("Angel", "https://upload.wikimedia.org/wikipedia/en/1/1b/X-men_angel_archangel.jpg", "I am unsure who-- or what-- I am. But I'd like to find out.", 3, 2, 3, 2, 1, 4);

const charlesXavier = new Card("Charles Xavier", "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Professor_Charles_%27X%27_Xavier.png/220px-Professor_Charles_%27X%27_Xavier.png", "Any dream worth having is a dream worth fighting for.", 5, 2, 2, 2, 5, 3);

const emmaFrost = new Card("Emma Frost", "https://subscriptions.acecomics.co.uk/wp-content/uploads/2018/07/xmenblackemmafrost.jpg", "One more time, then. For the children.", 4, 4, 2, 5, 5, 3);

const bishop = new Card("Bishop", "https://external-preview.redd.it/bXK5Hu0-hGaAVzm7w7fPgdsQ9rua1OMZCeUju1U9oEY.jpg?auto=webp&s=1c5577efd17bbe0d851313cd797521586210bd74", "I'm a mutant, too. And I know what it's like to be alone in a strange land.", 2, 3, 7, 3, 4, 4);

const iceman = new Card("Iceman", "https://upload.wikimedia.org/wikipedia/en/0/03/Iceman.png", "I've been a super hero since before I was old enough to shave.", 2, 3, 3, 4, 5, 4);

const jeanGrey = new Card("Jean Grey", "https://i.pinimg.com/736x/f8/54/fc/f854fcbef3a8b032586e89a17299e889--marvel-women-marvel-girls.jpg", "Time spent alive, learning together is all that makes life worth living.", 3, 2, 3, 2, 6, 4);

const toad = new Card("Toad", "https://seanmills6.files.wordpress.com/2018/03/solo-xmen-list-02.jpg", "I ain't the kind of toad that turns into a prince when some beautiful lady kisses him. I just stay a toad.", 3, 4, 3, 3, 1, 3);

const psylocke = new Card("Psylocke", "https://static.tvtropes.org/pmwiki/pub/images/uncanny_x_men_vol_1_509_textless.jpg", "That's right. Because pain goes away. Just like this hurt will. So just remember -- all pain is only temporary, okay? No hurt lasts forever.", 2, 6, 4, 6, 5, 4);

// ----------------------------------------------THE DECK-----------------------------------------------

const deck = [proteus, sabretooth, colossus, gambit, cyclops, phoenixForce, apocalypse, cassandraNova, juggernaut, onslaught, storm, rogue, magneto, misterSinister, kittyPryde, beast, williamStryker, arcade, mystique, wolverine, nightcrawler, shadowKing, angel, charlesXavier, emmaFrost, bishop, iceman, jeanGrey, toad, psylocke];

// ------------------------------------------SHUFFLE THE DECK-------------------------------------------

const shuffleDeck = deck.sort((a, b) => 0.5 - Math.random());

// -------------------------------------------DEAL THE CARDS--------------------------------------------

const cutDeck = Math.ceil(shuffleDeck.length / 2);

const playerHand = shuffleDeck.slice(0, cutDeck);

const cpuHand = deck.slice(cutDeck);

// -------------------------------------------DISPLAY CARDS-----------------------------------------------

xmenPlayerCardContainer.innerHTML = playerHand[0].getPlayerCard();
xmenCpuCardContainer.innerHTML = cpuHand[0].getCpuCard();

// -------------------------------------------SCORE TRACKER------------------------------------------------

playerScore.innerHTML = `Player Score: ${playerHand.length}`
cpuScore.innerHTML = `CPU Score: ${cpuHand.length}`

// ----------------------------------------------GAMEPLAY-------------------------------------------------=

const intButton = document.querySelector("#int");
const strButton = document.querySelector("#str");
const spdButton = document.querySelector("#spd");
const durButton = document.querySelector("#dur");
const enProButton = document.querySelector("#en-pro");
const fightSkillButton = document.querySelector("#fight-skill");

intButton.addEventListener("click", () => {
    if(!cpuHand.length || !playerHand.length) return;
    if (playerHand[0].intelligence > cpuHand[0].intelligence) {
        playerHand.push(cpuHand.shift());
        playerScore.innerHTML = `Player Score: ${playerHand.length}`
        cpuScore.innerHTML = `CPU Score: ${cpuHand.length}`
        xmenPlayerCardContainer.innerHTML = playerHand[0].getPlayerCard();
        xmenCpuCardContainer.innerHTML = cpuHand[0].getCpuCard();
    } else {
        cpuHand.push(playerHand.shift());
        playerScore.innerHTML = `Player Score: ${playerHand.length}`
        cpuScore.innerHTML = `CPU Score: ${cpuHand.length}`
        xmenPlayerCardContainer.innerHTML = playerHand[0].getPlayerCard();
        xmenCpuCardContainer.innerHTML = cpuHand[0].getCpuCard();
    };
    });

strButton.addEventListener("click", () => {
    if(!cpuHand.length || !playerHand.length) return;
    if (playerHand[0].strength > cpuHand[0].strength) {
        playerHand.push(cpuHand.shift());
        playerScore.innerHTML = `Player Score: ${playerHand.length}`
        cpuScore.innerHTML = `CPU Score: ${cpuHand.length}`
        xmenPlayerCardContainer.innerHTML = playerHand[0].getPlayerCard();
        xmenCpuCardContainer.innerHTML = cpuHand[0].getCpuCard();
    } else {
        cpuHand.push(playerHand.shift());
        playerScore.innerHTML = `Player Score: ${playerHand.length}`
        cpuScore.innerHTML = `CPU Score: ${cpuHand.length}`
        xmenPlayerCardContainer.innerHTML = playerHand[0].getPlayerCard();
        xmenCpuCardContainer.innerHTML = cpuHand[0].getCpuCard();
    };
});

spdButton.addEventListener("click", () => {
    if(!cpuHand.length || !playerHand.length) return;
    if (playerHand[0].speed > cpuHand[0].speed) {
        playerHand.push(cpuHand.shift());
        playerScore.innerHTML = `Player Score: ${playerHand.length}`
        cpuScore.innerHTML = `CPU Score: ${cpuHand.length}`
        xmenPlayerCardContainer.innerHTML = playerHand[0].getPlayerCard();
        xmenCpuCardContainer.innerHTML = cpuHand[0].getCpuCard();
    } else {
        cpuHand.push(playerHand.shift());
        playerScore.innerHTML = `Player Score: ${playerHand.length}`
        cpuScore.innerHTML = `CPU Score: ${cpuHand.length}`
        xmenPlayerCardContainer.innerHTML = playerHand[0].getPlayerCard();
        xmenCpuCardContainer.innerHTML = cpuHand[0].getCpuCard();
    };
});

durButton.addEventListener("click", () => {
    if(!cpuHand.length || !playerHand.length) return;
    if (playerHand[0].durability > cpuHand[0].durability) {
        playerHand.push(cpuHand.shift());
        playerScore.innerHTML = `Player Score: ${playerHand.length}`
        cpuScore.innerHTML = `CPU Score: ${cpuHand.length}`
        xmenPlayerCardContainer.innerHTML = playerHand[0].getPlayerCard();
        xmenCpuCardContainer.innerHTML = cpuHand[0].getCpuCard();
    } else {
        cpuHand.push(playerHand.shift());
        playerScore.innerHTML = `Player Score: ${playerHand.length}`
        cpuScore.innerHTML = `CPU Score: ${cpuHand.length}`
        xmenPlayerCardContainer.innerHTML = playerHand[0].getPlayerCard();
        xmenCpuCardContainer.innerHTML = cpuHand[0].getCpuCard();
    };
});

enProButton.addEventListener("click", () => {
    if(!cpuHand.length || !playerHand.length) return;
    if (playerHand[0].energyProjection > cpuHand[0].energyProjection) {
        playerHand.push(cpuHand.shift());
        playerScore.innerHTML = `Player Score: ${playerHand.length}`
        cpuScore.innerHTML = `CPU Score: ${cpuHand.length}`
        xmenPlayerCardContainer.innerHTML = playerHand[0].getPlayerCard();
        xmenCpuCardContainer.innerHTML = cpuHand[0].getCpuCard();
    } else {
        cpuHand.push(playerHand.shift());
        playerScore.innerHTML = `Player Score: ${playerHand.length}`
        cpuScore.innerHTML = `CPU Score: ${cpuHand.length}`
        xmenPlayerCardContainer.innerHTML = playerHand[0].getPlayerCard();
        xmenCpuCardContainer.innerHTML = cpuHand[0].getCpuCard();
    };
});

fightSkillButton.addEventListener("click", () => {
    if(!cpuHand.length || !playerHand.length) return;
    if (playerHand[0].fightingSkills > cpuHand[0].fightingSkills) {
        playerHand.push(cpuHand.shift());
        playerScore.innerHTML = `Player Score: ${playerHand.length}`
        cpuScore.innerHTML = `CPU Score: ${cpuHand.length}`
        xmenPlayerCardContainer.innerHTML = playerHand[0].getPlayerCard();
        xmenCpuCardContainer.innerHTML = cpuHand[0].getCpuCard();
    } else {
        cpuHand.push(playerHand.shift());
        playerScore.innerHTML = `Player Score: ${playerHand.length}`
        cpuScore.innerHTML = `CPU Score: ${cpuHand.length}`
        xmenPlayerCardContainer.innerHTML = playerHand[0].getPlayerCard();
        xmenCpuCardContainer.innerHTML = cpuHand[0].getCpuCard();
    };
});

console.log(cpuHand);
console.log(playerHand);