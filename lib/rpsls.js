export { rps, rpsls, rps_opp, rpsls_opp }

let result = {
    rock: {
        rock: 'tie',
        paper: 'win',
        scissors: 'lose',
        lizard: 'lose',
        spock: 'win'
    },
    paper: {
        rock: 'lose',
        paper: 'tie',
        scissors: 'win',
        lizard: 'win',
        spock: 'lose'
    },
    scissors: {
        rock: 'win',
        paper: 'lose',
        scissors: 'tie',
        lizard: 'lose',
        spock: 'win'
    },
    lizard: {
        rock: 'win',
        paper: 'lose',
        scissors: 'win',
        lizard: 'tie',
        spock: 'lose'
    },
    spock: {
        rock: 'lose',
        paper: 'win',
        scissors: 'lose',
        lizard: 'win',
        spock: 'tie'
    }
}

function rps(play) {
    let hands = ['rock', 'paper', 'scissors']
    let rand_play = hands[Math.floor(Math.random() * 3)]

    if(play == undefined){
        return {"player" : rand_play}
    }
    play = play.toLowerCase()

    if (!(hands.includes(play))) {
        console.error(`${play} is not an option`);
        throw new RangeError();
    }

    return {player: play, opponent: rand_play, result: result[rand_play][play]}
}

function rps_opp(play, opp) {
    let hands = ['rock', 'paper', 'scissors']

    if(play == undefined){
        return {"player" : rand_play}
    }

    play = play.toLowerCase()
    opp = opp.toLowerCase()

    if (!(hands.includes(play)) | !(hands.includes(opp))) {
        throw new RangeError();
    }

    return {player: play, opponent: opp, result: result[opp][play]}
}

function rpsls(play) {
    let hands = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    let rand_play = hands[Math.floor(Math.random() * 5)]

    if(play == undefined){
        return {"player" : rand_play}
    } 

    play = play.toLowerCase()

    if (!(hands.includes(play))) {
        throw new RangeError();
    }

    return {player: play, opponent: rand_play, result: result[rand_play][play]}

}

function rpsls_opp(play, opp) {
    let hands = ['rock', 'paper', 'scissors', 'lizard', 'spock']

    if(play == undefined){
        return {"player" : rand_play}
    } 
    if(opp == undefined){
        return {"player" : rand_play}
    } 

    play = play.toLowerCase()
    opp = opp.toLowerCase()

    if (!(hands.includes(play)) | !(hands.includes(opp))) {
        throw new RangeError();
    }

    return {player: play, opponent: opp, result: result[opp][play]}
}