import Head from 'next/head';
import Navbar from './header/Navbar';
import Footer from './footer/Footer';

function Layout({ children, pagina, className = '' }) {
	return (
		<div className={className}>
			<Navbar />
			<Head>
				<link
					rel="stylesheet"
					type="text/css"
					charset="UTF-8"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
				/>
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1126139209868956"
					crossorigin="anonymous"
				></script>
				<title>Martin Camer - {pagina}</title>
			</Head>
			{children}
			<Footer />
		</div>
	);
}

export default Layout;
