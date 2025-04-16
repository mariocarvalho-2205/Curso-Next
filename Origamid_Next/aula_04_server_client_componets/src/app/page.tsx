import Acesso from "@/components/acesso/acesso";

export default async function HomePage() {
  /*
  Server Components
    Possuem acesso a API do servidor (Node) como o fs, path, e outras implementadas pelo Next.js como o fetch e cookies. Renderizam no servidor.
    Por padrão, todos os componentes são Server Components.
    pode se utilizar a promessa async await
    podemos utilizar os recursos do backend

    ! Componente do tipo servidor permite importar componente do tipo cliente
    ! se necessario utilize um componente cliente dentro do servidor
    e nao utilize na pagina toda

*/

  return (
    <main>
      <h1>Home Server and Client Components</h1>
      <Acesso />
    </main>
  );
}
