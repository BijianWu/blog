import { Stack, Typography } from "@mui/material";
import StyledPageHeadingTypography from "../components/StyledPageHeadingTypography";

export default function About(){

    return <>
        <StyledPageHeadingTypography>About</StyledPageHeadingTypography>
        <Stack spacing={2}>
            <Typography>Hi, I am Bijian</Typography>

            <Typography>
            I am proficient in different programming languages and APIs, have acquired relevant experience in software development using Visual Studio particularly C#, front-end web development using JavaScript, back-end development using Java, JavaScript, PHP and Python, game development in Unity and Unreal, 
            </Typography>

            <Typography>
            have in-depth knowlege of MySql and MongoDb
            </Typography>

            <Typography>
            also have profound experiences in containerisation tools like Docker and Kubernetes.
            </Typography>

            <Typography>
            I am a very enthusiastic and hardworking individual dedicated to high quality work produced timely meeting given deadlines and targets. In my free time I am always developing my skills, practising new ways of overcoming given tasks speedily and learning new related skills using online resources and other sources provided or offered at programming events.
            </Typography>
        </Stack>

    </>
}