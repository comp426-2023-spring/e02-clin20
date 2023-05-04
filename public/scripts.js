// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

// Browser end interface
var opponent = false;
var game_type = "rps";
var rps = true;

async function play() {
    var player_move = document.getElementById("player_choice").value;

    if (game_type == "rps") {
        if (opponent) {
            var opp_move = document.getElementById("opp_choice").value;
            
        } else {
            // random draw
        }
    } else {
        if (opponent) {
            var opp_move = document.getElementById("opp_choice").value;

        } else {
            // random draw
        }
    }
}

function reset() {

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
    console.log(document.getElementById('game').value)
    if (document.getElementById('game').value == "rps") {
        game_type = "rps";
        rps = true;
        document.getElementById('lizzardo').setAttribute("hidden", "hidden");
        document.getElementById('spocko').setAttribute("hidden", "hidden");
        document.getElementById('lizzard').setAttribute("hidden", "hidden");
        document.getElementById('spock').setAttribute("hidden", "hidden");
    } else {
        game_type = "rpsls"
        rps = false;
        document.getElementById('lizzardo').removeAttribute("hidden");
        document.getElementById('spocko').removeAttribute("hidden");
        document.getElementById('lizzard').removeAttribute("hidden");
        document.getElementById('spock').removeAttribute("hidden");
    }
}