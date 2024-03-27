import "./Avatar.css";

interface AvatarProps {
  src: string;
  alt: string;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  title: string;
  bgTitle: string;
  widthTitle?: string;
  customClass?: string;
}

export const Avatar = ({
  src,
  alt,
  top,
  left,
  right,
  title,
  bgTitle,
  widthTitle,
  customClass,
}: AvatarProps) => {
  return (
    <div className={`avatar-container ${customClass}`} style={{ top, right, left }}>
      <img
        className="cssanimation fadeInBottom avatar-img"
        src={src}
        alt={alt}
      />
      <div
        className={`cssanimation fadeInBottom ${
          widthTitle ?? "w-20"
        } avatar-title ${bgTitle}`}
        style={{ bottom: -20 }}
      >
        {title}
      </div>
    </div>
  );
};
