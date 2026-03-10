import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex justify-center p-1 bg-[#fdffcf] text-black">
        
            <div>
                <div className="flex justify-center p-3">
                    TUTS © 2026
                </div>
                <p className="flex p-3">Obrigado pela visita! Espero te encontrar em breve!</p>
                
                <div>
                    <ul className="flex p-3 gap-7 justify-center">
                        <li>
                            <a href="https://www.instagram.com/arthurszerba/" target="_blank" rel="external">
                                <Image src="/images/logo-instagram.png" alt="Logo" width={24} height={24} />
                            </a>                            
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@arthurszerba" target="_blank" rel="external">
                                <Image src="/images/logo-youtube.png" alt="Logo" width={24} height={24} className="pt-1"/>
                            </a>                            
                        </li>
                        <li>
                            <a href="https://open.spotify.com/show/0QULqJsOqyW4JNyWrAc1Eu?si=f6eb77fbc59947d2" target="_blank" rel="external">
                                <Image src="/images/logo-spotify.png" alt="Logo" width={24} height={24} />
                            </a>                            
                        </li>
                        <li>
                            <a href="https://www.amazon.com.br/stores/Arthur-Araujo/author/B08DHJZB92?shoppingPortalEnabled=true" target="_blank" rel="external">
                                <Image src="/images/logo-amazon.png" alt="Logo" width={24} height={24} />
                            </a>                            
                        </li>
                    </ul>
                </div>
            </div>
        
        
        
        
        
        </footer>
        
    );
}