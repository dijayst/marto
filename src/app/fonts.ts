import { Nunito, Space_Mono,Exo_2,Montserrat} from "next/font/google";
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'], // adjust as needed
  variable: '--font-nunito',
});

export const space_mono = Space_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-exo2",
});