import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFontSize } from "../utils/useFontSize";

export default function StyledTimelineItem({dateString, targteUrl, title}){
    const fontSize = useFontSize();
    const navigate = useNavigate();
    const moveTo = () => {
        navigate(targteUrl);
    }
    return <>
        <TimelineItem >
            <TimelineOppositeContent color="textSecondary" fontSize={fontSize}>
            {dateString}
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
            </TimelineSeparator>
            {/* , whiteSpace: "nowrap", apply this to below will make the text don't wrap if there is no enough spaces*/}
            <TimelineContent sx={{overflow: "hidden", textOverflow: "ellipsis" }}>
                <Link fontSize={fontSize} onClick={moveTo} underline="none" sx={{ cursor: "pointer",
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