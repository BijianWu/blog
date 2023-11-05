import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Layout(){

    return <>

        <Container maxWidth="lg">
            <Outlet />
        </Container>

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