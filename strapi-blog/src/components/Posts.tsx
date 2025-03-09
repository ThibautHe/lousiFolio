import React, { useEffect, useState } from "react";

type Post = {
  id: number;
  documentId: string;
  title: string;
  image: string;
  created: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export default function Posts() {
  const [isloading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<[Post]>([
    {
      id: 0,
      documentId: "",
      title: "",
      image: "",
      created: "",
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:1337/api/posts?populate=*")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
        console.log(data.data);

        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1>posts</h1>

      <div>
        {isloading
          ? "Loading..."
          : posts.map((post) => (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <video
                  src={`http://localhost:1337${post.image[0].url}`}
                  controls
                />
              </div>
            ))}
      </div>
    </>
  );
}
