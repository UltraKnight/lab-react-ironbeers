import React from 'react';

export default function Home() {
    return(
        <div className='col-sm-12 fs-2'>
            <div>
                <a className='text-dark text-decoration-none' href="/beers">All Beers</a>
            </div>
            <div>
                <a className='text-dark text-decoration-none' href="/random-beer">Random Beer</a>
            </div>
            <div>
                <a className='text-dark text-decoration-none' href="/new-beer">New Beer</a>
            </div>
        </div>
    )
}