import { Provider } from 'react-redux'
import { store } from './redux/store'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import { I18nextProvider } from 'react-i18next'
import i18n from '../common/utils/translations/i18next.config'
import { router } from '../common/utils/router'

import Home from './page/Home/Home'
import Error402 from './page/Error402'
import { Nabvar } from './components/Nabvar'
import { Search } from './page/Search/Search'
import { HeroViewModal } from './components/HeroViewModal'

import 'animate.css'

const persistor = persistStore( store )

const App = () => {
    return (
      <>
        <Provider store={ store }>
            <PersistGate persistor={ persistor }>
              <I18nextProvider i18n={i18n}>

                <BrowserRouter>

                  <Nabvar />
                  <HeroViewModal />
                  
                  <Routes>
                      <Route exact path={router.home} element={ <Home /> } />
                      <Route exact path={router.search} element={ <Search /> } />

                      <Route path="*" element={<Error402 />} />
                  </Routes>
                </BrowserRouter>

              </I18nextProvider>
            </PersistGate>
        </Provider>
      </>
    )
}

export default App
