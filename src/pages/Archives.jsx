import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { Link, linkClasses } from '@mui/material';
import StyledPageHeadingTypography from '../components/StyledPageHeadingTypography';
import StyledTimelineItem from '../components/StyledTimelineItem';

// TODO: refactor single section into a class or a function, so keep the duplication to minimal
export default function Archives(){

    return <>
      <StyledPageHeadingTypography>Archives</StyledPageHeadingTypography>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 1,
          }
      }}
      >

     <TimelineItem >
        <TimelineOppositeContent sx={{ minHeight: "90px" }}  fontSize={"1.5rem"} fontWeight={"bold"}>
            2023
        </TimelineOppositeContent>
        <TimelineSeparator>
            {/* apply mt on the dot will move it down, so it looks like aligned with the year */}
          <TimelineDot variant="outlined" sx={{ mt: 3 }}/> 
          
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{overflow: "clip"}}>

        </TimelineContent>
      </TimelineItem>

      <StyledTimelineItem dateString={"6 Dec"} targteUrl={"/archives/posts/bridge-design-pattern"} title={"Bridge design pattern"} />
      <StyledTimelineItem dateString={"29 Nov"} targteUrl={"/archives/posts/single-responsibility"} title={"Single responsibility"} />


    </Timeline>
    </>
}