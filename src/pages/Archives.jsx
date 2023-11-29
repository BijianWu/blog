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
        <TimelineOppositeContent sx={{ minHeight: "90px" }}  fontSize={30} fontWeight={"bold"}>
            2023
        </TimelineOppositeContent>
        <TimelineSeparator>
            {/* apply mt on the dot will move it down, so it looks like aligned with the year */}
          <TimelineDot variant="outlined" sx={{ mt: 3 }}/> 
          
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>

        </TimelineContent>
      </TimelineItem>

      <TimelineItem >
        <TimelineOppositeContent color="textSecondary">
          21 Nov
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Link href="/posts/new-title" underline="none" sx={{ 
                [`&:hover`]: {
                    color: "#ECAF72"
                }
            }}>
                My second writing title
            </Link>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
            20 Nov
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
            <Link href="/posts/new-title-2" underline="none" sx={{ 
                [`&:hover`]: {
                    color: "#ECAF72"
                }
            }}>
                My first writing title
            </Link>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
    </>
}