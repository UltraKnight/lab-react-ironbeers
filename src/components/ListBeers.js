import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const apiBaseUrl = 'https://ih-beers-api2.herokuapp.com/beers/';

export default function ListBeers() {
    const [beers, setBeers] = React.useState([]);

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

    //render always called first - nothing in the state yet
    return beers.length > 0 ? (
        beers.map(beer => {
            return (
                <div key={beer._id}>
                    <div className="card sm-12 mb-3" style={{maxWidth: '540px'}}>
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
    ) : <p>Loading...</p>
}