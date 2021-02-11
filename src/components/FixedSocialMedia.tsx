import { Grid, makeStyles } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'
import { socialMediaIcons } from '../store/links'

const useStyles = makeStyles(({breakpoints}) => ({
  root: {
    display: 'none',
    position: 'fixed',
    top: '50%',
    right: '60px',
    width: '0',
    transform: 'translateY(-50%)',
    '& div': {
      marginBottom: '27px'
    },
    [breakpoints.up('sm')]: {
      display: 'flex'
    },
    [breakpoints.up('md')]: {
      right: '96px'
    }
  }
}))

export default function FixedSocialMedia(): ReactElement {
  const listSocialMedia = useRecoilValue(socialMediaIcons)

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container direction="column" data-aos="fade-left">
        {listSocialMedia.map((item) => {
          if (item.href === '') return (null)

          return (
            <Grid item key={item.name}>
              <a href={item.href} target="__BLANK">
                <img src={item.whiteSvgFile} alt={item.name} />
              </a>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
