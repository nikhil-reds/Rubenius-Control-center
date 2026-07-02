import { Montserrat } from "next/font/google";
import { PreviewWall } from "./components/PreviewWall";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function PreviewPage() {
  return <PreviewWall splashFontClassName={montserrat.className} />;
}
