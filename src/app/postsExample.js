"use client";
import Post from "@/components/Post";
import { useState, useEffect } from "react";
 
export default function makePost(){
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if(content.length >=20) alert("You content is getting long...");
   }, [content]);

  function addPost(){
    const newPost = {
      author: author,
      content: content,
      title: title,
      following: false,

    }

    setPosts([...posts, newPost]);
    setContent("");
    setAuthor("");
    setTitle("");
  }


  return (
  <div>
    <div>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        />
      <input 
        type="text" 
        value={content} 
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        />
      <input 
        type="text" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        />
      <button onClick={addPost}>Add Post</button>
    </div>
    <div className = "posts"> 
      {posts.map((post, idx) => (
        <Post {...post} key={idx + Math.random()}/>
      ))}
    </div>
  </div>
  );
}
