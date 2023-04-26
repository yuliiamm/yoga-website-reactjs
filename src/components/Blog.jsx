import classes from "../components/Blog.module.css"
import BlogPost from "./BlogPost";
import { Link } from "react-router-dom";

function Blog() {
    return (
        <>
            <div id="blog" className={classes.blogWrapper}>
                <div className={classes.blogWrapperCopy}>
                    <img src={require("../img/blogleaf1.png")} alt="" className={classes.blogleafOne} />
                    <img src={require("../img/blogleaf2.png")} alt="" className={classes.blogleafTwo} />
                    <img src={require("../img/leafelipse1.png")} alt="" className={classes.leafelipseOne} />
                    <img src={require("../img/leafelipse2.png")} alt="" className={classes.leafelipseTwo} />
                    
                    <h2><Link to="/blogfilter" className={classes.blogWrapperCopyh}>Blog</Link></h2>
                    <p className={classes.blogWrapperCopyp}>Discover your best and most powerful self with our exclusive health and wealth services.....</p>
                </div>
                <div className={classes.blogList}>
                    <BlogPost
                        blogImg={require("../img/blog1.png")}
                        blogHeading="Best Practices for meditation & relaxation..."
                        blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                        category="Health"
                    />
                    <BlogPost
                        blogImg={require("../img/blog2.png")}
                        blogHeading="Best Practices for meditation & relaxation..."
                        blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                        category="Yoga"
                    />
                    <BlogPost
                        blogImg={require("../img/blog3.png")}
                        blogHeading="Best Practices for meditation & relaxation..."
                        blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                        category="Welness"
                    />
                </div>

            </div>

        </>
    )
}

export default Blog;