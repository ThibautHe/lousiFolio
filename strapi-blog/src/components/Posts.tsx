import React, { useEffect, useState } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import "./plyr.css";

type Post = {
  id: number;
  documentId: string;
  title: string;
  image: { url: string }[]; // Ensure it's an array
  created: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export default function Posts() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]); // Corrected type

  useEffect(() => {
    fetch("http://localhost:1337/api/posts?populate=*")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 max-w-[1080px] m-auto p-8">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => (
          <div className="w-full" key={post.id}>
            <Plyr
              source={{
                type: "video",
                sources: [
                  {
                    src: `http://localhost:1337${post.image[0].url}`,
                    type: "video/mp4",
                  },
                ],
              }}
              options={{
                controls: ["play", "mute", "volume", "fullscreen"],
                autoplay: true,
                loop: { active: true },
              }}
            />
          </div>
        ))
      )}
    </div>
  );
}
