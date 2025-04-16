import Link from "next/link";

export default function Menu() {
  /*
    // Prefetch
        * O Link automaticamente faz o prefetch de páginas estáticas, ou seja, o Next.js já carrega a página em segundo plano para que ela esteja disponível quando o usuário clicar no link. (true é o padrão)
        * O comportamento do prefetch só é possível ser analisado em produção.
        * <Link href={`/`} prefetch={true}>Home</Link>
        ? O prefetch so funciona no ambiente de produção
            npm run build
            npm run start

        Link Interno e Scroll
        
        * O comportamento de scroll interno funciona da mesma forma que o <a>. 
        * É possível desabilitar o scroll automático com scroll={false}.

        <li>
        <Link href="/sobre#empresa" scroll={false}>
          Sobre
        </Link>
        </li>

        <h2 style={{ margin: '1600px 0' }} id="empresa">
            A Empresa
        </h2>
 */
  return (
    <ul className="menu">
      <li>
        <Link href={`/`} prefetch={true}>
          Home
        </Link>
      </li>
      <li>
        <Link href={`/sobre`} prefetch={true}>
          Sobre
        </Link>
      </li>
      <li>
        <Link href="/contato" prefetch={true}>
          Contato
        </Link>
      </li>
    </ul>
  );
}
