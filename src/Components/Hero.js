import React from 'react';
import Container from './Container';
import Search from './Search';
import Card from './Card';

const Hero = (props) => {

    const {inputValue, setInputValue, handleSearch, images, newImages} = props;

    return (
        <section className="hero">
            <Search 
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleSearch={handleSearch}
            />
            <Container >
                <Card images={images} />
                {images.length === 0  ?  (
                    <h1>Image not found!!!</h1>
                ) :  (
                    <div className="btnContainer">
                        <button onClick={() => newImages("previous")}>Previous</button>
                        <button onClick={() => newImages("next")}>Next</button>
                    </div>
                )}
            </Container>
        </section>
    )
}

export default Hero;