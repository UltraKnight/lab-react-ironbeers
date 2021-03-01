import React, {useState, useEffect} from 'react';
import axios from 'axios';
const apiBaseUrl = 'https://ih-beers-api2.herokuapp.com/beers/';

export default function BeerDetails({match, random}) {
    let {id} =  match ? match.params : {id: ''};

    const [beer, setBeer] = useState({});

    useEffect(() => {
        async function getBeer() {
            let beer = {};
            if(random) {
                beer = await axios.get(`${apiBaseUrl}random`)
            } else {
                beer = await axios.get(`${apiBaseUrl}${id}`);
            }
            beer = beer.data;
            
            setBeer(beer);
        }
        
        getBeer();
    }, [id, random])

    return beer && beer.name ? (
        <div>
            <div className="col-sm-12 col-md-8 col-xxl-6 m-auto mt-3">
            <img src={beer.image_url} className="card-img-top" style={{height: '180px', width: 'auto'}} alt={beer.name} />
            <div className="card-body text-start">
                <div className='d-flex justify-content-between'>
                    <h5 className="card-title">{beer.name}</h5>
                    <h3 className='card-title text-muted'>{beer.attenuation_level}</h3>
                </div>
                <div className='d-flex justify-content-between'>
                    <p className="card-text text-muted">{beer.tagline}</p>
                    <p className='card-text'>{beer.first_brewed}</p>
                </div>
                <p className="card-text">{beer.description}</p>
                <p className="card-text"><small className='text-muted'>{beer.contributed_by}</small></p>
            </div>
            </div>
        </div>
    ) : <div>Loading...</div>
}

/**
 * image
name
tagline
first_brewed
attenuation_level
description
contributed_by
 */