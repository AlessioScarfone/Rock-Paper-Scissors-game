export const RPSMove = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors'
}

export const BeatMapOriginal = new Map([
    [RPSMove.rock , RPSMove.scissors],
    [RPSMove.scissors , RPSMove.paper],
    [RPSMove.paper , RPSMove.rock]
])