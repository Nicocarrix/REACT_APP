export const SaveGameToStorage = ({board, turn}) => {
    // guardar LocalStorage

    window.localStorage.setItem('board', JSON.stringify(board));
    window.localStorage.setItem('turn', turn);
 
}

export const resetGameStorage = ( )=> {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')

}