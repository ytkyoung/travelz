import {
    useParams
} from "react-router-dom";

const BlogItem = () => {
    // test bezieht sich auf das hinter dem : in unserer App.js
    console.log(useParams())
    let { test } = useParams();

    return (
        <div>
            <h1>BlogItem {test}</h1>
            <p style={{ color: "red", backgroundColor: '#000' }}>{Math.random()}</p>
        </div>
    );
}

export default BlogItem;