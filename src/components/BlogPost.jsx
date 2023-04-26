import classes from "./BlogPost.module.css"
import { Link } from "react-router-dom";

function BlogPost({blogImg,altBlogImg,blogHeading,blogCopy,category}) {
    return (
        <>
            <div className={classes.blogPost}>
                <div className={classes.blogPostImg}>
                    <img src={blogImg} alt={altBlogImg} className={classes.blogPostImgImg}/>
                </div>
                <div className={classes.blogPostCopy}>
                    <h3 className={classes.blogPostCopyh}>{blogHeading}</h3>
                    <p className={classes.blogPostCopyp}>{blogCopy}</p>
                    <p className={classes.blogPostCopyCategory}>{category}</p>
                    <Link to="/blogfilter" className={classes.blogPostRead}>Read more</Link>
                </div>
            </div>
        </>
    )
}

export default BlogPost;