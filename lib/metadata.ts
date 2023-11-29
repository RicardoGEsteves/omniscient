import { Metadata } from "next";

export function constructMetadata({
  title = "Omniscient",
  description = "Fullstack Software as a Service AI Platform",
  // image = "/logo.png",
  // icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  // image?: string;
  // icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    applicationName: "Omniscient",
    keywords: [
      "AI",
      "OpenAI",
      "replicate",
      "AI Platform",
      "SaaS Application",
      "JavaScript",
    ],
    // add url
    authors: { name: "Ricardo Esteves", url: "" },
    creator: "Ricardo Esteves",
    // openGraph: {
    //   title,
    //   description,
    //   siteName: "Omniscient",
    //   // add url
    //   url: "",
    //   images: [
    //     {
    //       url: image,
    //     },
    //   ],
    //   type: "website",
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   title,
    //   description,
    //   images: [image],
    //   creator: "@RicardoGEsteves",
    // },
    // icons,
    // metadataBase: new URL(""), production url
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
