import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import Logo from "@/public/amazon-logo.png";
import Image from "next/image"

export default function Page() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center mx-auto mt-auto w-full h-full">
      <Link href="/">
            <Image src={Logo} alt="amazon" width={100} height={100}/>
          </Link>
      <SignUp path="/sign-up" />
    </div>
  );
}