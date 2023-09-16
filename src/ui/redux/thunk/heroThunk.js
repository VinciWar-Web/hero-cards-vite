import GetAllHeroUseCase from '../../../domain/useCase/GetAllHeroUseCase'
import GetHeroUseCase from '../../../domain/useCase/getHeroUseCase'
import { setHero, setHeroAll } from '../slice/heroSlice'
import { setHeroModal } from '../slice/modalSlice'
import { startSpinner } from '../slice/spinnerSlice'

export const startGetAllHero = () => {
    return async (dispatch) => {

        const { newData, status } = await new GetAllHeroUseCase().call()

        if (status === 200) {
            dispatch(setHeroAll(newData));

            setTimeout(() => {
                dispatch(startSpinner(false)); // Desactiva el Spinner
            }, 500)
        }
    }
}


export const startGetHero = (id) => {
    return async (dispatch) => {

        const { newData, status } = await new GetHeroUseCase().call(id)

        if (status === 200) {
            dispatch(setHero(newData))
        }

        setTimeout(() => {
            dispatch(startSpinner(false)); // Desactiva el Spinner
            dispatch(setHeroModal(true))   // Activa el modal
        }, 300)
    }
}
