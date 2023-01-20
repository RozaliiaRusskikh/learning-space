import PostFormPage from "../pages/PostFormPage";
import { useParams } from "react-router-dom";
import NoPage from "../pages/NoPage";


function EditPostFormPage({ posts, updatePost }) {
    const { postSlug } = useParams();

    const post = posts.find(
        (post) => post.slug === postSlug
    )

    if (post) {
        return <PostFormPage post={post} updatePost={updatePost} />
    }

    else {
        return <NoPage />
    }
}

export default EditPostFormPage;