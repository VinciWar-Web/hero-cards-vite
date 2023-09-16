import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import lupa from '../../../common/assets/lupa.png'
import { getHeroByName } from '../../helpers/getHeroByName'
import { HeroCard } from '../Home/components/HeroCard'
import { startSpinner } from '../../redux/slice/spinnerSlice'
import { SpinnerLoading } from '../../components/SpinnerLoading'

export const Search = () => {

    //Hooks
    const [t] = useTranslation("global");

    //Helpers
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const location = useLocation()

    // Registro
    const { spinner } = useSelector( state => state.spinner )
    const { herosAll } = useSelector((state) => state.heros)

    // Transforma la data que viene del location y con la libreria convertimos la data query en strint
    const { q = '' } = queryString.parse( location.search ) 

    // Helpers con datos filtrados
    const heroes = getHeroByName( q, herosAll )

    // Hooks Datos del formulario
    const [ formValues, handleInputChange ] = useForm({
        search: q
    })
    const { search } = formValues

    //Manejador del Buscador
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(startSpinner(true));

        setTimeout(() => {
            dispatch(startSpinner(false));
        }, 500)

        navigate(`?q=${ search }`)
    }

  return (
      <>
        {
            spinner ? 
            (
                <SpinnerLoading />      
            ) :
            (
                <>
                    <div className='pt-28 mobile:pt-24'>
                        
                        <div className='flex justify-center'>

                            <div className='flex justify-around bg-gray-100 rounded-lg py-4 m-4 mt-10 w-full'>
                                <form
                                    className="w-11/12 bg-transparent flex justify-between"
                                    onSubmit={handleSubmit}
                                >
                                    <input
                                        type="text"
                                        autoComplete='off'
                                        className="appearance-none texto w-11/12  bg-transparent focus:outline-none"
                                        name="search"
                                        placeholder={t("look-for-a-hero")}
                                        onChange={ handleInputChange }
                                        value={ search }
                                    />

                                    <button>
                                        <img
                                            className="mx-5 cursor-pointer"
                                            src={lupa}
                                            alt="search icon"
                                        />
                                    </button>
                                </form>
                            </div>
                        </div>

                        {
                            q === '' || heroes.length === 0 && (
                                <>
                                    <div className='flex justify-center items-center mt-28 animate__animated animate__fadeIn'>
                                        <p className=' text-xl text-officialColorText font-nun font-extrabold'>{t("noHeroWitch")}</p> 
                                        <p>&nbsp;</p>
                                        <p className=' text-xl text-officialColor font-nun font-extrabold'>{ q }</p> 
                                    </div>
                                </>
                            )
                        }

                        <div  className='grid gap-1 grid-cols-1 grid-rows-1 mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-6 z-20'>
                            {
                                heroes.map( hero => (
                                    <HeroCard key={hero.id} {...hero} />
                                ))
                            }
                        </div>

                    </div>
                </>
            )
        }
    </>
  )
}
