import { Grid, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { GradientTypography, StaticPageContentStyled } from '../theme/extends'

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  aboutContainer: {
    position: 'relative',
    color: 'white',
    textAlign: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    [breakpoints.up('md')]: {
      textAlign: 'left',
      alignItems: 'flex-start',
    },
    '& h1': {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: spacing(5),
      display: 'inline-block',
      [breakpoints.up('md')]: {
        marginBottom: spacing(2),
      },
    },
    '& .content': {
      maxWidth: '419.71px'
    },
    '& .image': {
      height: '179px',
      backgroundColor: '#C4C4C4',
      width: '100%',
      borderRadius: '0 20px 0 20px',
      marginBottom: '38px',
      maxWidth: '350px',
      [breakpoints.up('md')]: {
        position: 'absolute',
        maxWidth: '332px',
        height: '242px',
        right: '0'
      }
    }
  }
}))

export default function About(): ReactElement {
  const classes = useStyles()

  return (
    <StaticPageContentStyled>
      <Grid container className={classes.aboutContainer}>
        <Grid item>
          <GradientTypography variant="h1">About</GradientTypography>
        </Grid>
        <Grid item className="image">
          <div></div>
        </Grid>
        <Grid item className="content">
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vitae id odio at mi mauris. Dolor purus lacus risus rhoncus. Interdum lobortis massa nisi, turpis dictum fusce ultrices. Turpis bibendum cursus ut a mauris, mi sit quam.  Dolor purus lacus risus rhoncus. Interdum lobortis massa nisi, turpis dictum fusce ultrices. Turpis bibendum cursus ut a mauris, mi sit quam.</Typography>
        </Grid>
      </Grid>
    </StaticPageContentStyled>
  )
}
