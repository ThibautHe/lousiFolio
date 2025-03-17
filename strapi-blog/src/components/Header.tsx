import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import React, { use, useEffect, useState } from "react";

export default function Header() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{
    data: { Demoreel: { url: string } };
  } | null>(null);

  useEffect(() => {
    fetch("http://localhost:1337/api/header?populate=*")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div className="flex justify-center max-w-[1080px] m-auto px-8">
          {data && (
            <div className="w-full">
              <Plyr
                source={{
                  type: "video",
                  sources: [
                    {
                      src: `http://localhost:1337${data.data.Demoreel.url}`,
                      type: "video/mp4",
                    },
                  ],
                }}
                options={{
                  controls: ["play", "mute", "volume", "fullscreen"],
                  autoplay: false,
                }}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
