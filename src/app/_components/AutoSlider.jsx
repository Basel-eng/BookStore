import Image from "next/image";

export const AutoSlider = ({ images, duration = 20 }) => {
  const duplicatedImages = [...images, ...images, ...images, ...images];

  return (
    <div className="slider h-72 mt-10 overflow-hidden flex w-full">
      <div
        className="flex gap-5 cursor-pointer animate-slide"
        style={{ animationDuration: `${duration}s` }}
      >
        {duplicatedImages.map((item, index) => (
          <div
            key={`slide-${index}`}
            className="flex flex-col items-start flex-shrink-0"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={195}
              height={195}
              className="w-52 h-52 object-cover rounded-md"
            />
            <span className="pt-2 font-bold">{item.title}</span>
            <span className="text-gray-600 dark:text-gray-300">
              {item.author}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
