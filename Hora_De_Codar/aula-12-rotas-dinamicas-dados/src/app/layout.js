import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import MainContainer from "@/components/MainContainer/MainContainer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

// Configuração do viewport separada
export const viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
  }

export const metadata = {
	// Título e descrição básicos
	title: {
		default: "Minha Loja Online", // Título padrão
		template: "%s | Minha Loja Online", // Template para títulos de páginas específicas
	},
	description: "A melhor loja online de produtos artesanais do Brasil",

	// Meta tags básicas
	generator: "Next.js", // Identifica o gerador do site
	applicationName: "Minha Loja", // Nome da aplicação
	referrer: "origin-when-cross-origin", // Política de referência
	keywords: [
		"loja online",
		"artesanato",
		"produtos artesanais",
		"feito à mão",
	],
	authors: [{ name: "João Silva", url: "https://joao.com" }],
	creator: "João Silva",
	publisher: "Minha Empresa Ltda",

	// Formatação para redes sociais - Open Graph
	openGraph: {
		title: "Minha Loja Online",
		description: "A melhor loja online de produtos artesanais do Brasil",
		url: "https://minhaloja.com.br",
		siteName: "Minha Loja Online",
		images: [
			{
				url: "https://minhaloja.com.br/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Minha Loja Online - Produtos Artesanais",
			},
		],
		locale: "pt_BR",
		type: "website",
	},

	// Twitter Cards
	twitter: {
		card: "summary_large_image",
		title: "Minha Loja Online",
		description: "A melhor loja online de produtos artesanais do Brasil",
		creator: "@joaosilva",
		images: ["https://minhaloja.com.br/twitter-image.jpg"],
	},

	// Configurações de robôs de busca
	robots: {
		index: true, // Permite indexação
		follow: true, // Permite seguir links
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},

	// Ícones
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
		other: {
			rel: "apple-touch-icon-precomposed",
			url: "/apple-touch-icon-precomposed.png",
		},
	},

	// Manifesto para PWA
	manifest: "/manifest.json",


	// Verificação de propriedade do site
	verification: {
		google: "google-site-verification-code",
		yandex: "yandex-verification-code",
		yahoo: "yahoo-verification-code",
		bing: "bing-verification-code",
	},

	// Localização e idioma
	alternates: {
		canonical: "https://minhaloja.com.br",
		languages: {
			"pt-BR": "https://minhaloja.com.br",
			"en-US": "https://minhaloja.com.br/en",
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<MainContainer>{children}</MainContainer>
			</body>
		</html>
	);
}
