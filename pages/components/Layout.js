import Head from 'next/head';
import Navbar from './header/Navbar';
import Footer from './footer/Footer';

function Layout({ children, pagina }) {
	return (
		<div className={'bg-primary'}>
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
				<title>Martin Camer - {pagina}</title>
			</Head>
			{children}
			<Footer />
		</div>
	);
}

export default Layout;
