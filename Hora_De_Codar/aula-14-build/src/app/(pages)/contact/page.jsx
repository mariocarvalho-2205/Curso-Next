import React from 'react'

export const metadata = {
	// Título e descrição básicos
	title: {
		default: "Contatos", // Título padrão
		template: "%s | Minha Loja Online", // Template para títulos de páginas específicas
	},
	description: "A melhor loja online de produtos artesanais do Brasil",
};

const page = () => {
  return (
    <div>
        <h1>Contatos</h1>
    </div>
  )
}

export default page