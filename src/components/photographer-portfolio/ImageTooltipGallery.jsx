import React, { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import ReactTooltip from "react-tooltip";
import img0 from "../../assets/images/media/img_100.jpg";
import img1 from "../../assets/images/media/img_101.jpg";
import img2 from "../../assets/images/media/img_102.jpg";
import img3 from "../../assets/images/media/img_103.jpg";
import img4 from "../../assets/images/media/img_104.jpg";
import img5 from "../../assets/images/media/img_105.jpg";
import img6 from "../../assets/images/media/img_106.jpg";
import img7 from "../../assets/images/media/img_107.jpg";
import img8 from "../../assets/images/media/img_108.jpg";
import img9 from "../../assets/images/media/img_109.jpg";
import img10 from "../../assets/images/media/img_110.jpg";

const ImageTooltipGallery = () => {
  const [tooltip, showTooltip] = useState(true);
  const galleryContent = [
    {
      id: 1,
      dataId: "popup-1",
      title: "Landscape",
      imagePopup: img1,
    },
    {
      id: 2,
      dataId: "popup-2",
      title: "Model",
      imagePopup: img0,
    },
    {
      id: 3,
      dataId: "popup-3",
      title: "Street",
      imagePopup: img2,
    },
    {
      id: 4,
      dataId: "popup-4",
      title: "Product",
      imagePopup: img3,
    },
    {
      id: 5,
      dataId: "popup-5",
      title: "Fashion",
      imagePopup: img0,
    },
    {
      id: 6,
      dataId: "popup-6",
      title: "Film",
      imagePopup: img4,
    },
    {
      id: 7,
      dataId: "popup-7",
      title: "Architecture",
      imagePopup: img5,
    },
    {
      id: 8,
      dataId: "popup-8",
      title: "Event",
      imagePopup: img6,
    },
    {
      id: 9,
      dataId: "popup-9",
      title: "Weeding",
      imagePopup: img7,
    },
    {
      id: 10,
      dataId: "popup-10",
      title: "People",
      imagePopup: img8,
    },
    {
      id: 11,
      dataId: "popup-11",
      title: "Event",
      imagePopup: img6,
    },
    {
      id: 12,
      dataId: "popup-12",
      title: "Food",
      imagePopup: img9,
    },
    {
      id: 13,
      dataId: "popup-13",
      title: "Health & Wellness",
      imagePopup: img10,
    },
  ];
  return (
    <>
      <Gallery>
        {galleryContent.map((item) => (
          <span
            key={item.id}
            data-tip
            data-for={item.dataId}
            onMouseEnter={() => showTooltip(true)}
            onMouseLeave={() => {
              showTooltip(false);
              setTimeout(() => showTooltip(true), 50);
            }}
          >
            <Item
              original={item.imagePopup}
              thumbnail={item.imagePopup}
              width="600"
              height="690"
            >
              {({ ref, open }) => (
                <>
                  <span ref={ref} onClick={open}>
                    {" "}
                    {item.title}
                  </span>

                  {","}
                </>
              )}
            </Item>

            {tooltip && (
              <ReactTooltip
                id={item.dataId}
                place="top"
                type="dark"
                effect="float"
                arrowColor="transparent"
              >
                <div className="hover-img">
                  <img
                    src={item.imagePopup}
                    alt="portfolio"
                    className="w-100"
                  />
                </div>
              </ReactTooltip>
            )}
          </span>
        ))}
      </Gallery>
    </>
  );
};

export default ImageTooltipGallery;
