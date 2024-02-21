import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from './GlobalError/GlobalError.tsx'
import { LinearLoader } from '../common/components/Loader/LinearLoader.tsx'
import { selectAppStatus } from '../features/decks/decks-selectors.ts'
import { useAppSelector } from './store.ts'

export const App = () => {
  const appStatus = useAppSelector(selectAppStatus)
  return (
    <div>
      {appStatus === 'loading' && <LinearLoader />}
      <Decks />
      <GlobalError />
    </div>
  )
}
