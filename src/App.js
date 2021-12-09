import React, {useState, useEffect} from 'react';
import Hero from './Components/Hero';
import './App.css';

const App = () => {

    const API_KEY = "24717099-9018a1bb0109613c8967768b0";

    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(inputValue);
        setInputValue('');
    }

    const newImages = (direction) => {
        if(direction === 'next') {
            setCurrentPage((prevCurrentPage) => prevCurrentPage+ 1);
        } else if(direction === 'previous' && currentPage !== 1) {
            setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);

        fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${search}&image_type=photo&per_page=9&page=${currentPage}&pretty=true`)
        .then(res => res.json())
        .then(data => setImages(data.hits));
    }, [search, currentPage]);

    return (
        <div className="App">
            < Hero 
                images={images}
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleSearch={handleSearch}
                newImages={newImages}
            />
        </div>
    );
}

export default App;
