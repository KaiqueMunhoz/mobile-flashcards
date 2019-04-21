import { AsyncStorage } from 'react-native'
import decksData from '../model/decksData'

const DECKS_KEY = 'DECKS_KEY'

export const initializeDeckData = () => {
  updateDecksData(decksData)
  return decksData
}

export const updateDecksData = decks => {
  return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks));
}

export const getDecksData = () => {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(decks => JSON.parse(decks))
    .catch((err) => {
      console.warn(`getDeckData ${err}`)
    });
}

export const saveDeckTitle = title => {
  getDecksData().then(oldValues => {
    const newValues = {...createDeckObject(title), ...oldValues}
    updateDecksData(newValues)
  })
}

createDeckObject = title => {
  const newDeck = JSON.stringify({
    [title] : {
      title,
      questions: []
    }
  })
  return JSON.parse(newDeck)
}
