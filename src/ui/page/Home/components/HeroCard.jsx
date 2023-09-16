import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { startGetHero } from '../../../redux/thunk/heroThunk'
// import { startSpinner } from '../../../redux/slice/spinnerSlice'
import PropTypes from 'prop-types'
import { startSpinner } from '../../../redux/slice/spinnerSlice'
// import { heroInfo, ModalViewHero, spinnerLoading } from '../../Redux/Actions/heroActios'

export const HeroCard = (
    {
        id,
        photo,
        aliases,
        fullName,
        race,
    }
) => {

    //Estado para traducir
    const [t] = useTranslation("global")

    //Validamos si los valores existen
    const heroFullName = fullName 
        ? (fullName.length > 10 ? fullName.substring(0, 10) + '...' : fullName) 
        : "Sin Información"; 

    const heroRece = race || "Sin Información";

    //Helpers
    const dispatch = useDispatch();

    // Controlamos los datos de los Heroes detallados y direccionamos la vista al modal
    const handleClic = () => {
        dispatch(startSpinner(true)) //Activa el Spinner
        dispatch(startGetHero(id))
    }

    return (
        <>
            <div className='flex flex-col justify-between bg-white mt-10 m-4 rounded-xl hover:transform hover:scale-110 hover:transition hover:duration-150 shadow-md animate__animated animate__fadeIn'>
                <div>
                    <div>
                        <img className='w-full rounded-t-xl' src={photo.lg} alt='Logo'/>
                    </div>

                    <div className='flex justify-center items-center mb-2 bg-officialColorBtn border-t-2 border-officialColor h-10 pl-3 font-nun font-extrabold text-white'>
                        <p>{aliases}</p>
                    </div>

                    <div className='ml-3 text-sm'>
                        <p><b>{t("name")}</b> { heroFullName }</p>
                    </div>

                    <div className='ml-3 text-sm mb-2'>
                        <p><b>{t("race")}</b> {heroRece}</p>
                    </div>

                    <div 
                        className='flex justify-center items-center h-8 m-4 bg-officialColor rounded-xl text-white font-nun font-semibold cursor-pointer hover:text-officialColorBtn hover:duration-200'
                        onClick={ handleClic }
                    >
                        <p>{t("see-hero")}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

HeroCard.propTypes = {
    id: PropTypes. number.isRequired,
    photo: PropTypes.object,
    aliases: PropTypes.string,
    fullName: PropTypes.string,
    race: PropTypes.string,
};
