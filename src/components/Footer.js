import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex justify-center p-1 bg-[#243415] text-white">
        
            <div>
                <div className="flex justify-center p-3 font-bold">
                    <a href="/">TUTS</a> © 2026
                </div>
                <p className="flex p-3">Obrigado pela visita! Espero te encontrar em breve!</p>
                
                <div>
                    <ul className="flex p-3 gap-5 justify-center">
                        <li>
                            <a href="https://www.instagram.com/arthurszerba/" target="_blank" rel="external">
                                <Image src="/icons/instagram.svg" alt="Logo" width={24} height={24} className="invert"/>
                            </a>                            
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@arthurszerba" target="_blank" rel="external">
                                <Image src="/icons/youtube.svg" alt="Logo" width={24} height={24} className="invert"/>
                            </a>                            
                        </li>
                        <li>
                            <a href="https://open.spotify.com/show/0QULqJsOqyW4JNyWrAc1Eu?si=f6eb77fbc59947d2" target="_blank" rel="external">
                                <Image src="/icons/spotify.svg" alt="Logo" width={24} height={24} className="invert" />
                            </a>                            
                        </li>
                        <li>
                            <a href="https://www.amazon.com.br/stores/Arthur-Araujo/author/B08DHJZB92?shoppingPortalEnabled=true" target="_blank" rel="external">
                                <Image src="/icons/amazon.svg" alt="Logo" width={24} height={24} className="pt-0.5"/>
                            </a>                            
                        </li>
                    </ul>
                </div>
            </div>
        
        
        
        
        
        </footer>
        
    );
}