import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Link } from "@mui/material";

export default function StyledTimelineItem({dateString, targteUrl, title}){
    return <>
        <TimelineItem >
            <TimelineOppositeContent color="textSecondary">
            {dateString}
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Link href={targteUrl} underline="none" sx={{ 
                    [`&:hover`]: {
                        color: "#ECAF72"
                    }
                }}>
                    {title}
                </Link>
            </TimelineContent>
        </TimelineItem>
    </>
}