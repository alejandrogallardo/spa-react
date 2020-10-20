import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    // console.log(location.search);
    // console.log(queryString.parse(location.search));
    const {q = ''} = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });
    
    const {searchText} = formValues;
    
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
    // const heroesFiltered = getHeroesByName(searchText); // esto hace que se dispare la busqueda cada vez que se presiona una tecla

    const handleSearch = (e) => {
        e.preventDefault();
        
        // console.log(searchText);
        history.push(`?q=${searchText}`);
    }

    return (
        <div>
            <h1>Buscador</h1>
            <hr />
            
            <div className="row">

                <div className="col-5">
                    <h4>Formulario de busqueda</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Busqueda"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Buscar
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />

                    {
                        (q === '')
                        &&
                        <div className="alert alert-info">
                            Buscar un heroe
                        </div>
                    }
                    
                    {
                        ( q !== '' && heroesFiltered.length === 0 )
                        &&
                        <div className="alert alert-danger">
                            No existe un hero que coincida con tu busqueda {q}
                        </div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />

                        ))
                    }

                </div>
            
            </div>
            
        </div>
    )
}
