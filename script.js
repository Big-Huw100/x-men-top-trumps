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

    getCard() {
        const getCard = `
        <article class ="x-men-card">
        <h2>${this.name}</h2>
            <img src=${this.img} />
            <p>${this.quote}</p>
            <button value="${this.intelligence}">Intelligence</button>
            <button value="${this.strength}">Strength</button>
            <button value="${this.speed}">Speed</button>
            <button value="${this.durability}">Durability</button>
            <button value="${this.energyProjection}">Energy Projection</button>
            <button value="${this.fightingSkills}">Fighting Skills</button>
        </article>
        `;
        return getCard;
    }
};

const proteus = new Card("Proteus", "https://static.wikia.nocookie.net/marveldatabase/images/3/36/Kevin_MacTaggert_%28Earth-616%29_from_X-Men_Hellfire_Gala_Vol_1_1_001.jpg/revision/latest/scale-to-width-down/350?cb=20220730221736","Everything is out there. Everything is real-- But nothing is, either. I think of it like this. I don't think of real the way you do, Errol. To me, the distinction is between what I've brought forward and what I haven't.", 4, 2, 3, 7, 7, 2);

const sabretooth = new Card("Sabretooth", "https://static.wikia.nocookie.net/marveldatabase/images/8/85/Sabretooth_Vol_4_1_Textless.jpg/revision/latest/scale-to-width-down/329?cb=20210917003526", "I've been ready to die since before you was born!", 2, 3, 2, 4, 1, 6);

const colossus = new Card("Colossus", "https://static.wikia.nocookie.net/marveldatabase/images/b/b1/X-Men_Vol_5_12_Unknown_Comic_Books_Exclusive_Ngu_Virgin_Variant.jpg/revision/latest/scale-to-width-down/329?cb=20200917030432", "I am not made of steel. Rage. I... am made... of RAGE!", 2, 6, 2, 6, 1, 4);

const gambit = new Card("Gambit", "https://static.wikia.nocookie.net/marveldatabase/images/0/06/Remy_LeBeau_%28Earth-616%29_from_Knights_of_X_Vol_1_3_cover.jpg/revision/latest/scale-to-width-down/350?cb=20220921211846", "The gentleman assumes the pot is his to win... but I have a literal ace up my sleeve.", 2, 2, 2, 2, 2, 4);

const cyclops = new Card("Cyclops", "https://static.wikia.nocookie.net/marveldatabase/images/d/d3/X-Men_Vol_6_1_New_Line-Up_Trading_Card_Variant_Textless.jpg/revision/latest/scale-to-width-down/329?cb=20210911084138", "So what's my story? I'm a dreamer. I'm an X-Man.", 3, 2, 2, 2, 5, 4);

const phoenixForce = new Card("Phoenix Force", "https://static.wikia.nocookie.net/marveldatabase/images/e/ee/Phoenix_Force_%28Earth-616%29_from_Avengers_Vol_8_32_001.jpg/revision/latest/scale-to-width-down/325?cb=20210406171416", "I am fire! And life incarnate! Now and forever -- I am PHOENIX!", 7, 7, 7, 7, 7, 1);

const apocalypse = new Card("Apocalypse", "https://static.wikia.nocookie.net/marveldatabase/images/1/1e/X-Men_Vol_5_13_Asrar_Variant_Textless.jpg/revision/latest/scale-to-width-down/329?cb=20200830164616", "Peace does nothing to test -- to increase -- mutants' strength. To force them to evolve into the strong.", 6, 7, 5, 6, 6, 3);

const cassandraNova = new Card("Cassandra Nova", "https://static.wikia.nocookie.net/marveldatabase/images/3/39/Cassandra_Nova_Xavier_%28Earth-616%29_from_Marauders_Vol_2_1_001.jpg/revision/latest/scale-to-width-down/325?cb=20220406202432", " People must learn to hate. I'm going to be their teacher.", 3, 1, 2, 4, 5, 1);

const juggernaut = new Card("Juggernaut", "https://i.pinimg.com/originals/74/0d/ac/740dac5af280fd01ed3363d81bac3832.jpg", "I'm the Juggernaut! Ain't nothin' -- ain't nobody -- can beat me!", 2, 7, 2, 7, 1, 4);

const onslaught = new Card("Onslaught", "https://static.wikia.nocookie.net/marveldatabase/images/f/fb/Onslaught_%28Psychic_Entity%29_%28Earth-616%29_from_Marvel_Masterpieces_%28Trading_Cards%29_1996_Set_001.jpg/revision/latest/scale-to-width-down/324?cb=20051218191341", "At last... FREEDOM! Now behold my mighty hand!", 6, 7, 3, 7, 6, 4);

const storm = new Card("Storm", "https://static.wikia.nocookie.net/marveldatabase/images/2/2b/Ororo_Munroe_%28Earth-616%29_from_X-Men_Red_Vol_2_1_001.jpg/revision/latest/scale-to-width-down/325?cb=20220409190553", "The true measure of life is in the living. It isn't a series of do-overs and restarts... It's fighting for what you have, what you believe in... It's fighting for who you are. I am a mutant. I am a goddess. And I want to live.", 2, 2, 3, 2, 5, 4);

const rogue = new Card("Rogue", "https://static.wikia.nocookie.net/marveldatabase/images/7/7e/X-Men_Vol_6_2_New_Line-Up_Trading_Card_Variant_Textless.jpg/revision/latest/scale-to-width-down/327?cb=20221010104839", "What defines us is hope. That's why we don't give up. That's why, no matter the odds... we find a way t' win.", 3, 5, 5, 6, 1, 3);

const magneto = new Card("Magneto", "https://static.wikia.nocookie.net/marveldatabase/images/e/eb/X-Men_Black_-_Magneto_Vol_1_1_Virgin_Variant.jpg/revision/latest/scale-to-width-down/321?cb=20180722224641", "The thing none of you will ever understand is that there are no sides. There's no heroes or villains. There's just what I want and how I'll get it.", 5, 2, 5, 2, 6, 4);

const misterSinister = new Card("Mister Sinister", "https://static.wikia.nocookie.net/marveldatabase/images/d/df/Powers_of_X_Vol_1_5_Virgin_Variant.jpg/revision/latest/scale-to-width-down/325?cb=20190922033536", "It takes more than bullets -- or a harlot's kiss -- to kill Nathaniel Essex.", 5, 4, 7, 7, 4, 4);

const kittyPryde = new Card("Kitty Pryde", "https://static.wikia.nocookie.net/marveldatabase/images/8/88/Marauders_Vol_1_22_Parel_Variant_Textless.jpg/revision/latest/scale-to-width-down/329?cb=20220425102036", " I don't have to wear a visor or have blue fur all over me. I can walk around. Just a young woman of the world. But... I'm not.", 4, 2, 2, 3, 1, 5);

const beast = new Card("Beast", "https://static.wikia.nocookie.net/marveldatabase/images/2/2f/X-Force_Vol_6_6_Textless.jpg/revision/latest/scale-to-width-down/328?cb=20191105195001", "Oh, my stars and garters!", 5, 4, 3, 4, 1, 4);

const williamStryker = new Card("William Stryker", "https://static.wikia.nocookie.net/marveldatabase/images/2/2b/William_Stryker_%28Earth-616%29_from_New_X-Men_Vol_2_26_0001.jpg/revision/latest/scale-to-width-down/180?cb=20191129225447", " Look around, Pryde. Face my reality. My race is fighting for its very survival. What else do you expect?", 4, 2, 2, 2, 1, 3);

const arcade = new Card("Arcade", "https://static.wikia.nocookie.net/marveldatabase/images/d/da/Arcade_%28Earth-616%29_from_Elektra_Vol_5_1_0001.jpg/revision/latest/scale-to-width-down/325?cb=20180323192721", "I promise... I've given up games of murder. I'm done with death traps. Okay... maybe a tiny little death trap.", 5, 2, 2, 2, 1, 3);

const mystique = new Card("Mystique", "https://static.wikia.nocookie.net/marveldatabase/images/9/9d/X-Men_Vol_5_4_Maer_Virgin_Variant.jpg/revision/latest/scale-to-width-down/325?cb=20191229202634", "I am everywhere. I am nowhere. A shadow, unchained and unleashed. The world made me this way, so let the world suffer. Whoever its masters may be.", 3, 2, 2, 2, 1, 7);

const wolverine = new Card("Wolverine", "https://static.wikia.nocookie.net/marveldatabase/images/1/16/James_Howlett_%28Earth-616%29_from_Wolverine_Vol_7_1_Silva_Variant_cover_001.jpg/revision/latest/scale-to-width-down/329?cb=20191123041154", "I'm Wolverine. I'm the best there is at what I do, but what I do best isn't very nice.", 2, 4, 2, 4, 2, 7);

const nightcrawler = new Card("Nightcrawler", "https://static.wikia.nocookie.net/marveldatabase/images/c/cb/Kurt_Wagner_%28Earth-616%29_from_Legion_of_X_Vol_1_1_Teaser_Variant_cover_001.jpg/revision/latest/scale-to-width-down/320?cb=20220703044834", "Odd how even in the face of tragedy, there are often such wonders -- such miracles -- to be found.", 3, 2, 7, 2, 1, 3);

const shadowKing = new Card("Shadow King", "https://static.wikia.nocookie.net/marveldatabase/images/5/5b/Astonishing_X-Men_Vol_4_1_Villain_Variant_Textless.jpg/revision/latest/scale-to-width-down/329?cb=20170711200356", " Happiness is a lie. Life is horror. The light is always dying, all across the universe. The last star will flicker out someday. When it does, all that remains... shadow. And I will be its king.", 3, 1, 7, 7, 5, 1);

const angel = new Card("Angel", "https://static.wikia.nocookie.net/marveldatabase/images/8/8f/Warren_Worthington_III_%28Earth-616%29_from_X-Corp_Vol_1_1_001.jpg/revision/latest/scale-to-width-down/224?cb=20210513205028", "Savior... killer... harbinger of hope or destruction. I am unsure who-- or what-- I am. But I'd like to find out.", 3, 2, 3, 2, 1, 4);

const charlesXavier = new Card("Charles Xavier", "https://static.wikia.nocookie.net/marveldatabase/images/4/45/Powers_of_X_Vol_1_4_Textless.jpg/revision/latest/scale-to-width-down/329?cb=20190817204842", "Any dream worth having is a dream worth fighting for.", 5, 2, 2, 2, 5, 3);

const emmaFrost = new Card("Emma Frost", "https://static.wikia.nocookie.net/marveldatabase/images/7/74/Marvel_Comics_Vol_1_1000_Artgerm_Collectibles_Exclusive_Emma_Frost_Virgin_Variant.jpg/revision/latest/scale-to-width-down/329?cb=20211002082122", "One more time, then. For the children.", 4, 4, 2, 5, 5, 3);

const bishop = new Card("Bishop", "https://static.wikia.nocookie.net/marveldatabase/images/8/8b/Lucas_Bishop_%28Earth-1191%29_from_Marauders_Vol_1_19_cover_001.jpg/revision/latest/scale-to-width-down/343?cb=20210123231429", "I'm a mutant, too. And I know what it's like to be alone in a strange land.", 2, 3, 7, 3, 4, 4);

const iceman = new Card("Iceman", "https://static.wikia.nocookie.net/marveldatabase/images/3/3a/X-Men_Vol_6_13_Trading_Card_Variant_Textless.jpg/revision/latest/scale-to-width-down/329?cb=20220726054440", "I've been a super hero since before I was old enough to shave. I've stood side by side with the toughest, most powerful heroes in the known universe and always held my own.", 2, 3, 3, 4, 5, 4);

const jeanGrey = new Card("Jean Grey", "https://static.wikia.nocookie.net/marveldatabase/images/4/4d/A.X.E._Judgment_Day_Vol_1_3_Women_of_A.X.E._Variant_Textless.jpg/revision/latest/scale-to-width-down/323?cb=20220711112817", "We come into this world alone and we leave the same way. The time we spent in between - time spent alive, sharing, learning together... is all that makes life worth living.", 3, 2, 3, 2, 6, 4);

const xmenCardContainer = document.querySelector(".x-men-card-container");

xmenCardContainer.innerHTML += juggernaut.getCard();