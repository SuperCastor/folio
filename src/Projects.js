import {Grid} from '@material-ui/core'
import React, { Component } from 'react';
import ProjectComp from './ProjectComp';

export default class Projects extends Component {
    render() {
        return(
            <div>
                <Grid container spacing={1}>
                    <Grid item><ProjectComp title="Pokemon" desc="Gotta catch them all" articleLink="https://www.pokemon.com/fr/" imgLink="https://d3isma7snj3lcx.cloudfront.net/optim/images/news/30/3050836555/pokemon-legendes-arceus-un-episode-en-monde-ouvert-pour-debut-2022-d557c84c__w830.jpg"/></Grid>
                    <Grid item><ProjectComp title="Mario" articleLink="https://www.nintendo.fr/Portail-des-35-ans-de-Super-Mario-Bros-/Apercu-1832480.html" imgLink="https://www.francetvinfo.fr/pictures/YJz5kCPGjhO5-1HG_lNaqDe89Tk/752x423/2020/10/22/php8UWHE3.jpg"/></Grid>
                    <Grid item><ProjectComp title="Zelda" desc="A game where you need to save a princess called Zelda" articleLink="" imgLink="https://cdn-europe1.lanmedia.fr/var/europe1/storage/images/europe1/culture/the-legend-of-zelda-fete-ses-35-ans-retour-sur-une-saga-culte-du-jeu-video-4026622/56751135-1-fre-FR/The-Legend-of-Zelda-fete-ses-35-ans-retour-sur-une-saga-culte-du-jeu-video.png"/></Grid>
                    <Grid item><ProjectComp title="Pokemon" desc="Gotta catch them all" articleLink="https://www.pokemon.com/fr/" imgLink="https://d3isma7snj3lcx.cloudfront.net/optim/images/news/30/3050836555/pokemon-legendes-arceus-un-episode-en-monde-ouvert-pour-debut-2022-d557c84c__w830.jpg"/></Grid>
                    <Grid item><ProjectComp title="Mario" desc="Here we goooo" articleLink="https://www.nintendo.fr/Portail-des-35-ans-de-Super-Mario-Bros-/Apercu-1832480.html" imgLink="https://www.francetvinfo.fr/pictures/YJz5kCPGjhO5-1HG_lNaqDe89Tk/752x423/2020/10/22/php8UWHE3.jpg"/></Grid>
                    <Grid item><ProjectComp title="Zelda" desc="A game where you need to save a princess called Zelda" articleLink="" imgLink="https://cdn-europe1.lanmedia.fr/var/europe1/storage/images/europe1/culture/the-legend-of-zelda-fete-ses-35-ans-retour-sur-une-saga-culte-du-jeu-video-4026622/56751135-1-fre-FR/The-Legend-of-Zelda-fete-ses-35-ans-retour-sur-une-saga-culte-du-jeu-video.png"/></Grid>
                </Grid>
            </div>
            
        )
    }
}