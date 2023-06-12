import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../store/slices/postSlices";

const Post = () => {
  
  
  const dispatch = useDispatch();
   
  const { list } = useSelector((state) => state.posts);
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dispatch(fetchAllPosts());
    setPosts(list);
  }, [dispatch, list]);

  const globalArray = useSelector((state) => state?.global);

  useEffect(() => {
    console.log("globalArrayyyyyyyyyyy",  globalArray)

  }, [ globalArray]);

  return (
    <div className="container">
      <div className="row">
        {posts.map((post, index) => (
          <div key={index} className="col-md-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text">{post.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
