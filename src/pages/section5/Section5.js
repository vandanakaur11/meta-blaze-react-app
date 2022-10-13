import React from 'react'
import classes from "./Section5.module.css"
import nft4big from "./../../images/nft4big.png"
import nft3big from "./../../images/nft3big.png"
import nft2big from "./../../images/nft2big.png"
import nft1big from "./../../images/nft1big.png"


function Section5() {
    return (
        <div className={classes.container}>
            <div className={classes.metacont}>
                <div className={classes.heading}>METAROYALS NFT COLLECTION</div>

                <div className={classes.subheading}>Planetary Origin: Terra<br />
                    Population: 200 MetaRoyal NFTs<br />

                    OpenSea Arrival: October 15, 2022
                </div>
            </div>
            <div className={classes.cardWrap}>
                <div className={classes.nftWrap}>
                    <img alt="" src={nft3big} />
                    <div className={classes.nftText}>50 Orcs</div>
                </div>
                <div className={classes.nftWrap}>
                    <img alt="" src={nft4big} />
                    <div className={classes.nftText}>50 Elves</div>
                </div>
                <div className={classes.nftWrap}>
                    <img alt="" src={nft1big} />
                    <div className={classes.nftText}>50 Gnomes</div>
                </div>
                <div className={classes.nftWrap}>
                    <img alt="" src={nft2big} />
                    <div className={classes.nftText}>50 Dwarves</div>
                </div>

            </div>
            <div>

            </div>
        </div>
    )
}

export default Section5