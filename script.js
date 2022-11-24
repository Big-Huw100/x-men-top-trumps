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

const proteus = new Card("Proteus", "./images/proteus.png","Everything is out there. Everything is real-- But nothing is, either.", 4, 2, 3, 7, 7, 2);

const sabretooth = new Card("Sabretooth", "./images/sabretooth.jpg", "I've been ready to die since before you was born!", 2, 3, 2, 4, 1, 6);

const colossus = new Card("Colossus", "./images/colossus.jpg", "I am not made of steel. Rage. I... am made... of RAGE!", 2, 6, 2, 6, 1, 4);

const gambit = new Card("Gambit", "./images/gambit.webp", "The gentleman assumes the pot is his to win...", 2, 2, 2, 2, 2, 4);

const cyclops = new Card("Cyclops", "./images/cyclops.webp", "So what's my story? I'm a dreamer. I'm an X-Man.", 3, 2, 2, 2, 5, 4);

const phoenixForce = new Card("Phoenix Force", "./images/phoenix.jpg", "I am fire! And life incarnate! Now and forever -- I am PHOENIX!", 7, 7, 7, 7, 7, 1);

const apocalypse = new Card("Apocalypse", "./images/apocalypse.jpg", "Peace does nothing to test -- to increase -- mutants' strength.", 6, 7, 5, 6, 6, 3);

const cassandraNova = new Card("Cassandra Nova", "./images/cassandra-nova.webp", " People must learn to hate. I'm going to be their teacher.", 3, 1, 2, 4, 5, 1);

const juggernaut = new Card("Juggernaut", "./images/juggernaught.jpg", "I'm the Juggernaut! Ain't nothin' -- ain't nobody -- can beat me!", 2, 7, 2, 7, 1, 4);

const onslaught = new Card("Onslaught", "./images/onslaught.jpg", "At last... FREEDOM! Now behold my mighty hand!", 6, 7, 3, 7, 6, 4);

const storm = new Card("Storm", "./images/storm.webp", "The true measure of life is in the living.", 2, 2, 3, 2, 5, 4);

const rogue = new Card("Rogue", "./images/rogue.jpg", "What defines us is hope. That's why we don't give up.", 3, 5, 5, 6, 1, 3);

const magneto = new Card("Magneto", "./images/magneto.webp", "There's no heroes or villains. There's just what I want and how I'll get it.", 5, 2, 5, 2, 6, 4);

const misterSinister = new Card("Mister Sinister", "./images/mister-sinister.webp", "It takes more than bullets -- or a harlot's kiss -- to kill Nathaniel Essex.", 5, 4, 7, 7, 4, 4);

const kittyPryde = new Card("Kitty Pryde", "./images/kitty-pryde.jpg", "I can walk around. Just a young woman of the world. But... I'm not.", 4, 2, 2, 3, 1, 5);

const beast = new Card("Beast", "./images/beast.jpg", "Oh, my stars and garters!", 5, 4, 3, 4, 1, 4);

const williamStryker = new Card("William Stryker", "./images/william-stryker.jpg", "My race is fighting for its very survival. What else do you expect?", 4, 2, 2, 2, 1, 3);

const arcade = new Card("Arcade", "./images/arcade.jpg", "I'm done with death traps. Okay... maybe a tiny little death trap.", 5, 2, 2, 2, 1, 3);

const mystique = new Card("Mystique", "./images/mystique.jpg", "I am everywhere. I am nowhere. A shadow, unchained and unleashed.", 3, 2, 2, 2, 1, 7);

const wolverine = new Card("Wolverine", "./images/wolverine.webp", "I'm the best there is at what I do, but what I do best isn't very nice.", 2, 4, 2, 4, 2, 7);

const nightcrawler = new Card("Nightcrawler", "./images/nightcrawler.webp", "Odd how even in the face of tragedy, there are often such wonders.", 3, 2, 7, 2, 1, 3);

const shadowKing = new Card("Shadow King", "./images/shadow-king.png", " Happiness is a lie. Life is horror. The light is always dying...", 3, 1, 7, 7, 5, 1);

const angel = new Card("Angel", "./images/angel.jpg", "I am unsure who-- or what-- I am. But I'd like to find out.", 3, 2, 3, 2, 1, 4);

const charlesXavier = new Card("Charles Xavier", "./images/charles-xavier.webp", "Any dream worth having is a dream worth fighting for.", 5, 2, 2, 2, 5, 3);

const emmaFrost = new Card("Emma Frost", "./images/emma-frost.webp", "One more time, then. For the children.", 4, 4, 2, 5, 5, 3);

const bishop = new Card("Bishop", "./images/bishop.webp", "I'm a mutant, too. And I know what it's like to be alone in a strange land.", 2, 3, 7, 3, 4, 4);

const iceman = new Card("Iceman", "./images/iceman.png", "I've been a super hero since before I was old enough to shave.", 2, 3, 3, 4, 5, 4);

const jeanGrey = new Card("Jean Grey", "./images/jean-grey.jpg", "Time spent alive, learning together is all that makes life worth living.", 3, 2, 3, 2, 6, 4);

const toad = new Card("Toad", "./images/toad.webp", "I ain't the kind of toad that turns into a prince when some beautiful lady kisses him. I just stay a toad.", 3, 4, 3, 3, 1, 3);

const psylocke = new Card("Psylocke", "./images/psylocke.webp", "That's right. Because pain goes away. Just like this hurt will. So just remember -- all pain is only temporary, okay? No hurt lasts forever.", 2, 6, 4, 6, 5, 4);

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