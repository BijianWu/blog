import { Box, Container, Typography } from "@mui/material";
import BlogDetails from "../../../blog/BlogDetails";
import { CopyBlock, CodeBlock, dracula,github,atomOneDark,androidstudio,paraisoDark ,rainbow,Code } from 'react-code-blocks';

const code = `@RequestMapping("/commitId")
public Map<String, String> getCommitId() {
    Map<String, String> result = new HashMap<>();
    result.put("Commit message",gitProperties.getCommitId());
    result.put("Commit branch", gitProperties.getBranch());
    result.put("Commit id", gitProperties.getShortCommitId());
    result.put("Commit time", gitProperties.getCommitTime() + "");
    return result;
}`;
const language = "java";
const showLineNumbers = true;
const stylesRecord = {"display": "grid"};
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
                    Single Responsibitiy is the first principle from SOILD, where it sets a best practice for how programmer should code. A class or a functon must not have
                    different reasons to change, it should do one thing well. What the one thing is depends on the context of the application you are working, thus every time you see an if and
                    else statement that does not mean the function breaks the Single responsibility principle. when you see your function does multiple things, the best thing you do is
                    to break the function into multiple smaller functions, same goes for class, where you will end up with multiple smaller classes which each one does one thing in your application's context.

                   
                </Typography>

                <Typography variant="h6"  mb={1}>Example</Typography>
                <Typography paragraph>
                    Let's say you are working on a game, where the game contains so many different types of enemies, flying type enemy, ground type enemy
                </Typography>
{/* 
                <Box sx= {{ width: "100%", overflowX: "scroll"}}>


                </Box> */}
                    <CopyBlock
                    customStyle={stylesRecord}
                            text={code}
                            language={language}
                            showLineNumbers={showLineNumbers}
                            wrapLines={true}
                            theme={atomOneDark}
                        />

            </>}
        >
        </BlogDetails>
    </>
}