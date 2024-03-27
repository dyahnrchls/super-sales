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
    <div
      className={`absolute z-50 w-24 flex items-center flex-col ${customClass}`}
      style={{ top, right, left }}
    >
      <img
        className="cssanimation fadeInBottom border rounded-full z-50 border-border-dark border-b-8"
        src={src}
        alt={alt}
      />
      <div
        className={`cssanimation fadeInBottom ${
          widthTitle ?? "w-20"
        } py-2 text-white text-xl text-center rounded-full font-bold absolute z-[60] ${bgTitle}`}
        style={{ bottom: -20 }}
      >
        {title}
      </div>
    </div>
  );
};
