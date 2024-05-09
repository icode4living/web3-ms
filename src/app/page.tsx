import Image from "next/image";
import LoginForm from "@/app/ui/login-form";
export default function Home() {
  return (
    <main className="bg-gray-900 flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm/>
 
    </main>
  );
}
