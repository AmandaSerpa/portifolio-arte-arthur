import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="gap-6 p-6 bg-[#fdffcf] text-black flex-col md:flex-row">
            <div>
                <ul className="flex justify-end gap-7">
                    <li>
                        <a href="/sobre">Sobre mim</a>
                    </li>
                    <li>
                        <a href="/galeria">Galeria</a>
                    </li>
                    <li>
                        <a href="/contato">Contato</a>
                    </li>
                </ul> 
            </div>
            <div className="flex justify-center">
                <a href="/" className="">
                    <Image src="/images/logo-art3.png" alt="logo" width={300} height={300} />
                </a>
            </div>    
      
        </nav>
        
    );
}