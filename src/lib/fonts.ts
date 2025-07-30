import {
  Playfair_Display,
  Poppins,
  Lexend,
  Roboto_Flex,
  Magra,
  Cormorant_Garamond,
} from "next/font/google"

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  display: "swap",
})

export const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
})

export const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto",
})

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
})

export const magra = Magra({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-migra", // optional
  display: "swap",
})

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"], // optional
  display: "swap",
})
