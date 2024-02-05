import { Typography, useMediaQuery, useTheme } from "@mui/material";
import BlogDetails from "../../../blog/BlogDetails";
import { useFontSize } from "../../../utils/useFontSize";

export default function BridgeDesignPatternBlogDetails(){
    const fontSize = useFontSize();
    //https://pixabay.com/photos/bridge-park-garden-japanese-garden-53769/
    return <>
        <BlogDetails imageUrl={require("../../../assets/images/bridge.jpg")} title={"Bridge design pattern"} dateString={"Nov, 28, 2023"}
            tagLabel={"Design pattern"}
            tagUrl={"/tags/design-pattern"}
            mainContent={
            <>
                <Typography variant="h6"  mb={1}>Overview</Typography>
                <Typography paragraph fontSize={fontSize} mb={6}>
                    Bridge design pattern is designed to tacle the issue of monolithic god class that does too many things and are hard to make changes without breaking existing code,
                    the bridge design pattern helped to break the class into smaller classes that can be developed independently, to make the code more modular thus creating a better 
                    structural structure for the code base.
                </Typography>

                <Typography variant="h6" fontSize={fontSize} mb={1}>Problem</Typography>
                <Typography paragraph>
                    Let's say you are working on a game, where the game contains so many different types of enemies, flying type enemy, ground type enemy
                </Typography>
            </>}
        >
        </BlogDetails>
    </>
}