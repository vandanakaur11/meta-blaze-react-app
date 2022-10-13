import React from "react";
import classes from "./Section2.module.css";

function Section2() {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <i>AS USUAL, IT’S PROBABLY BEST TO BEGIN... AT THE BEGINNING</i>
      </div>
      <div className={classes.para1}>
        In the beginning, there was a distant galaxy, known as Galaxia Blue. In
        the beginning – there were but a few galaxies swirling adrift in the
        deepest black of the Cosmos. Among them was Galaxia Blue – a uniquely
        dense galaxy resting on the edge of existence itself. Home to
        innumerable, unique solar systems, Galaxia Blue quickly proved capable
        of supporting complex, sentient life.
      </div>
      <div className={classes.wrap}>
        <div className={classes.para2}>
          In the year 2126, after centuries of unrest, the age of technological
          singularity led to war amongst cybernetic armies. The use of nuclear
          weaponry led to a cataclysmic explosion devastating Galaxia Blue, home
          to mystical planets of all known cybernetic species.
          <br />
          Planet Glozark, home to the MetaGoblin species, survived the galactic
          explosion but suffered total destruction of their Terranzinite supply.
        </div>
        <div className={classes.vid}>
          {/* <video width="100%" height="" poster={vidImage} controls> */}
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/TPtQr-ox01M?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          {/* </video> */}
        </div>
      </div>
      
    </div>
  );
}

export default Section2;
