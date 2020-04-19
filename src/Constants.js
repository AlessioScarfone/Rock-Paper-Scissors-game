export const RPSMove = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors',
    lizard: 'lizard',
    spock: 'spock'
}

export const BeatMapOriginal = new Map([
    [RPSMove.rock , [RPSMove.scissors]],
    [RPSMove.scissors , [RPSMove.paper]],
    [RPSMove.paper , [RPSMove.rock]]
])

export const BeatMapBonus = new Map([
    [RPSMove.rock , [RPSMove.scissors, RPSMove.lizard]],
    [RPSMove.scissors , [RPSMove.paper, RPSMove.lizard]],
    [RPSMove.paper , [RPSMove.rock,RPSMove.spock]],
    [RPSMove.lizard , [RPSMove.paper,RPSMove.spock]],
    [RPSMove.spock , [RPSMove.rock,RPSMove.scissors]]
])