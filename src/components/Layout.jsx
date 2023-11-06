import { AppBar, Avatar, Box, Breadcrumbs, Container, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Stack, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import SellIcon from '@mui/icons-material/Sell';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import { blue } from "@mui/material/colors";

const drawerWidth = 240;

export default function Layout(props){
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <div>
        {/* <Toolbar /> */}
        <Stack justifyContent={"center"} spacing={1} alignItems={"center"} paddingTop={4} paddingBottom={2}>
          <Avatar alt="Remy Sharp"  sx={{ width: 100, height: 100, marginBottom: 1 }} src={require("../assets/images/bijian-wu.jpg")}/>
          <Typography color={"rgba(0, 0, 0, 0.87)"} variant="h6">Bijian Wu </Typography>
          <Typography color={"rgba(0, 0, 0, 0.87)"} variant="body1" paragraph>A full-stack developer's blog </Typography>
        </Stack>

        {/* <Divider /> */}
        <List   sx={{
          p:2,

        // selected and (selected + hover) states
        '&& .Mui-selected, && .Mui-selected:hover': {
          bgcolor: blue["A200"],
          '&, & .MuiListItemIcon-root': {
            color: 'white',
          },
        },
        // hover states
        '& .MuiListItemButton-root:hover': {
          bgcolor: blue[50],
          '&, & .MuiListItemIcon-root': {
            color: blue[400],
          },
        },

        // '& .Mui-selected:selected': {
        //   bgcolor: "red",
        //   '&, & .MuiListItemIcon-root': {
        //     color: blue[400],
        //   },
        // },
      }}>
          {/* {['Home', 'Tags', 'Archives', 'About', 'Contact'].map((text, index) => (

          ))} */}
          <ListItem  key={"Home"} disablePadding>
              <ListItemButton >
                <ListItemIcon >
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={'Home'} />
              </ListItemButton>
            </ListItem>

            <ListItem key={"Tags"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SellIcon />
                </ListItemIcon>
                <ListItemText primary={'Tags'} />
              </ListItemButton>
            </ListItem>

            <ListItem key={"Archives"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary={'Archives'} />
              </ListItemButton>
            </ListItem>

            <ListItem key={"About"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={'About'} />
              </ListItemButton>
            </ListItem>

            <ListItem key={"Contact"} disablePadding selected={true} >
              <ListItemButton>
                <ListItemIcon>
                  <ContactsIcon />
                </ListItemIcon>
                <ListItemText primary={'Contact'} />
              </ListItemButton>
            </ListItem>
        </List>

      </div>
    );
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }

    const container = window !== undefined ? () => window().document.body : undefined;
    const breadcrumbs = [
        // <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
        //   MUI
        // </Link>,
        // <Link
        //   underline="hover"
        //   key="2"
        //   color="inherit"
        //   href="/material-ui/getting-started/installation/"
        //   onClick={handleClick}
        // >
        //   Core
        // </Link>,
        <Typography key="3" color="text.primary">
          Home
        </Typography>,
      ];

    return <>
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
            elevation={0}
            position="fixed"
            sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            bgcolor: "rgb(255, 255, 255)"
            }}
        >
            <Toolbar>
            <IconButton
                color="black"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            {/* <Typography color={"black"} variant="h6" noWrap component="div">
                Responsive drawer
            </Typography> */}

            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
            </Toolbar>
        </AppBar>
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
            {drawer}
            </Drawer>
            <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
            >
            {drawer}
            </Drawer>
        </Box>
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />
            <Container maxWidth="lg">
                <Outlet />
            </Container>
        </Box>
        </Box>


        {/* <h1>hi there</h1> */}
         {/* <Nav/>     */}
         {/* <Routes>
            <Route path="/">

            </Route>
        </Routes>  */}
         {/* <SelectElement />
        <div>Hello world</div>
        <Button variant="contained">Hello world</Button> */}
    </>
}