import styles from './styles.module.css'

export const metadata = {
    // Título e descrição básicos
    title: {
        default: "Produtos", // Título padrão
        template: "%s | Minha Loja Online", // Template para títulos de páginas específicas

    },
    description: "A melhor loja online de produtos artesanais do Brasil",
}    

export default function products() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Products</h1>
        </div>
    )
}