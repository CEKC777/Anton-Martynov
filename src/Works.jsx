import React from "react";

const Works = () => {
  const works = [
    {
      src: "https://player.vimeo.com/video/795577052?h=a7c8c86b0c&title=0&byline=0&portrait=0",
      title: "FxPro - This is the new you",
      role: "Directing/Editing",
      year: 2022,
    },
    {
      src: "https://player.vimeo.com/video/803844658?h=486eb66fc2&title=0&byline=0&portrait=0",
      title: "FxPro - Trading is constantly overcoming...",
      role: "Directing/Editing",
      year: 2022,
    },
    {
      src: "https://player.vimeo.com/video/797666557?h=593970c49e&title=0&byline=0&portrait=0",
      title: "SBERBANK SVOEDELO GUIDE",
      role: "Editing",
      year: 2022,
    },
    {
      src: "https://player.vimeo.com/video/799847448?h=758a768aad&title=0&byline=0&portrait=0",
      title: "SBERBANK SVOEDELO RETRO DRIVER",
      role: "Editing",
      year: 2022,
    },
  ];

  return (
    <main>
      <ul>
        {works.map((work, key) => (
          <li key={key}>
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src={work.src}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <p>
              {work.title}
              <br />
              {work.role}
              <br />
              {work.year}
            </p>
          </li>
        ))}
      </ul>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </main>
  );
};

export default Works;
