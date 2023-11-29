import BlogDetails from "../../../blog/BlogDetails";
import BlogPost from "../../../blog/BlogPost";

export default function BridgeDesignPatternBlogPost({imageUrl, title, dateString, mainContent }){

    return <>
        <BlogPost imageUrl={require("../../../assets/images/bridge.jpg")} 
            title={"Bridge design pattern"} 
            tagLabel={"Design pattern"} 
            dateString={"Nov, 28, 2023"} route={"bridge-design-pattern"}>

        </BlogPost>
    </>
}