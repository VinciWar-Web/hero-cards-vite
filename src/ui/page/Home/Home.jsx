import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SpinnerLoading } from '../../components/SpinnerLoading'
import { DataGrid } from './components/DataGrid'
import { startGetAllHero } from '../../redux/thunk/heroThunk'
import { startSpinner } from '../../redux/slice/spinnerSlice'

const Home = () => {

  const { spinner } = useSelector( state => state.spinner )

  // Disparador
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startSpinner(true)) //Activa el Spinner
    dispatch(startGetAllHero()) // Dispara la carga inicial
  }, [dispatch])

  return (
    <>
      {
        spinner 
            ?
          (
            <SpinnerLoading />
          )
            :
          (
            <DataGrid />
          )  
      }
    </>
  )
}

export default Home
