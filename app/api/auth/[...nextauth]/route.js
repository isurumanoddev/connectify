import bcrypt from 'bcrypt'
import NextAuth, {AuthOptions} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "@/app/libs/prismadb";


export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,

        }),
        Credentials({
            name: 'credentials',
            credentials: {
                email: {
                    label: 'email', type: 'password',

                },
                password: {label: 'password', type: 'password'}
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid Credentials");
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.email,

                    }
                });
                if (!user || !user?.hashedPassword) {
                    throw new Error("Invalid Credentials");
                }
                const isCorrectPassword = await bcrypt.compare(
                    credentials?.password,
                    user?.hashedPassword
                )

                if (!isCorrectPassword) {
                    throw new Error("Invalid Credentials");
                }
                return user


            },


        })


    ],
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,

}

export default NextAuth({authOptions});


