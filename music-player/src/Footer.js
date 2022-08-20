import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { Grid, Slider } from '@mui/material';


function Footer() {
  return (
    <div className='footer'>
        <div className="footer__left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Yandhi_Cover_Art_%28Free_License%29.jpg" alt="" className='footer__albumLogo'/>
          <div className="footer__songInfo">
                <h2>Runaway</h2>
                <h4>Kanye West</h4>
          </div>

        </div>

        <div className="footer__center">
            <ShuffleIcon className='footer__green' />
            <SkipPreviousIcon className='footer__icon' />
            <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
            <SkipNextIcon className='footer__icon' />
            <RepeatIcon className='footer__green' />
        </div>

        <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon className='footer__icon'/>
          </Grid>
          <Grid item>
            <VolumeDownIcon className='footer__icon'/>
          </Grid>
          <Grid item xs>
            <Slider fontSize='small' />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer