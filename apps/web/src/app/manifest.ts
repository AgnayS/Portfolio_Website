import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Agnay Srivastava",
    short_name: "Agnay",
    description:
      "Co-founder and CEO of Tsenta, building cost-effective AI agents and writing about the work.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f2e7",
    theme_color: "#182234",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
