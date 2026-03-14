import {supabase} from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {
  return (
    <main className="bg-[#243415]">
      
      <section className="max-w-auto mx-auto px-4">
        <div className="flex justify-center">
          <a href="/" className="">
            <Image src="/images/logo-art3.png" alt="logo-art" width={325} height={200} ></Image>
          </a>
        </div> 
          <div className="grid grid-cols-1 md:grid-cols-[auto_auto] gap-5 max-w-4xl mx-auto justify-center m-5 pb-5">
            <figure>
              <Link href="">
                Ilustrações
                <Image></Image>
              </Link>
            </figure>
            <figure>
              <Link href="">
                Livros
                <Image></Image>
              </Link>
            </figure>
            <figure>
              <Link href="">
                Contos
                <Image></Image>
              </Link>
            </figure>
            <figure>
              <Link href="">
                Arte Editorial
                <Image></Image>
              </Link>
            </figure>
          </div>
      </section>

      <section className="bg-[#853F01] max-w-auto mx-auto px-4">   

        <div className="grid grid-cols-1 md:grid-cols-[auto_auto] gap-10 max-w-4xl mx-auto justify-center pt-5 ">

          <Image src="/images/foto-autor.png" alt="foto-autor" width={350} height={200} className="m-3"></Image>

          <div className="text-justify max-w-6xl mx-auto px-4">
            <p className="pt-15">Eu sou <strong>Arthur Araujo</strong>, preto e queer, moro no interior da Bahia. Sou <strong>escritor</strong> desde que eu tinha 8 anos. Eu amava escrever fantasia. Bruxas... Seres fantástico... personagens que tivessem a cor da minha pele. Parei de deixar minhas histórias só pra mim quando tomei consciência de que mais gente por aí poderia precisar delas.</p>
            <p className="pt-4">Além de escrever, sou <strong>ilustrador</strong>. Também tenho um podcast chamado “Alerta Diversidade” sobre a vida e afins. E estou presente no YouTube.</p>
            <div className="justify-items-center max-w-6xl mx-auto px-4 "> 
              <h2 className="text-[#ebcb4a] pt-3">Vamos trabalhar juntes ?</h2>
            </div>           
          </div>
        </div>    
          
      </section>
     
     <section className="bg-[#90822C] max-w-auto mx-auto px-4">

      <div>
        <h1 className="text-center p-3 pt-5 text-black">Youtube</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
        <Image src="/images/detalhe-lateral2.png" alt="detalhe" width={300} height={300} className="mt-15"></Image>
        <iframe w-full h-full src="https://www.youtube.com/embed/IpUEHVVd-j8?si=sSxu9iI-CgVjsh4a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <Image src="/images/detalhe-lateral2.png" alt="detalhe" width={300} height={300} className="mt-15"></Image>
      </div>
      
      <div className="flex justify-center p-3 pb-5">
        <a href="https://www.youtube.com/@arthurszerba" target="_blank" rel="external">
          <button className="bg-black text-[#ebcb4a] px-6 py-3 rounded-lg hover:bg-[#ffffff] transition hover:text-black shadow-md mt-3">Conheça o canal</button>
        </a> 
      </div>
      

     </section>
      
      
    </main>
  );
}
