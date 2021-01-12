import React, {useState, useEffect} from 'react';
import './style.css';
import axios from 'axios';


export default function Home(params) {
    const [quote, setQuote] = useState({});
    const [favourites, setFavourites] = useState([]);

    async function getQuote() {
        try {
            const { data } = await axios.get('https://api.kanye.rest/');
            setQuote(data);
        } catch (error) {
            throw error
        }
    }

    function addToFavourites() {
        if (quote) {
            console.log(quote, 'add');
            setFavourites([...favourites, quote])
        }
        console.log(favourites, 'fav onclick');
    }
    if (favourites) {
        console.log(favourites, 'fav');
    }

    return (
        <div className="home">
            <img src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg?auto=format%2Ccompress&crop=top&fit=crop&h=576&w=1024" width='350' alt=""/>
            <h3>Kanye-West Quote</h3>
            {quote && (
             <p>{quote.quote}</p>   
            )}
            {favourites && favourites.map((favourite, i) => (
                <li key={i}>{favourite.quote}</li>
            ))}
            <button onClick={getQuote}>Get Quote</button> <button onClick={addToFavourites}>Add to Favourite</button>
        </div>
    )
}