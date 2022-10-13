import React from "react";
import classes from "./Section1.module.css";
import logo from "./../../images/logo.png";
import image11 from "./../../images/image11.png";
import image12 from "./../../images/image12.png";
import image15 from "./../../images/image15.png";
import goblin1 from "./../../images/goblin1.png";

import image16 from "./../../images/image16.png";
import newHeroimg from "../../images/newHeroImg.png";
import instaIcon from "../../images/Group81.png";

function Section1() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.logoWrap2}>
            <img alt="" src={logo} className={classes.logoStyle2} />
            <div className={classes.logoInner}>
              <a
                rel="noreferrer"
                href="https://twitter.com/meta_blaze"
                target="_blank"
              >
                <img alt="" src={image11} />
              </a>
              <a
                rel="noreferrer"
                href="https://discord.com/invite/wTZc9yCYRA"
                target="_blank"
              >
                <img alt="" src={image12} />
              </a>
              <a
                rel="noreferrer"
                href="https://www.instagram.com/meta.blaze/"
                target="_blank"
              >
                <img alt="" src={image16} />
              </a>
              <a
                rel="noreferrer"
                href="https://t.me/meta_blaze"
                target="_blank"
              >
                <img alt="" src={instaIcon} />
              </a>
              <a
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCpnw9vYHVlN9O5crdZXX_iQ"
                target="_blank"
              >
                <img alt="" src={image15} />
              </a>
            </div>
          </div>

          <img alt="" src={goblin1} className={classes.image} />
          <div className={classes.newImgDiv}>
            <img alt="" src={newHeroimg} className={classes.imageNew} />
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.logoWrap}>
            <div>
              <a
                rel="noreferrer"
                href="https://twitter.com/meta_blaze"
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
                href="https://www.youtube.com/channel/UCpnw9vYHVlN9O5crdZXX_iQ"
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
                href="https://discord.com/invite/wTZc9yCYRA"
                target="_blank"
              >
                <img alt="" src={image15} />
              </a>
            </div>
            <img alt="" src={logo} className={classes.logoStyle} />
          </div>
          <div className={classes.rightInner}>
            <div className={classes.heading}>METABLAZE NFTS</div>
            <div className={classes.para}>
              MetaBlaze NFTs explore new dimensions of storytelling in Web 3.0,
              capturing the hearts of all who tune into their story. Become
              immersed and transport yourself to a mysterious place, one marked
              with heroism, villainy, adventure, technology, war, love, humor,
              violence, kindness, and most importantly Hope (SPES). In the year
              2126, after centuries of unrest, the age of technological
              singularity led to war amongst cybernetic armies. The use of
              nuclear weaponry led to a cataclysmic explosion devastating
              Galaxia Blue, home to mystical planets of all known cybernetic
              species.
            </div>
          </div>
        </div>
      </div>
      <div className={classes.containerNew}>
        <div className={classes.navbar}>
          <img alt="" src={logo} className={classes.newLogo} />
          <div className={classes.socialInnerWrap}>
            <a
              rel="noreferrer"
              href="https://twitter.com/meta_blaze"
              target="_blank"
            >
              <img alt="" src={image11} />
            </a>
            <a
              rel="noreferrer"
              href="https://discord.com/invite/wTZc9yCYRA"
              target="_blank"
            >
              <img alt="" src={image12} />
            </a>
            <a
              rel="noreferrer"
              href="https://www.instagram.com/meta.blaze/"
              target="_blank"
            >
              <img alt="" src={image16} />
            </a>
            <a rel="noreferrer" href="https://t.me/meta_blaze" target="_blank">
              <img alt="" src={instaIcon} />
            </a>
            <a
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCpnw9vYHVlN9O5crdZXX_iQ"
              target="_blank"
            >
              <img alt="" src={image15} />
            </a>
          </div>
        </div>
        {/* <div className={classes.middleWrap}>
          <div className={classes.middleLeft}>
            <img alt="" src={goblin1} className={classes.imageNewDesign} />
          </div>
          <div className={classes.middleRight}>
            <div className={classes.paraNew}>
              MetaBlaze NFTs explore new dimensions of storytelling in Web 3.0,
              capturing the hearts of all who tune into their story. Become
              immersed and transport yourself to a mysterious place, one marked
              with heroism, villainy, adventure, technology, war, love, humor,
              violence, kindness, and most importantly Hope (SPES). In the year
              2126, after centuries of unrest, the age of technological
              singularity led to war amongst cybernetic armies. The use of
              nuclear weaponry led to a cataclysmic explosion devastating
              Galaxia Blue, home to mystical planets of all known cybernetic
              species.
            </div>
          </div>
        </div> */}
        {/* <div className={classes.bottomWrap}>
          <div>METABLAZE NFTS</div>
        </div> */}
      </div>
      {/* New Section */}
      <div className={classes.headerTextSection}>
        <div className={classes.paraWrap}>
          <div className={classes.headerPara}>
            <div className={classes.bottomWrap}>
              <div>METABLAZE NFTS</div>
            </div>
            MetaBlaze NFTs explore new dimensions of storytelling in Web 3.0,
            capturing the hearts of all who tune into their story. Become
            immersed and transport yourself to a mysterious place, one marked
            with heroism, villainy, adventure, technology, war, love, humor,
            violence, kindness, and most importantly Hope (SPES). In the year
            2126, after centuries of unrest, the age of technological
            singularity led to war amongst cybernetic armies. The use of nuclear
            weaponry led to a cataclysmic explosion devastating Galaxia Blue,
            home to mystical planets of all known cybernetic species.
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
