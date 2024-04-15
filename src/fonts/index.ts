import localFont from "next/font/local";

export const verdana = localFont({
  src: [
    {
      path: "./verdana/verdana.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./verdana/verdana-bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-verdana",
});

export const kastelov = localFont({
  src: [
    {
      path: "./kastelov/kastelov-black.otf",
      weight: "900",
      style: "black",
    },
  ],
  variable: "--font-kastelov",
});
