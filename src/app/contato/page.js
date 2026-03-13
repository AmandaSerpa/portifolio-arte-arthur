import Image from "next/image";
import Link from "next/link";

export default function Contato() {

    return(
        <main className="bg-[#90822C]">
            <div flex>
                <a href="/" className="">
                    <Image src="/images/logo-art2.png" alt="logo-art" width={300} height={200} ></Image>
                </a>
            </div>
            <section className="max-w-auto mx-auto px-4">              
                    
                <div className="flex flex-col items-center gap-3">
                    <h1 className="mb-10">Contato</h1>
                    <h2>Quer trabalhar comigo ?</h2>
                    <p className="max-w-xl text-justify mb-10">
                        Mande um e-mail para <strong>arthurrr27@hotmail.com.</strong> Ou entre em contato pelo <strong><a href="https://www.instagram.com/arthurszerba/" target="_blank" rel="external">Instagram</a></strong>. Vai ser otimo poder te ajudar e colocar sua ideia no mundo através da minha arte
                    </p>
                </div>
            </section>
        </main>
    );
}