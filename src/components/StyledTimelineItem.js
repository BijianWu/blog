import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function StyledTimelineItem({dateString, targteUrl, title}){
    const navigate = useNavigate();
    const moveTo = () => {
        navigate(targteUrl);
    }
    return <>
        <TimelineItem >
            <TimelineOppositeContent color="textSecondary">
            {dateString}
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
            </TimelineSeparator>
            {/* , whiteSpace: "nowrap", apply this to below will make the text don't wrap if there is no enough spaces*/}
            <TimelineContent sx={{overflow: "hidden", textOverflow: "ellipsis" }}>
                <Link onClick={moveTo} underline="none" sx={{ cursor: "pointer",
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