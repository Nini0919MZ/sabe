import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Monica & Homero · 40 / 40",description:"Invitación digital · 40 & 40",icons:{icon:"/favicon.ico"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
