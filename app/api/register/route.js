import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import {NextResponse} from "next/server";

export async function POST(request) {

    try {
        const body = await request.json()
        const {name,email , password} = body;
        console.log("REGISTRATION")

        if (!email || !name || !password) {
            return new NextResponse("Missing Info ")

        }
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                 name,email,hashedPassword,

            }
        })
        return NextResponse.json(user)

    } catch (e) {
        console.log("REGISTRATION ERROR ", e)
    }


}