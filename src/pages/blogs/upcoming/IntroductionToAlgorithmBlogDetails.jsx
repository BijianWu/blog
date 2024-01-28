import { Typography } from "@mui/material";
import BlogDetails from "../../../blog/BlogDetails";

export default function IntroductionToAlgorithmBlogDetails(){
    // https://pixabay.com/photos/neourban-laptop-hardware-computer-1808082/
    return <>
        <BlogDetails imageUrl={require("../../../assets/images/algorithm.jpg")} title={"Single responsibility"} dateString={"Nov, 29, 2023"}
            tagLabel={"Programming principle"}
            tagUrl={"/tags/programming-principle"}
            mainContent={
            <>
                <Typography variant="h6"  mb={1}>What is algorithm?</Typography>
                <Typography paragraph mb={6}>
                    In the context of computer programming, the algorithm were merely just a set of instructions you as a programmer given to the computer to execute in order to achive
                    the result or solve the problem. 
                    For example, if you were asking a computer to make a sandwich for you, you need to give a detailed instructions on how to make one, and then will computer make 
                    a sandwich for you without issues, if the instructions given were wrong or not detailed enough, the outcome will be wrong thus introduced a bug in the computer program.

                    take a single bread, open the lid of the butter and use blade to spead it on the bread and put another bread on top.

                    may be one more example, that is more related to what a computer can do, a problem or try to sort the numerber.

                    after we got an working programm that does what we do, then we think about a more efficient way of doing it.
                     there are many different ways to achive the desired result or solve the problem, the efficiency of the algorithm is what programmer strive to ahieve. 

                   
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