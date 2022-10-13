import React from 'react'
import classes from "./Section3.module.css"
import cardImg2 from "./../../images/cardImg2.gif"
import cardImg3 from "./../../images/cardImg3.gif"
import cardImg4 from "./../../images/cardImg4.gif"
import image11 from "./../../images/image11.png"
import image12 from "./../../images/image12.png"
import image15 from "./../../images/image15.png"
import image16 from "./../../images/image16.png"
import cardImgclassified2 from "./../../images/cardImgclassified2.gif"
import instaIcon from "../../images/Group81.png"


function Section3() {
    return (
      <div className={classes.container}>
        <div className={classes.heading}>CREATURES OF GALAXIA BLUE</div>
        <div className={classes.metacont}>
          <div className={classes.subheading}>METAGOBLIN NFT COLLECTION</div>
          <div className={classes.para}>
            Planetary Origin: Glozark
            <br />
            Population: 10,000 MetaGoblin NFTs
            <br />
            4 Levels of Rarity | 398 Unique 3D Traits
            <br />
            OpenSea Arrival: October 15, 2022
          </div>
        </div>
       
        <div className={classes.cardWrap}>
          <div className={classes.cardImage}>
            <img alt="no img" src={cardImg4} />
            <div>8,897 Mystical</div>
          </div>
          <div className={classes.cardImage}>
            <img alt="no img" src={cardImg3} />
            <div>1,000 Epic</div>
          </div>
          <div className={classes.cardImage}>
            <img alt="no img" src={cardImg2} />
            <div>100 Legendary </div>
          </div>
          <div className={classes.cardImage}>
            <img alt="no img" src={cardImgclassified2} />
            <div>3 Kings</div>
          </div>
        </div>
        <div className={classes.wrap}>
          <div className={classes.wrapLeft}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/-LP8j7g2RJY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className={classes.wrapRight}>
            <div className={classes.para2}>
              Preparing for the OpenSea invasion on October 15th..... The
              MetaGoblin NFT collection features 10,000 3D creatures, assigned 1
              of 4 rarities referenced above. Integrated within a robust series
              of interoperating Web 3 ecosystems, MetaBlaze NFTs are far more
              than NFT art collectibles.
              <br />
              <br />
              There's more to discover - Join the community now!
            </div>
            <div className={classes.socialWrap}>
              <a
                rel="noreferrer"
                href="https://discord.com/invite/wTZc9yCYRA"
                target="_blank"
              >
                <img alt="" src={image11} />
              </a>
              <a
                rel="noreferrer"
                href="https://t.me/meta_blaze"
                target="_blank"
              >
                <img alt="" src={image12} />
              </a>
              <a
                rel="noreferrer"
                href="https://twitter.com/meta_blaze"
                target="_blank"
              >
                <img alt="" src={image16} />
              </a>
              <a
                rel="noreferrer"
                href="https://www.instagram.com/meta.blaze/"
                target="_blank"
              >
                <img alt="" src={instaIcon} />
              </a>
              <a
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCpnw9vYHVlN9O5crdZXX_iQ"
                target="_blank"
              >
                <img alt="" src={image15} id="img5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Section3