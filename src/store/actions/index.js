export const PLAYER_NAME_REQUEST = 'PLAYER_NAME_REQUEST';
export const PLAYER_NAME_SUCCESS = 'PLAYER_NAME_SUCCESS';
export const PLAYER_NAME_FAIL = 'PLAYER_NAME_FAIL';

export function PlayerName(name) {
    return {
        type:  PLAYER_NAME_SUCCESS, payload: { name }
    }
}
