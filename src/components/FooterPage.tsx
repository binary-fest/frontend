import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'
import { footerLinks } from '../store/links'

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    maxWidth: '924px',
  },
  footer: {
    margin: '0 auto',
    color: 'white',
    '& .nav-group': {
      marginBottom: spacing(10),
      [breakpoints.up('md')]: {
        marginBottom: '0px',
      },
      '& *': {
        [breakpoints.up('sm')]: {
          textAlign: 'center'
        },
        [breakpoints.up('md')]: {
          textAlign: 'left'
        },
      }
    },
    '& .title': {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    '& a': {
      textDecoration: 'none',
      marginTop: spacing(2),
      display: 'block',
      color: 'white',
    },
    '& .icon-wrapper': {
      display: 'flex',
      flexDirection: 'column'
    }
  }
}))

export default function FooterPage(): ReactElement {
  const listFooterLinks = useRecoilValue(footerLinks)

  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Grid container className={classes.footer}>
        {listFooterLinks.map(contact => {
          return (
            <Grid item key={contact.group} className="nav-group" xs={12} md={3} sm={4}>
              <Typography className="title" color="inherit">{contact.group}</Typography>
              {contact.list.map((item: any) => (
                <a key={item.name} href={item.href}>
                  <Typography>{item.name}</Typography>
                </a>
              ))}
            </Grid>
          )
        })}
        <Grid item className="icon-wrapper" xs={12} md={3}>
          <img src="/binary-fest-text-bottom.svg" alt="Binary Fest" />
          <Typography color="inherit" align="center">© BinaryFest 2020</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
