import BlogDetails from "../../../blog/BlogDetails";
import BlogPost from "../../../blog/BlogPost";

export default function SingleResponsibilityBlogPost(){

    return <>
        <BlogPost imageUrl={require("../../../assets/images/single.jpg")} 
            title={"Single responsibility"} 
            tagLabel={"Programming principle"} 
            dateString={"Nov, 29, 2023"} route={"single-responsibility"}>

        </BlogPost>
    </>
}