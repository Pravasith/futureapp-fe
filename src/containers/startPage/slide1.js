import React from 'react'
import { Bulb } from './../../assets/images/bulb';
import { CourageWhite } from './../../assets/images/courageWhite';
import { Meditator } from './../../assets/images/meditator';


export  class Slide1 extends React.Component{




    render(){
        return(
        /* ************************************************************************** */
        /* *********************** enter idea form html start *********************** */
    
                <div className="ideaElementWrapper slide1">
                <div className="bulbWrapper">
                    <Bulb/>
                </div>
                <div>
                    <Meditator/>
                </div>
                <span ></span>
                <div className="writeHead">
                    <h1>Write your idea in short...</h1>
                    <div className="courageIcon">
                        <p> + </p>
                        <span></span>
                        <CourageWhite/>
                        <span></span>
                        <p>  Courage </p>
                    </div>
                    
                </div>
                <div className="textInputWrapper">
                    <form 
                    onSubmit={(e) => this.nextSlide(e)}
                    >
                            <textarea name="idea" placeholder="Click here to start typing...&#10;Example: I want to build a washing machine which runs on pedalling power."></textarea>
                            <span></span>
                            <button className="whiteBtnBig">Next</button>
                    </form>
                </div>
            </div>

    /* ************************ enter idea form html end ************************ */
    /* ************************************************************************** */
    )
}
}