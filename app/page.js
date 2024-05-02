import Image from "next/image";
import { FaLaptop } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="min-h-screen px-10">
            <nav className="flex justify-between items-center py-10 mb-12">
                <h1 className="text-xl">Developed by Mtho</h1>
                <ul className="flex items-center">
                    <li>
                      <FaLaptop className="cursor-pointer tex"/>
                    </li>
                    <li></li>
                </ul>
            </nav>

        </section>
    </main>
  );
}