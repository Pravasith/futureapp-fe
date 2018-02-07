import React from "react"
import {connect} from "react-redux"

//typical import of gsap methods
import {TimelineLite} from "gsap";

import {Boy} from "../../assets/images/boy"
import {NextArrow} from "../../assets/images/nextArrow"
import {PreviousArrow} from "../../assets/images/previousArrow"
import {selectIntroText} from "../../actions/introActions"

require("../../assets/cssFiles/introAnimation.css")

class Hello extends React.Component{

    componentDidMount(){
        this.wrapper.focus() // By default, the wrapper element will be focused
        this.barryIntroAnimation() // load barry's intro animation
    }

    componentDidUpdate(){
        this.elementAnimation() // text fade in effect
    }

    onKeyPressed(e) {
        // This makes next and previous buttons controllable by specific keyboard buttons
        if(e.key === 'ArrowRight' || e.key === 'ArrowUp' || e.key === '6' || e.key === 'd' || e.key === 'w'){
            this.clickManager('next')
        }
        if(e.key === 'ArrowLeft' || e.key === 'ArrowDown' || e.key === '4' || e.key === 'a' || e.key === 's'){
            this.clickManager('prev')
        }
      }

    barryIntroAnimation(){

        // this function just animates barry (the character)
        // initially right after the DOM loads
        const barryTl = new TimelineLite()
        const eyesTl = new TimelineLite()
        const eyesTl2 = new TimelineLite()

        // Setting initial values
        barryTl.set(".rightArm", {rotation: -8, transformOrigin:"50% 10%"})
        .set(".leftLeg",  {rotation: 6, transformOrigin:"50% 10%"})
        .set(".rightLeg",  {rotation: -6, transformOrigin:"50% 10%"})
        .set(".boy", { opacity: "0" })
        .set(".infoText",{y:"-150"})
        .set(".sliderBigContainer", {opacity:"0"})
        .set("#brain" , {opacity:0})
        .set("#heartPieces", {opacity:0})
        .set("#heart", {opacity:0})
        .set("#heartFill", {opacity:0})
        .set("#successMountain", {opacity:0, scale:0, transformOrigin:"50% 100%"})
        .set("#startButton", {opacity:0, scale:0})
        .set("#bosses", {opacity:0, scale:0, transformOrigin:"50% 100%"})
        .set("#laptop", {opacity:0, scale:0, transformOrigin:"50% 100%"})
        .set("#tie", {opacity:0, scale:0, transformOrigin:"50% 100%"})
        .set("#ideaCanvas", {opacity:0, scaleX:0, transformOrigin:"50% 100%"})
        .set("#eyes2" , {opacity:0})
        .set(".startYourJourney", {opacity:"0"})
        
        
        // Actually animating
        barryTl
        .from(".infoText", 2, {opacity:"0"})
        .to(".infoText", 0.5, {y:"0"})
        .to(".boy", 0.5, { opacity: "1" })
        .to(".leftArm", 0.4, {rotation: -185, transformOrigin:"50% 10%"})
        .to(".leftArm", 0.3, {rotation: -145, transformOrigin:"50% 10%"})
        .to(".leftArm", 0.3, {rotation: -185, transformOrigin:"50% 10%"})
        .to(".leftArm", 0.3, {rotation: -145, transformOrigin:"50% 10%"}, "waved")
        .to(".leftArm", 0.4, {rotation: 8, transformOrigin:"50% 10%"}, "waved+=0.5" )
        .to(".sliderBigContainer", 0.5, {opacity:"1"})
        // Initializes the slider animation
        .to('.slider', 0.3, {width: this.props.activeText.sliderWidth})
        .to(".startYourJourney", 0.5, {opacity:"1"})

        const eyeTween = () => { 
            // blinks eyes every 3 seconds forever
            eyesTl.to("#eyes", 0.3, {transformOrigin: "50% 50%",  scaleY:0})
            .to("#eyes", 0.3, {transformOrigin: "50% 50%",  scaleY:1})
            .to("#eyes", 2.5, {transformOrigin: "50% 50%",  scaleY:1,  onComplete: eyeTween})

            // blinks second set of eyes which come later in the anim
            eyesTl2.to("#eyes2", 0.3, {transformOrigin: "50% 50%",  scaleY:0})
            .to("#eyes2", 0.3, {transformOrigin: "50% 50%",  scaleY:1})
            .to("#eyes2", 2.5, {transformOrigin: "50% 50%",  scaleY:1,  onComplete: eyeTween})
         }
         eyeTween()
        
    }

    elementAnimation(){
        let tl = new TimelineLite()
        tl.set('.infoText',{opacity:0})
        tl.to('.infoText', 0.8, {opacity:1})
    }

    deactivateButton(button){
        // removes the arrow button from DOM
        if(button === 'prev'){
            let tl = new TimelineLite()
            tl.set('.previousArrow',{display:"none"})
        }
        if(button === 'next'){
            let tl = new TimelineLite()
            tl.set('.nextArrow',{display:"none"})
        }
    }

    activateButton(button){
        // re-places the arrow button to DOM
        if(button === 'prev'){
            let tl = new TimelineLite()
            tl.set('.previousArrow',{display:"block"})
        }
        if(button === 'next'){
            let tl = new TimelineLite()
            tl.set('.nextArrow',{display:"block"})
        }
    }

    clickManager(button){
        // Important - this function takes in the button value and performs actions
        //             use count in the if block (specified in)
        let count = this.props.activeText.clickCount
        if(button === 'next'){
            // Not important - Gives you the click count for the next button
            if(count < this.props.introText.length){
                // Important - use count variable for performing actions which go
                //             in sync with the text, slider
                count++
                this.activateButton('prev')
                let sliderMoveTl = new TimelineLite() // Not imp - moves the slider
                sliderMoveTl.to('.slider', 0.3, {width: count*10/this.props.introText.length +'em' })

            }
            if(count >= this.props.introText.length){
                this.deactivateButton('next')
            }
            // Not important - Uncomment the next line for testing count and clickCount values
            console.log(count, 'clickCount:'+this.props.activeText.clickCount )
        }

        if(button === 'prev'){
            // Not important - Gives you the click count for the previous button
            if(count > 1){
                // Important - use count variable for performing actions which go
                //             in sync with the text, slider
                count--
                this.activateButton('next')
                let sliderMoveTl = new TimelineLite() // Not imp - moves the slider
                sliderMoveTl.to('.slider', 0.3, {width: count*10/this.props.introText.length +'em' })


            }
            if(count <= 1){
                this.deactivateButton('prev')
            }
            // Not important - Uncomment the next line for testing count and clickCount values
            // console.log(count, 'clickCount:'+this.props.activeText.clickCount )
        }

        let barryAnimationTl = new TimelineLite()
                if(count === 1){
                    barryAnimationTl
                    .to(".leftArm", 0.4, {rotation: -185, transformOrigin:"50% 10%"})
                    .to(".leftArm", 0.3, {rotation: -145, transformOrigin:"50% 10%"})
                    .to(".leftArm", 0.3, {rotation: -185, transformOrigin:"50% 10%"})
                    .to(".leftArm", 0.3, {rotation: -145, transformOrigin:"50% 10%"}, "waved")
                    .to(".leftArm", 0.4, {rotation: 8, transformOrigin:"50% 10%"}, "waved+=0.5" )
                }

                if(count === 2){
                    barryAnimationTl
                    .set("#brain path", {strokeDasharray: 0, strokeDashoffset: 0} )
                    .to("#brain path", 1, {strokeDasharray: 20, strokeDashoffset: 20} , "brainHide" )
                    // above 2 lines hide brain when user comes back from the next animation by
                    // clicking previous arrow
                    .to(".leftArm", 0.6, {rotation: -150, transformOrigin:"50% 10%"}, 0, 'movedHand')
                    .to(".leftArm", 0.5, {rotation: 8, transformOrigin:"50% 10%"}, 'movedHand+=0.7')
                    .to(".rightArm", 0.6, {rotation: 150, transformOrigin:"50% 10%"}, 0)
                    .to(".rightArm", 0.5, {rotation: -8, transformOrigin:"50% 10%"}, 'movedHand+=0.7')
                    .to("#brain", 0.5, {opacity: "0"}, "brainHide-=0.1" )
                    
                }

                if(count === 3){
                    
                    barryAnimationTl
                    .set('#heartPieces',{opacity:0})

                    .to("#brain", 0.2, {opacity: "1"} )
                    .to("#brain path", 0.5, {strokeDasharray: 0, strokeDashoffset: 0}, 0  )
                    .to('#eyes', 0.5, {y:-10},"lookUp")
                    .to('#eyes', 0.5, {y:0}, "lookUp+=1.5")

                }

                if(count === 4){

                    // Remove the next animation
                    barryAnimationTl
                    .to("#ideaCanvas", 0.5, {opacity:0, scaleX:0, transformOrigin:"50% 100%"}, "p")
                    .to(".leftArm", 0.5, {rotation: 8, transformOrigin:"50% 10%"}, "p")
                    .to(".rightArm", 0.5, {rotation: -8, transformOrigin:"50% 10%"}, "p")
                    
                    const getArrayWithRandomNumbers = (minNum, maxNum) => {
                        // returns array with randomised values between the specified range
                        // For ex. getArrayWithRandomNumbers(1, 7) gives: 
                        // [5,3,6,2,7,1,4] something like this

                        const getArbitraryNumber = (min,max) => {
                            return Math.floor(Math.random() * (max - min + 1)) + min
                        }
                        
                        let randomArbitraryNumberArray = []

                        while(randomArbitraryNumberArray.length < maxNum-minNum + 1){
                            const tempNumber = getArbitraryNumber(minNum, maxNum)
                            if( randomArbitraryNumberArray.find((item) => item === tempNumber) ){
                                continue
                            }
                            else{
                                randomArbitraryNumberArray.push(tempNumber)
                            }
                        }

                        return randomArbitraryNumberArray
                    }

                    // to test above function
                    // console.log(getArrayWithRandomNumbers(1,54))
                    // console.log(getArrayWithRandomNumbers(1,54).sort(function(a, b){return a-b}))

                    const fallingToPieces = () => {
                        let randomNumberArray1 = getArrayWithRandomNumbers(1,11)

                        randomNumberArray1.map((item) => {
                            return barryAnimationTl.set(".heart"+item, {y:0}  )
                        })

                        randomNumberArray1.map((item) => {
                            return barryAnimationTl.to(".heart"+item, 0.05, {y:400}  )
                        })
                       
                    }

                    barryAnimationTl
                    .set("#brain path", {strokeDasharray: 0, strokeDashoffset: 0} )
                    .to("#brain path", 1, {strokeDasharray: 20, strokeDashoffset: 20} , "brainHide" )
                    .to("#brain", 0.5, {opacity: "0"}, "brainHide-=0.1" )
                    // above 3 lines hide brain (from the previous animation)

                    .to('#heart', 0.2, {opacity:1 },"heart")
                    .to('#heartFill', 0.4, {opacity:1, scale:1.1, transformOrigin:"50% 50%"}, "heart+=0.5")
                    .to('#heart', 0.2, {opacity:0})
                    .to('#heartFill', 0.2, {opacity:0, scale:1, transformOrigin:"50% 50%"}, "heart+=1")
                    .to('#heartPieces', 0.1, {opacity:1}, "heart+=1.2")
                    .to('#heartPieces', 0.4, {opacity:1, onComplete:fallingToPieces}, "heart+=1.5")

                    
                }

                if(count === 5){

                    // removing previous animation
                    barryAnimationTl
                    .set('#heartPieces',{opacity:0})

                    // removing next animation
                    .to('#tie', 0.2, {opacity:0, scale:0, transformOrigin:"50% 100%"})
                    .to('#laptop', 0.2, {opacity:0, scale:0, transformOrigin:"50% 100%"})
                    
                    // Adding new animation
                    .to("#ideaCanvas", 0.5, {opacity:1, scaleX:1, transformOrigin:"50% 100%"}, "c")
                    .to(".leftArm", 0.5, {rotation: -110, transformOrigin:"50% 10%"}, "c")
                    .to(".rightArm", 0.5, {rotation: 110, transformOrigin:"50% 10%"}, "c")
                    
                }

                if(count === 6){

                    // remove previous animation
                    barryAnimationTl
                    .to("#ideaCanvas", 0.2, {opacity:0, scaleX:0, transformOrigin:"50% 100%"}, "p")
                    .to(".leftArm", 0.2, {rotation: 8, transformOrigin:"50% 10%"}, "p")
                    .to(".rightArm", 0.2, {rotation: -8, transformOrigin:"50% 10%"}, "p")


                    // new animation
                    .to('#tie', 0.5, {opacity:1, scale:1, transformOrigin:"50% 100%"})
                    .to('#laptop', 0.5, {opacity:1, scale:1, transformOrigin:"50% 100%"})
                }

                if(count === 7){
                    // removing previous animation
                    barryAnimationTl
                    .to('#tie', 0.2, {opacity:0, scale:0, transformOrigin:"50% 100%"})
                    .to('#laptop', 0.2, {opacity:0, scale:0, transformOrigin:"50% 100%"})
                    // removing next animation
                    .to('#bosses', 0.2, {opacity:0, scale:0, transformOrigin:"50% 100%"})

                    // animate
                    .to(".leftArm", 0.6, {rotation: -150, transformOrigin:"50% 10%"}, 0, 'movedHand')
                    .to(".leftArm", 0.5, {rotation: 8, transformOrigin:"50% 10%"}, 'movedHand+=0.7')
                    .to(".rightArm", 0.6, {rotation: 150, transformOrigin:"50% 10%"}, 0)
                    .to(".rightArm", 0.5, {rotation: -8, transformOrigin:"50% 10%"}, 'movedHand+=0.7')
                }
                
                if(count === 8){
                    // removing previous animation
                    barryAnimationTl
                    .to("#eyes", 0.2, {opacity:1}, "eye")
                    .to("#eyes2", 0.2, {opacity:0}, "eye")

                    // removing next animation
                    .to('#successMountain', 0.2, {opacity:0,scale:0, transformOrigin:"50% 100%"})

                    barryAnimationTl
                    .to('#bosses', 0.2, {opacity:1, scale:1, transformOrigin:"50% 100%"})
                }

                if(count === 9){
                    // removing previous animation
                    barryAnimationTl
                    .to('#bosses', 0.2, {opacity:0, scale:0, transformOrigin:"50% 100%"})

                    // adding new animation
                    .to('#successMountain', 0.5, {opacity:1,scale:1, transformOrigin:"50% 100%"})
                    .to("#eyes", 0.2, {opacity:0}, "eye")
                    .to("#eyes2", 0.2, {opacity:1}, "eye")
                    
                }

                if(count === 10){

                    let changeButtonText = () => {
                        this.refs.button.innerHTML = "Start your journey"
                    }

                    // remove previous animation
                    barryAnimationTl
                    .to('#successMountain', 0.5, {opacity:0,scale:0, transformOrigin:"50% 100%", onComplete:changeButtonText})
                    // .set(".startYourJourney", {fontWeight:100})
                    .to(".startYourJourney", 0.2, {background: "#ffffff"})

                }

        const giveIntroText = () => {
            // Important - Gives you the part of the text required for the 
            //             instance decided by count variable
            let currentText = this.props.introText.filter((item) => {
                return item.id === count
            })
            return currentText[0]
            }
        return this.props.selectText(giveIntroText(),count)
    }

    render(){
        return (
            <div className="background-gradient" 
                onKeyDown={(e) => this.onKeyPressed(e)} 
                tabIndex="0" 
                ref={(input) => { this.wrapper = input }}>

                <div className="hello"  >
                    <div >
                        < Boy />
                    </div>
                    
                    <div className="infoText">
                        <h2 className="introText" >{this.props.activeText.text} 
                        {/* Not important - Uncomment the next line to monitor clickCount */}
                        {/* {this.props.activeText.clickCount} */}
                        </h2>
                    </div>

                    <div className="sliderBigContainer">
                        <span className="prev">
                            <div className="previousArrow" onClick={() => this.clickManager('prev')} >
                                <PreviousArrow/> 
                            </div>
                        </span>
                        
                        <div className="sliderContainer">
                            <div className="slider-background">
                                <div className="slider"></div>
                            </div>
                        </div>
                        
                        <span className="next">
                            <div className="nextArrow" onClick={() => this.clickManager('next')}>
                                <NextArrow/> 
                            </div>
                        </span>
                        
                    </div>
                    <a href="/start"><div className="startYourJourney" ref="button" >Skip this</div></a>
                    
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        introText: state.introText,
        activeText: state.activeText
    }
}

function matchDispatchToProps(dispatch){
    return {
        selectText: (text,clickCount) => {
            dispatch(selectIntroText(text,clickCount))
        }
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Hello)