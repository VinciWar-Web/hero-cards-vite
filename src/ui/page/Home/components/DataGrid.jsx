import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import ReactPaginate from 'react-paginate'

import { HeroCard } from './HeroCard'
import { startSpinner } from '../../../redux/slice/spinnerSlice'

export const DataGrid = () => {
    
    // Data inicial
    const { herosAll } = useSelector( state => state.heros )

    //Estado para traducir
    const [t] = useTranslation("global");

    // Disparador
    const dispatch = useDispatch();

    // Estados
    const [users, setUsers] = useState([]) // Set de datos inicial
    const [pageNumber, setPageNumber] = useState(0) // Pagina donde iniciara

    const [pageSize, setageSize] = useState(6) // Item en cada pagina

    const usersPerPage = pageSize
    const pagesVisited = pageNumber * usersPerPage

    // Mapeamos la Data principal y la almacenamos en un componente y la retornamos
    const displayHero = users.slice(pagesVisited, pagesVisited + usersPerPage).map((hero, index) => {
        return <HeroCard key={index} {...hero} />
    });

    const pageCount = Math.ceil(users.length / usersPerPage);
  
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
  
    // Dispara la carga de los Heroes
    useEffect(() => {
        setUsers(herosAll.slice(0, 96))
    }, [dispatch, herosAll])

    //Controlamos la cantidad de item a listar
    const handleSelect = (e) => {
        dispatch(startSpinner(true));
        setageSize(Number(e.target.value))
    }
    
    return (
        <div>
            <div className='grid gap-1 grid-cols-1 grid-rows-1 mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-6 pt-20 z-20'>
                {displayHero} {/*Se Muestra la data*/}
            </div>
            
            <div className="tablet:flex tablet:justify-between pt-10 p-4">
                {/*Para cambiar la cantidad de heroe mostrados*/}
                <div className="flex justify-center">
                    <div className="flex justify-center items-center text-lg text-officialColorBtn font-nun font-semibold pr-2">
                        <p>{t("item-shown")}:</p>
                    </div>
                    <div>
                        <select className="footerSelect" onChange={ handleSelect }>
                            <option value="6">6</option>
                            <option value="12">12</option>
                            <option value="24">24</option>
                            <option value="48">48</option>
                            <option value="96">96</option>
                        </select>
                    </div>
                </div>

                {/*Paginador*/}
                <div className='flex justify-center'>
                    <div>
                        <ReactPaginate
                            previousLabel={"<"}
                            nextLabel={">"}
                            breakLabel={"..."}
                            marginPagesDisplayed={0}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

