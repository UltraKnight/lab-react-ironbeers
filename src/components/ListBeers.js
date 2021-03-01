import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const apiBaseUrl = 'https://ih-beers-api2.herokuapp.com/beers/';
const apiSearchUrl = 'https://ih-beers-api2.herokuapp.com/beers/search?q='; //add query after equals sign

export default function ListBeers() {
    const [beers, setBeers] = React.useState([]);
    const queryRef = React.useRef();

    React.useEffect(() => {
        async function getBeers() {
            try {
                const beersFromApi = await axios.get(apiBaseUrl);
                setBeers(beersFromApi.data);
            } catch (error) {
                console.log(error)
            }
        }

        getBeers();
    }, [])

    const handleChange = async (_event) => {
        const query = queryRef.current.value;
        const beersFromApi = await axios.get(`${apiSearchUrl}${query}`);
        setBeers(beersFromApi.data);
    }

    //render always called first - nothing in the state yet
    return beers.length > 0 ? (
        <>
        <div className='mt-3 col-sm-8 col-md-6 col-lg-4 text-start'>
            <label htmlFor="query" className="form-label mb-0 mx-3">Search for a beer</label>
            <input id='query' type="text" className="form-control mx-3" ref={queryRef} onChange={handleChange} />
        </div>
        {
            beers.map(beer => {
                return (
                    <div key={beer._id} className='mt-3'>
                        <div className="card col-sm-12 col-mb-3 mb-1" style={{maxWidth: '540px'}}>
                            <div className="row g-0">
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <Link to={`/beers/${beer._id}`}><img src={beer.image_url} style={{maxHeight: '120px'}} alt={beer.name} /></Link>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><Link className='text-dark' style={{textDecoration: 'none'}} to={`/beers/${beer._id}`}>{beer.name}</Link></h5>
                                    <p className="card-text">{beer.tagline}</p>
                                    <p className="card-text"><small className="text-muted"><strong>Created by: </strong>{beer.contributed_by && beer.contributed_by.substring(0, beer.contributed_by.indexOf('<'))}</small></p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
    : <p>Loading...</p>
}