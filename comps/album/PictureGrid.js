import $ from "jquery";
import "justifiedGallery";
import { createRef, useEffect } from "react";
import "justifiedGallery/dist/css/justifiedGallery.min.css";

const PictureGrid = ({ pictures }) => {
  const galleryRef = createRef();

  useEffect(() => {
    if (galleryRef.current) {
      $(galleryRef.current).justifiedGallery({
        maxRowHeight: 300,
        rowHeight: 250,
        margins: 5,
        randomize: false,
        lastRow: "center",
        captions: false,
        justifyThreshold: 0.6,
      });
    }
  });

  return (
    <div ref={galleryRef}>
      {pictures.map(picture => (
        <a key={picture.id}>
          <img
            alt={picture.resource.tags.join(", ")}
            src={picture.resource.url}
            height={picture.resource.height}
            width={picture.resource.width}
          />
        </a>
      ))}
    </div>
  );
};

export default PictureGrid;
