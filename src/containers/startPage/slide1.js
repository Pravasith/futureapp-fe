import React from 'react'

//typical import of gsap methods
import { TimelineLite } from "gsap";

import { Bulb } from './../../assets/images/bulb';
import { CourageWhite } from './../../assets/images/courageWhite';
import { Meditator } from './../../assets/images/meditator';


export  class Slide1 extends React.Component{


    constructor(props, context) {
        super(props, context)
    
        this.state = {
            name: "ideaText blink"
        }

        this.toggleClassName = this.toggleClassName.bind(this)
    }
    

    toggleClassName() {
        this.setState({name: "ideaText"})
    }

    

    nextSlide(e){
        e.preventDefault()
        const slide = 2

        if(!this.refs.ideaText.value){

            this.setState({
                name: "ideaText warning"
            })

            this.refs.ideaText.placeholder = "Come on tiger, enter a random idea from your head. I'm sure you must have many there."
        }

        else{
            console.log('====================================');
            console.log(this.refs.ideaText.value, slide);
            console.log('====================================');
        }
    }

    render(){

        const highLight = new TimelineLite()
        const highLightWarn = new TimelineLite()

        function warning ()  {
            highLightWarn
            .to('.warning', 0.2, { borderColor: "#FF6C6C"})
            .to('.warning', 0.8, { borderColor: "#FFFFFF", onComplete: warning})
        }

        warning()

        function blink  ()  {
            highLight
            .to('.blink', 0.3, { borderColor: "#94E8FF"})
            .to('.blink', 0.3, { borderColor: "#FCEE21"})
            .to('.blink', 0.3, { borderColor: "#FF94F3"})
            .to('.blink', 0.3, { borderColor: "#FFFFFF", onComplete: blink})
        }

        if(this.state.name !== "ideaText warning"){
            blink()
        }

        
        

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
                                <textarea ref="ideaText" name="idea" className={this.state.name} onFocus={this.toggleClassName} placeholder="Click here to start typing...&#10;Example: I want to build a washing machine which runs on pedalling power."></textarea>
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

const mapStateToProps = (state) => {

}