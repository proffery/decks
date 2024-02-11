import { useEffect } from 'react'
import s from './DecksList.module.css'
import { decksAPI } from '../decks-api'
import { setDecksAC } from '../decks-reducer'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { DeckItem } from './DeckItem/DeckItem'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(state => state.decksReducer.decks)

  useEffect(() => {
    decksAPI.getDecks().then(res => dispatch(setDecksAC(res.data.items)))
  }, [])

  return <ul className={s.list}>
    {decks.map(deck => <DeckItem key={deck.id} deck={deck} />)}
  </ul>
}
