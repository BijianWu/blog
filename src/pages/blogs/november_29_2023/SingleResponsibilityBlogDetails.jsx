import { Typography } from "@mui/material";
import BlogDetails from "../../../blog/BlogDetails";

export default function SingleResponsibilityBlogDetails(){
    // https://pixabay.com/photos/tree-clouds-field-grass-meadow-736887/
    return <>
        <BlogDetails imageUrl={require("../../../assets/images/single.jpg")} title={"Single responsibility"} dateString={"Nov, 29, 2023"}
            tagLabel={"Programming principle"}
            tagUrl={"/tags/programming-principle"}
            mainContent={
            <>
                <Typography variant="h6"  mb={1}>Overview</Typography>
                <Typography paragraph mb={6}>
                    Bridge design pattern is designed to tacle the issue of monolithic god class that does too many things and are hard to make changes without breaking existing code,
                    the bridge design pattern helped to break the class into smaller classes that can be developed independently, to make the code more modular thus creating a better 
                    structural structure for the code base.
                </Typography>

                <Typography variant="h6"  mb={1}>Problem</Typography>
                <Typography paragraph>
                    Let's say you are working on a game, where the game contains so many different types of enemies, flying type enemy, ground type enemy
                </Typography>
            </>}
        >
        </BlogDetails>
    </>
}