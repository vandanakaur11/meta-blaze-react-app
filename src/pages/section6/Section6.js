import React from 'react'
import classes from "./Section6.module.css"
import bg4One from "./../../images/bg4One.png"
import bg4Two from "./../../images/bg4Two.png"
import bg4 from "./../../images/bg4.png"

function Section6() {
    return (
        <div  className={classes.container}>
           <div className={classes.large}>
            <img alt="" src={bg4}/>
           </div>
            <div className={classes.small}>
                <img alt="" src={bg4One}/>
                <img alt="" src={bg4Two}/>
            </div>
        </div>
    )
}

export default Section6