import * as React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { makeStyles } from '@mui/styles'
import MenuIcon from '@mui/icons-material/Menu'
import { Divider, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  paperRoot: {
    width: '25%',
    background: '#b7b7b7',
    color: 'black',
  },
  link: { color: 'inherit', textDecoration: 'none' },
}))
const DRAWER_ITEMS = ['League']

const Drawer = () => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setIsOpen(open)
  }

  const DrawerList = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Link to="/" className={classes.link}>
        <Typography align="center" letterSpacing="" variant="h6" padding={1}>
          Menu
        </Typography>
      </Link>
      <Divider />
      <List>
        {DRAWER_ITEMS.map((text) => (
          <Link to="/lol" className={classes.link}>
            <ListItem button key={text}>
              <ListItemIcon>
                <SportsEsportsIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  )

  return (
    <React.Fragment>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ color: 'black' }} />
      </Button>
      <SwipeableDrawer
        classes={{ paper: classes.paperRoot }}
        anchor={'left'}
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <DrawerList />
      </SwipeableDrawer>
    </React.Fragment>
  )
}

export default Drawer
