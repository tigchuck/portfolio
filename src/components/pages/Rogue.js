import React from 'react';
import Grid from '@mui/material/Grid';
import MediaCard from "../MediaCard";
import transformerBar from "../../pictures/TransformerBar.jpeg";
import mg4 from "../../pictures/MG4.png";
import monolift from "../../pictures/Monolift.png";
import plateRack from "../../pictures/HorizontalPlateRack.png";
import sealRow from "../../pictures/SealRowBench.png";
import leanTo from "../../pictures/LeanToBarRack.png";
import bumperRack from "../../pictures/BumperRack.png";
import jCups from "../../pictures/SandwichJCups.png";
import latPull from "../../pictures/LatPulldownSeat.png";
import hipThruster from "../../pictures/HipThruster.png";
import compBench from "../../pictures/CompBench.png";
import slinger from "../../pictures/slinger.png";
import powerblockCart from "../../pictures/PowerblockCart.png";

function Rogue() {
    return (
        <Grid 
            container
            direction="row" 
            justifyContent="space-between" 
            spacing={5}
        >
            <Grid 
                item                
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                xs={12}
                md={6}
                lg={4}
                xl={3}
            >
                <MediaCard
                    title="Kabuki Transformer Bar"
                    img={transformerBar}
                    alt="Transformer Bar"
                    imgBorderRadius="10px"
                    infoList={[
                            ["This product was difficult to manufacture due to extremely tight tolerances and required complex communication with several vendors."]
                    ]}
                    site="true"
                    hrefSite="https://www.roguefitness.com/rogue-kabuki-transformer-bar"
                />
            </Grid>
            <Grid 
                item                
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                xs={12}
                md={6}
                lg={4}
                xl={3}
            >
                <MediaCard
                    title="Rogue MG-4 Multi Grip Bar"
                    img={mg4}
                    alt="Rogue MG-4 Multi Grip Bar"
                    imgBorderRadius="10px"
                    infoList={[
                            ["This product utilizes a novel attachment method between the sleeve and the chassis, creating the potential for a variety of unique specialty bars."]
                    ]}
                    site="true"
                    hrefSite="https://www.roguefitness.com/mg-4cn-narrow-multi-grip-camber-bar"
                    patent="true"
                    hrefPatent="https://patentimages.storage.googleapis.com/f7/72/0e/f42361a699acf6/US20230241445A1.pdf"
                />
            </Grid>
            <Grid 
                item                
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                xs={12}
                md={6}
                lg={4}
                xl={3}
            >
                <MediaCard
                    title="Rogue Adjustable Monolift 2.0"
                    img={monolift}
                    alt="Rogue Adjustable Monolift 2.0"
                    imgBorderRadius="10px"
                    infoList={[
                            [""]
                    ]} 
                    site="true"
                    hrefSite="https://www.roguefitness.com/rogue-am-2-adjustable-monolift-2-0-monster"
                    patent="true"
                    hrefPatent="https://patentimages.storage.googleapis.com/dd/1f/a4/8a7db585872be5/US20230099317A1.pdf"
                />
            </Grid>
            <Grid 
                item                
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                xs={12}
                md={6}
                lg={4}
                xl={3}
            >
                <MediaCard
                    title="Rogue Horizontal Plate Rack 3.0"
                    img={plateRack}
                    alt="Rogue Horizontal Plate Rack 3.0"
                    imgBorderRadius="10px"
                    infoList={[
                            ["Test 1"],
                            ["Test 2"]
                    ]}
                    site="true"
                    hrefSite="https://www.roguefitness.com/rogue-horizontal-plate-rack-3-0"
                    patent="true"
                    hrefPatent="https://patentimages.storage.googleapis.com/b6/b8/34/65b4a1f80ebb4b/USD973793.pdf"
                />
            </Grid>
            <Grid 
                item                
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                xs={12}
                md={6}
                lg={4}
                xl={3}
            >
                <MediaCard
                    title="Rogue Seal Row Bench"
                    img={sealRow}
                    alt="Rogue Seal Row Bench"
                    imgBorderRadius="10px"
                    infoList={[
                            ["Test 1"],
                            ["Test 2"]
                    ]}
                    site="true"
                    hrefSite="https://www.roguefitness.com/rogue-seal-row-bench"
                />
            </Grid>
            <Grid 
                item                
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                xs={12}
                md={6}
                lg={4}
                xl={3}
            >
                <MediaCard
                    title="Lean-To Bar Rack"
                    img={leanTo}
                    alt="Lean-To Bar Rack"
                    imgBorderRadius="10px"
                    infoList={[
                            ["Test 1"],
                            ["Test 2"]
                    ]}
                    site="true"
                    hrefSite="https://www.roguefitness.com/monster-lean-to-bar-rack"
                />
            </Grid>
            <Grid 
                item                
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                xs={12}
                md={6}
                lg={4}
                xl={3}
            >
                <MediaCard
                    title="Monster Bumper Rack"
                    img={bumperRack}
                    alt="Monster Bumper Rack"
                    imgBorderRadius="10px"
                    infoList={[
                            ["Test 1"],
                            ["Test 2"]
                    ]}
                    site="true"
                    hrefSite="https://www.roguefitness.com/monster-bumper-rack"
                    patent="true"
                    hrefPatent="https://patentimages.storage.googleapis.com/a2/d6/cd/c3ad93ea40f422/USD988042.pdf"
                />
            </Grid>
            <Grid 
                item                
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                xs={12}
                md={6}
                lg={4}
                xl={3}
            >
                <MediaCard
                    title="Sandwich J-Cups"
                    img={jCups}
                    alt="Sandwich J-Cups"
                    imgBorderRadius="10px"
                    infoList={[
                            ["Test 1"],
                            ["Test 2"]
                    ]}
                    site="true"
                    hrefSite="https://www.roguefitness.com/monster-lite-j-cup-pairs-2-sandwich"
                />
            </Grid>
            <Grid 
                item                
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                xs={12}
                md={6}
                lg={4}
                xl={3}
            >
                <MediaCard
                    title="Lat Pulldown Seat and Low Row Kit"
                    img={latPull}
                    alt="Lat Pulldown Seat and Low Row Kit"
                    imgBorderRadius="10px"
                    infoList={[
                            ["Test 1"]
                    ]}
                    site="true"
                    hrefSite="https://www.roguefitness.com/monster-lite-rack-mount-lat-pulldown-seat-low-row-kit"
                    patent="true"
                    hrefPatent="https://patentimages.storage.googleapis.com/04/93/87/04d196d0654e09/USD956893.pdf"
                />
            </Grid>
            <Grid 
                item                
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                xs={12}
                md={6}
                lg={4}
                xl={3}
            >
                <MediaCard
                    title="Hip Thruster Bench"
                    img={hipThruster}
                    alt="Hip Thruster Bench"
                    imgBorderRadius="10px"
                    infoList={[
                            ["Test 1"],
                            ["Test 2"]
                    ]}
                    site="true"
                    hrefSite="https://www.roguefitness.com/monster-hip-thruster-bench"
                    patent="true"
                    hrefPatent="https://patentimages.storage.googleapis.com/eb/13/63/e7c6cbfb9d0a5d/USD941941.pdf"
                />
            </Grid>
            <Grid 
                item                
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                xs={12}
                md={6}
                lg={4}
                xl={3}
            >
                <MediaCard
                    title="Monster Lite Competition Bench"
                    img={compBench}
                    alt="Monster Lite Competition Bench"
                    imgBorderRadius="10px"
                    infoList={[
                            ["Test 1"],
                            ["Test 2"]
                    ]}
                    site="true"
                    hrefSite="https://www.roguefitness.com/monster-lean-to-bar-rack"
                />
            </Grid>
            <Grid 
                item                
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                xs={12}
                md={6}
                lg={4}
                xl={3}
            >
                <MediaCard
                    title="Rogue Slinger"
                    img={slinger}
                    alt="Rogue Slinger"
                    imgBorderRadius="10px"
                    infoList={[
                            ["Test 1"],
                            ["Test 2"]
                    ]}
                    site="true"
                    hrefSite="https://www.roguefitness.com/rogue-monster-lite-slinger"
                    patent="true"
                    hrefPatent="https://patentimages.storage.googleapis.com/04/9a/ff/9c461a9aa74ab3/US20220072361A1.pdf"
                />
            </Grid>
            <Grid 
                item                
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                xs={12}
                md={6}
                lg={4}
                xl={3}
            >
                <MediaCard
                    title="Rogue Powerblock Cart"
                    img={powerblockCart}
                    alt="Rogue Powerblock Cart"
                    imgBorderRadius="10px"
                    infoList={[
                            ["Test 1"],
                            ["Test 2"]
                    ]}
                    site="true"
                    hrefSite="https://www.roguefitness.com/rogue-powerblock-cart"
                />
            </Grid>
        </Grid>
    );
}

export default Rogue;