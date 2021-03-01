import axios from 'axios';
import React, {useRef} from 'react';

export default function NewBeerForm() {
    const nameRef = useRef();
    const taglineRef = useRef();
    const descriptionRef = useRef();
    const first_brewedRef = useRef();
    const brewers_tipsRef = useRef();
    const attenuation_levelRef = useRef();
    const contributed_byRef = useRef();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
 
        const name = nameRef.current.value;
        const tagline = taglineRef.current.value;
        const description = descriptionRef.current.value;
        const first_brewed = first_brewedRef.current.value;
        const brewers_tips = brewers_tipsRef.current.value;
        const attenuation_level = Number(attenuation_levelRef.current.value);
        const contributed_by = contributed_byRef.current.value;
        const beer = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by};
        
        try {
            const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beer);
            alert(response.data.message);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container'>
            <form className='col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-start m-auto' onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label mb-0 mx-3">Name</label>
                    <input type="text" className="form-control rounded-pill" id="name" ref={nameRef} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tagline" className="form-label mb-0 mx-3">Tagline</label>
                    <input type="text" className="form-control rounded-pill" id="tagline" ref={taglineRef} />
                </div>

                <label htmlFor="description" className="form-label mb-0 mx-3">Description</label>
                <div className="mb-3 text-center">
                    <textarea ref={descriptionRef} id="description" cols="40" rows="5" className='rounded form-control'
                        style={{maxHeight: '200px', width: '100%', resize: 'vertical'}}></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="first-brewed" className="form-label mb-0 mx-3">First Brewed</label>
                    <input type="text" className="form-control rounded-pill" id="first-brewed" ref={first_brewedRef} />
                </div>
                <div className="mb-3">
                    <label htmlFor="brewers-tips" className="form-label mb-0 mx-3">Brewers Tips</label>
                    <input type="text" className="form-control rounded-pill" id="brewers-tips" ref={brewers_tipsRef} />
                </div>
                <div className="mb-3">
                    <label htmlFor="attenuation" className="form-label mb-0 mx-3">Attenuation Level</label>
                    <input type="number" className="form-control rounded-pill" id="attenuation" defaultValue='1'
                    min='1' max='100' ref={attenuation_levelRef} />
                </div>
                <div className="mb-3">
                    <label htmlFor="contributed-by" className="form-label mb-0 mx-3">Contributed By</label>
                    <input type="text" className="form-control rounded-pill" id="contributed-by" ref={contributed_byRef} />
                </div>
                <div className='text-center d-grid gap-2 d-md-block'>
                    <button type="submit" className="btn btn-info rounded-pill">Submit</button>
                </div>
            </form>
        </div>
    )
}