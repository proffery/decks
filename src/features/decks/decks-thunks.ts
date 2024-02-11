import { Dispatch } from "redux";
import { DeckRequestType, decksAPI } from "./decks-api";
import { addDeckAC, setDecksAC } from "./decks-reducer";

export const fetchDecksTC = () => (dispatch: Dispatch) => {
    decksAPI.fetchDecks().then(res => dispatch(setDecksAC(res.data.items)))
}

export const addDecksTC = (deckData: DeckRequestType) => (dispatch: Dispatch) => {
    decksAPI.addDeck(deckData).then(res => dispatch(addDeckAC(res.data)))
}