import BlogDetails from "../../../blog/BlogDetails";

export default function BridgeDesignPatternBlogDetails({imageUrl, title, dateString, mainContent }){

    return <>
        <BlogDetails imageUrl={require("../../../assets/images/bridge.jpg")} title={"Bridge design pattern"} dateString={"Nov, 28, 2023"} mainContent={"bridge-design-pattern"}></BlogDetails>
    </>
}