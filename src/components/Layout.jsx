import { AppBar, Avatar, Box, Breadcrumbs, Container, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Stack, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
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
import StyledTypography from "../components/StyledTypography";
import StyledDisabledTypography from "./StyledDisabledTypography";
import { removeDashWithSpaceAndCapFirstLetter } from "../utils/textConverterUtils";

const drawerWidth = 240;
const navButtonRadius = 2;
export default function Layout(props){
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [selected, setSelected] = useState(-1);
    const navigate = useNavigate();
    const location = useLocation();
    const { postTitle, tagName } = useParams();

    const getSelectedBaseOnLocation = () =>{
      const pathname = location.pathname;
  
      if(pathname === "/tags"){
        return 1;
      } else if(pathname === "/archives"){
        return 2;
      } else if(pathname === "/about"){
        return 3;
      } else if(pathname === "/contact"){
        return 4;
      }else if(pathname === "/"){
        return 0;
      }
  
      return -1;
    }
    useEffect(() => {
      onSelected(getSelectedBaseOnLocation());
    }, [location.pathname]);
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const onSelected = (index) => {
      setMobileOpen(false);
      if(index !== selected){
        setSelected(index);
        if(index === 0){
          navigate("/");
        } else if(index === 1){
          navigate("/tags");
        } else if(index === 2){
          navigate("/archives");
        } else if(index === 3){
          navigate("/about");
        } else if(index === 4){
          navigate("/contact");
        }
      }
    }

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
          // borderRadius: 10,
        // selected and (selected + hover) states

        // hover states
        '& .MuiListItemButton-root:hover': {
          bgcolor: blue[50],
          '&, & .MuiListItemIcon-root': {
            color: blue[400],
          },
        },
        '& .MuiListItemButton-root:focus': {
          bgcolor: blue["A200"],
          '&, & .MuiListItemIcon-root': {
            color: 'white',
          },
        },
        '&& .Mui-selected, && .Mui-selected:hover': {
          bgcolor: blue["A200"],
          '&, & .MuiListItemIcon-root': {
            color: 'white',
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
          <ListItem  key={"Home"} sx={{ borderRadius: navButtonRadius }} disablePadding selected={!location.pathname.includes("/tags") && !location.pathname.includes("/archives") && location.pathname.includes("/posts")} onClick={(e) => onSelected(0)}>
              <ListItemButton sx={{ borderRadius: navButtonRadius }}>
                <ListItemIcon >
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={'Home'} />
              </ListItemButton>
            </ListItem>

            <ListItem key={"Tags"} sx={{ borderRadius: navButtonRadius }} disablePadding selected={location.pathname.includes("/tags")} onClick={(e) => onSelected(1)}>
              <ListItemButton sx={{ borderRadius: navButtonRadius }}>
                <ListItemIcon>
                  <SellIcon />
                </ListItemIcon>
                <ListItemText primary={'Tags'} />
              </ListItemButton>
            </ListItem>

            <ListItem key={"Archives"} sx={{ borderRadius: navButtonRadius }} disablePadding selected={location.pathname.includes("/archives")} onClick={(e) => onSelected(2)}>
              <ListItemButton sx={{ borderRadius: navButtonRadius }}>
                <ListItemIcon>
                  <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary={'Archives'} />
              </ListItemButton>
            </ListItem>

            <ListItem key={"About"} sx={{ borderRadius: navButtonRadius }} disablePadding selected={selected === 3} onClick={(e) => onSelected(3)}>
              <ListItemButton sx={{ borderRadius: navButtonRadius }}>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={'About'} />
              </ListItemButton>
            </ListItem>

            <ListItem key={"Contact"} sx={{ borderRadius: navButtonRadius }} disablePadding selected={selected === 4} onClick={(e) => onSelected(4)} >
              <ListItemButton sx={{ borderRadius: navButtonRadius }}>
                <ListItemIcon>
                  <ContactsIcon />
                </ListItemIcon>
                <ListItemText primary={'Contact'} />
              </ListItemButton>
            </ListItem>
        </List>

      </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    // const breadcrumbs = [
    //     // <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
    //     //   MUI
    //     // </Link>,
    //     // <Link
    //     //   underline="hover"
    //     //   key="2"
    //     //   color="inherit"
    //     //   href="/material-ui/getting-started/installation/"
    //     //   onClick={handleClick}
    //     // >
    //     //   Core
    //     // </Link>,
    //     <Typography key="3" color="text.primary">
    //       Home
    //     </Typography>,
    //   ];


    const getBreadcrumbs = () => {
      if(location.pathname.endsWith("archives/posts/single-responsibility")){
        return [
          <StyledTypography sx={{ fontSize: "0.9rem" }}  underline="hover" key="1" color="inherit" href="/" onClick={() => navigate("/")}>
          Home
          </StyledTypography>,
          <StyledTypography sx={{ fontSize: "0.9rem" }}  underline="hover" key="2" olor="inherit" href="/" onClick={() => navigate("/archives")}>
          Archives
        </StyledTypography>,
        <StyledDisabledTypography sx={{ fontSize: "0.9rem" }} key="4" color="text.primary">
          Single responsibility
        </StyledDisabledTypography>,
        ]
      } else if(location.pathname.endsWith("archives/posts/bridge-design-pattern")){
        return [
          <StyledTypography sx={{ fontSize: "0.9rem" }}  underline="hover" key="1" color="inherit" href="/" onClick={() => navigate("/")}>
          Home
          </StyledTypography>,
          <StyledTypography sx={{ fontSize: "0.9rem" }}  underline="hover" key="2" olor="inherit" href="/" onClick={() => navigate("/archives")}>
          Archives
        </StyledTypography>,
        <StyledDisabledTypography sx={{ fontSize: "0.9rem" }} key="4" color="text.primary">
          Bridge Design Pattern
        </StyledDisabledTypography>,
        ]
      } else if(location.pathname.endsWith("tags/programming-principle/posts/single-responsibility")){
        return [
          <StyledTypography sx={{ fontSize: "0.9rem" }}  underline="hover" key="1" color="inherit" href="/" onClick={() => navigate("/")}>
          Home
          </StyledTypography>,
          <StyledTypography sx={{ fontSize: "0.9rem" }}  underline="hover" key="2" olor="inherit" href="/" onClick={() => navigate("/tags")}>
          Tags
        </StyledTypography>,
        <StyledTypography sx={{ fontSize: "0.9rem" }}  underline="hover" key="3" olor="inherit" href="/" onClick={() => navigate("/tags/programming-principle")}>
          Programming principle
        </StyledTypography>,
        <StyledDisabledTypography sx={{ fontSize: "0.9rem" }} key="4" color="text.primary">
          Single responsibility
        </StyledDisabledTypography>,
        ]
      } else if(location.pathname.endsWith("tags/design-pattern/posts/bridge-design-pattern")){
        return [
          <StyledTypography sx={{ fontSize: "0.9rem" }}  underline="hover" key="1" color="inherit" href="/" onClick={() => navigate("/")}>
          Home
          </StyledTypography>,
          <StyledTypography sx={{ fontSize: "0.9rem" }}  underline="hover" key="2" olor="inherit" href="/" onClick={() => navigate("/tags")}>
          Tags
        </StyledTypography>,
        <StyledTypography sx={{ fontSize: "0.9rem" }}  underline="hover" key="3" olor="inherit" href="/" onClick={() => navigate("/tags/design-pattern")}>
          Design pattern
        </StyledTypography>,
        <StyledDisabledTypography sx={{ fontSize: "0.9rem" }} key="4" color="text.primary">
          Single responsibility
        </StyledDisabledTypography>,
        ]
      } else if(location.pathname.endsWith("tags")){
        return [
          <StyledTypography sx={{ fontSize: "0.9rem" }}  underline="hover" key="1" color="inherit" href="/" onClick={() => navigate("/")}>
          Home
          </StyledTypography>,
          <StyledDisabledTypography sx={{ fontSize: "0.9rem" }} key="3" color="text.primary">
          Tags
        </StyledDisabledTypography>,
        ]
      } else if(location.pathname.endsWith("archives")){
        return [
          <StyledTypography sx={{ fontSize: "0.9rem" }} underline="hover" key="1" color="inherit" href="/" onClick={() => navigate("/")}>
          Home
          </StyledTypography>,
          <StyledDisabledTypography sx={{ fontSize: "0.9rem" }} key="3" color="text.primary">
          Archives
        </StyledDisabledTypography>,
        ]
      } else if(location.pathname.endsWith("about")){
        return [
          <StyledTypography sx={{ fontSize: "0.9rem" }} underline="hover" key="1" color="inherit" href="/" onClick={() => navigate("/")}>
          Home
          </StyledTypography>,
          <StyledDisabledTypography sx={{ fontSize: "0.9rem" }} key="3" color="text.primary">
          About
        </StyledDisabledTypography>,
        ]
      } else if(location.pathname.endsWith("contact")){
        return [
          <StyledTypography sx={{ fontSize: "0.9rem" }} underline="hover" key="1" color="inherit" href="/" onClick={() => navigate("/")}>
          Home
          </StyledTypography>,
          <StyledDisabledTypography sx={{ fontSize: "0.9rem" }} key="3" color="text.primary">
          Contact
        </StyledDisabledTypography>,
        ]
      } else if(location.pathname.includes("posts")){
        return [
          <StyledTypography sx={{ fontSize: "0.9rem" }} underline="hover" key="1" color="inherit" href="/"onClick={() => navigate("/")}>
          Home
          </StyledTypography>,
          <StyledDisabledTypography sx={{ fontSize: "0.9rem" }} key="3" color="text.primary">
          {removeDashWithSpaceAndCapFirstLetter(postTitle)}
        </StyledDisabledTypography>,
        ]
      }else if(location.pathname.includes("tags/")){
        return [
          <StyledTypography sx={{ fontSize: "0.9rem" }} underline="hover" key="1" color="inherit" href="/" onClick={() => navigate("/")}>
          Home
          </StyledTypography>,
          <StyledTypography
            underline="hover"
            key="2"
            color="inherit"
            onClick={() => navigate("/tags")}
            sx={{ fontSize: "0.9rem" }}
          >
            Tags
          </StyledTypography>,
          <StyledDisabledTypography sx={{ fontSize: "0.9rem" }} key="3" color="text.primary">
          {removeDashWithSpaceAndCapFirstLetter(tagName)}
        </StyledDisabledTypography>,
        ]
      }else {
        return [
          <StyledDisabledTypography sx={{ fontSize: "0.9rem" }} key="3" color="text.primary">
          Home
          </StyledDisabledTypography>,
        ]
      }
    }

    return <>
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />

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
            sx={{ display: "grid", minHeight: "100vh", gridTemplateRows: "1fr auto", flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            {/* <Toolbar /> */}
            <Stack  >
              <Box

              sx={{
              bgcolor: "rgb(255, 255, 255)"
              }}
          >
              <Toolbar sx= {{ alignItems: "start" }}>
                <IconButton
                    color="black"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, pt: "3px", display: { sm: 'none' } }}
                >
                    <MenuIcon  />
                </IconButton>
                {/* <Typography color={"black"} variant="h6" noWrap component="div">
                    Responsive drawer
                </Typography> */}

                <Breadcrumbs
                    separator="›"
                    aria-label="breadcrumb"
                >
                    {getBreadcrumbs()}
                </Breadcrumbs>
              </Toolbar>
              </Box>

              <Container maxWidth="lg" sx={{p: 0}}>
                  <Outlet />
              </Container>
            



            </Stack>

              <Box sx={{ mt: 5, gridRowStart: 2,
  gridRowEnd: 3}}>
                <Divider />
                <Typography paragraph my={2}>© {new Date().getFullYear()} Bijian Wu. Some rights reserved.</Typography>
              </Box>
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