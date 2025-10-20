import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const generateRandomColors = ({
  accordionButtonColors,
  accordionContentColors,
  accordionItems,
  setButtonColors,
}) => {
  return accordionItems.map(() => {
    const randomIndex = Math.floor(
      Math.random() * accordionContentColors.length
    );
    const randomButtonIndex = Math.floor(
      Math.random() * accordionButtonColors.length
    );
    setButtonColors((prev) => [
      ...prev,
      accordionButtonColors[randomButtonIndex],
    ]);
    return accordionContentColors[randomIndex];
  });
};
