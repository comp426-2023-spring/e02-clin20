// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

// Browser end interface
var opponent = true;
var game_type = "rps";
var rps = true;
var rules = false;

async function play() {
    var player_move = document.getElementById("player_choice").value;

    if (game_type == "rps") {
        if (opponent) {
            var opp_move = document.getElementById("opp_choice").value;
            const endpoint = "app/rps/play/" + player_move + "/" + opp_move
            const url = document.baseURI+endpoint
            await fetch(url)
                .then(function(response) {
                    return response.json();
               })
                    .then(function(result) {
                        document.getElementById("you_chose").innerHTML = "your move: " + result.player;
                        document.getElementById("opp_chose").innerHTML = "your opponent's move: " + result.opponent;
                        document.getElementById("result").innerHTML = "this game's result: " + result.result;
                    });

        } else {
            const endpoint = "app/rps/play/" + player_move
            const url = document.baseURI+endpoint
            await fetch(url)
                .then(function(response) {
                    return response.json();
               })
                    .then(function(result) {
                        document.getElementById("you_chose").innerHTML = "your move: " + result.player;
                        document.getElementById("opp_chose").innerHTML = "random move: " + result.opponent;
                        document.getElementById("result").innerHTML = "this game's result: " + result.result;
                    });
        }
    } else {
        if (opponent) {
            var opp_move = document.getElementById("opp_choice").value;

            const endpoint = "app/rpsls/playopp/" + player_move + "/" + opp_move
            const url = document.baseURI+endpoint
            await fetch(url)
              .then(function(response) {
                    return response.json();
                })
                    .then(function(result) {
                        document.getElementById("you_chose").innerHTML = "your move: " + result.player;
                        document.getElementById("opp_chose").innerHTML = "your opponent's move: " + result.opponent;
                        document.getElementById("result").innerHTML = "this game's result: " + result.result;
                    });

        } else {
            const endpoint = "app/rpsls/play/" + player_move
            const url = document.baseURI+endpoint
            await fetch(url)
              .then(function(response) {
                    return response.json();
                })
                    .then(function(result) {
                        document.getElementById("you_chose").innerHTML = "your move: " + result.player;
                        document.getElementById("opp_chose").innerHTML = "random move: " + result.opponent;
                        document.getElementById("result").innerHTML = "this game's result: " + result.result;
                    });
        }
    }
}

function reset() {
    document.location.reload();
}

function toggle_rules() {
    if (rules) {
        document.getElementById('rules').setAttribute("hidden", true);
        rules = false;
    } else {
        document.getElementById('rules').removeAttribute("hidden");        
        rules = true;
    }
}

function opponent_select() {
    if (document.getElementById('opponent').checked) {
        opponent = true;
    } else {
        opponent = false;
    }
    if (opponent) {
        document.getElementById('opp_choice').style.display = "inline";
        document.getElementById('opp_label').style.display = "inline";
    } else {
        document.getElementById('opp_choice').style.display = "none";
        document.getElementById('opp_label').style.display = "none";
    }
}

function game_select() {
    if (document.getElementById('game').value == "rps") {
        game_type = "rps";
        rps = true;
        document.getElementById('lizardo').setAttribute("hidden", "hidden");
        document.getElementById('spocko').setAttribute("hidden", "hidden");
        document.getElementById('lizard').setAttribute("hidden", "hidden");
        document.getElementById('spock').setAttribute("hidden", "hidden");
    } else {
        game_type = "rpsls"
        rps = false;
        document.getElementById('lizardo').removeAttribute("hidden");
        document.getElementById('spocko').removeAttribute("hidden");
        document.getElementById('lizard').removeAttribute("hidden");
        document.getElementById('spock').removeAttribute("hidden");
    }
}