import { useState } from "react";
import { Blurhash } from "react-blurhash";

import "./styles.css";

type Props = {
  src: string;
  hash: string;
};

export const BlurImage = (props: Props) => {
  const { src, hash } = props;

  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className="container">
      <Blurhash
        className={imageLoading ? "show" : "hide"}
        hash={hash}
        width={400}
        height={400}
      />

      <img
        className={imageLoading ? "hide" : "show"}
        style={{ width: 400, height: 400 }}
        src={src}
        alt=""
        onLoad={() => setImageLoading(false)}
      />
    </div>
  );
};
