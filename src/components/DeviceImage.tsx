"use client";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export function DeviceImage({ src, alt, className }: Props) {
  return (
    <div
      className={
        // размеры близкие к прежнему PhoneMock (чтобы вёрстка не «поехала»)
        "relative h-[360px] w-[180px] sm:h-[460px] sm:w-[230px] lg:h-[520px] lg:w-[260px] select-none " +
        (className ?? "")
      }
    >
      <Image
        src={src}
        alt={alt}
        fill
        // показываем целиком, не обрезая рамку телефона
        className="object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
        sizes="(min-width:1024px) 260px, (min-width:640px) 230px, 180px"
        priority
      />
    </div>
  );
}