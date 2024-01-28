import { Typography } from "@mui/material";
import BlogDetails from "../../../blog/BlogDetails";

export default function DependencyInversionBlogDetails(){
    // https://pixabay.com/photos/books-shelves-door-entrance-1655783/
    return <>
        <BlogDetails imageUrl={require("../../../assets/images/dependency-inversion.jpg")} title={"Single responsibility"} dateString={"Nov, 29, 2023"}
            tagLabel={"Programming principle"}
            tagUrl={"/tags/programming-principle"}
            mainContent={
            <>
                <Typography variant="h6"  mb={1}>Overview</Typography>
                <Typography paragraph mb={6}>
                    Moden software development involves using so many packages that were made by other people to facilitate development, as we don't want to re-invent the wheel
                    eveyr single time we want to the same thing, as it could have been done by someone else already, or using an existing service, FireBase, RDS, etc.
                    we don't want to be tightly coupled to the specific technology, this principle is all about we should depend on abstraction instead of concret implementation,
                    which gonna help with testing and if later on in your development journey, you were told to use a different service or package dependecies.

                   
                </Typography>

                <Typography variant="h6"  mb={1}>Example</Typography>
                <Typography paragraph>
                    Let's say you are working on a game, where the game contains so many different types of enemies, flying type enemy, ground type enemy
                </Typography>
            </>}
        >
        </BlogDetails>
    </>
}