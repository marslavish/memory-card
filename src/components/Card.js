import React from "react";
import uniqid from "uniqid";

export default function Card(props) {
  const { id, img, handleClick } = props;

  return (
    <div
      className="card col-md-3 col-sm-6 mb-3"
      onClick={() => handleClick(id)}
    >
      <img src={img} alt="card" className="card-img-top" />
    </div>
  );
}

export const cardsData = [
  {
    id: uniqid(),
    img:
      "https://static.displate.com/280x392/displate/2020-05-07/a74ecf5fe98b605a23bfe82e2b1c05c9_887a39f573004b571741a6731747cdbe.jpg",
  },
  {
    id: uniqid(),
    img:
      "https://static.displate.com/280x392/displate/2020-05-07/57dfe2c2e8fd4d78b4327da81669b451_f81cadf3ca63b4830134879c292a60d4.jpg",
  },
  {
    id: uniqid(),
    img:
      "https://static.displate.com/280x392/displate/2020-05-07/dc061079220726f44ab64dc24c74b8d9_9d6d032ed22658f062ba0eec082e5486.jpg",
  },
  {
    id: uniqid(),
    img:
      "https://static.displate.com/280x392/displate/2020-05-07/ef331fe4c1d365d580307c0c545cf265_c9179a605b02dc6af0588d01e5973985.jpg",
  },
  {
    id: uniqid(),
    img:
      "https://static.displate.com/280x392/displate/2020-05-12/4e2b1a1358441a65c5e4bac0e262a68c_a591b9b306c281b54e5c22293120a240.jpg",
  },
  {
    id: uniqid(),
    img:
      "https://static.displate.com/280x392/displate/2020-05-07/e8c8dc4ae0f8e4a24cae96fbfe107340_f79ef55ed70e1c62b67042f20f74312f.jpg",
  },
  {
    id: uniqid(),
    img:
      "https://static.displate.com/280x392/displate/2020-05-07/9159f20a39d4977a84adc49ea2fbada2_f0553203f55ceffa38d1646c19c76c18.jpg",
  },
  {
    id: uniqid(),
    img:
      "https://static.displate.com/280x392/displate/2020-05-07/56f081bc51db119b07b1df7f2e36409e_9adcb6b6cd8136674a78fbf6864d8812.jpg",
  },
  {
    id: uniqid(),
    img:
      "https://static.displate.com/280x392/displate/2020-05-07/446f8597564ada06b80f4ff3427c1c50_20d31fd9ae3bcf859dbbdef6bb9b0359.jpg",
  },
  {
    id: uniqid(),
    img:
      "https://static.displate.com/280x392/displate/2020-05-12/0723f206a8e99e58dfff8f88759f1651_c5a63e58a07d82be4d0f04551e12dab3.jpg",
  },
  {
    id: uniqid(),
    img:
      "https://static.displate.com/280x392/displate/2020-05-12/5c155e7746dea4384e3c52f4a6508bcd_9a46b8291db98918bee90aede8cace2e.jpg",
  },
  {
    id: uniqid(),
    img:
      "https://static.displate.com/280x392/displate/2020-05-07/d97f2ed1f96eeca4c7e564b034d21309_6bcca6436e7068d3b467c8888b3e8106.jpg",
  },
  {
    id: uniqid(),
    img:
      "https://static.displate.com/280x392/displate/2020-05-12/5d2642442222ba23f239f93c122cdca8_f2d833c31b1ebd0bf14dbbd34b0100c0.jpg",
  },
  {
    id: uniqid(),
    img:
      "https://static.displate.com/280x392/displate/2020-05-07/1209d4e5f607bf615253b41e11ef779e_ab5fb3ea30732438e9dfe9649b962af1.jpg",
  },
  {
    id: uniqid(),
    img:
      "https://static.displate.com/280x392/displate/2020-05-12/fcda6c28d5c03c97191320dc34d8e771_9e4cd1b76bea2f27bf27a1bd6ff27cc6.jpg",
  },
  {
    id: uniqid(),
    img:
      "https://static.displate.com/280x392/displate/2019-12-12/52f5f908c44e04794028be9753a1f814_cc91ebe724767909211a465489cd7b56.jpg",
  },
];
