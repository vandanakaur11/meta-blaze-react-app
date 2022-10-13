import React from "react";
import classes from "./Section4.module.css";
import mImg from "./../../images/mImg.png";
import logo5 from "./../../images/logo5.png";
import newMint from "../../images/newMint.png";

function Section4() {
  return (
    <div className={classes.container}>
      <div>
        <img alt="" src={logo5} className={classes.imgStyle} />
      </div>
      <div>
        <img alt="" src={newMint} className={classes.imgStyle2} />
      </div>
      <div className={classes.containerInner}>
        <div className={classes.para}>
          Chapter one begins with the arrival of the Legendary MetaGoblins on
          the Blue Moon, a strange, distant space rock teeming not with life,
          but with the MetaGoblins’ most coveted resource,the
          TerranziniteCrystal. The Legendary MetaGoblins are tasked with
          Operation MetaMinez, directed to find an efficient way of excavating
          the crystals from the Moon’s treacherous landscapes, and sending them
          home to their dying planet, Glozark.
        </div>
        <div className={classes.bottomwrap}>
          <div className={classes.bottomText}>Read Full Chapter 1 here</div>
          <div>
            <img alt="" src={mImg} />
          </div>
        </div>
        <center>
          <p>
            But, upon arrival on the Blue Moon SES
            <br />
            The MetaGoblins’ quickly learned that they were not alone....
            <br />
            <b className={classes.boldText}> There were others !</b>
          </p>
        </center>
      </div>
    </div>
  );
}

export default Section4;
