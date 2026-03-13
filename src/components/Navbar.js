import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-[#243415] text-[#ffffff] shadow-xl py-3">
            <div className="flex flex-col md:flex-row justify-end p-3 gap-7 font-bold">

                <Link href="/sobre">Sobre mim</Link>
                <Link href="/contato" className="pr-7">Contato</Link>                    
            </div>
            
      
        </nav>
        
    );
}