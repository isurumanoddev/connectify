import Image from "next/image";
import AuthForm from "@/app/(site)/components/AuthForm";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col py-12 sm:px-6 lg:px-8 justify-center  p-24">
            <div>
                <div className={"sm:mx-auto sm:w-full sm:max-w-md"}>

                </div>
                <Image
                    height="48"
                    width="48"
                    className="mx-auto w-auto"
                    src="/logo.png"
                    alt="Logo"
                />
                <h2 className={"mt-6 text-center text-3xl font-bold tracking-tight"}>
                    Sign into your account
                </h2>
            </div>
               <AuthForm/>
        </main>

)
}
