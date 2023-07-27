import './globals.css'
import {Sora} from 'next/font/google'
import ToasterProvider from "@/app/context/ToasterProvider";
import AuthContext from "@/app/context/AuthContext";

const inter = Sora({subsets: ['latin']})

export const metadata = {
    title: 'Connectify',
    description: 'Generated by create next app',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <AuthContext>
            <ToasterProvider/>
            {children}

        </AuthContext>


        </body>
        </html>
    )
}
