import React, { useState } from 'react';
import Layout from './components/Layout';
import AnimatedText from './components/AnimatedText';
import axios from 'axios';
import Error from './components/contact/Error';

function contact() {
	const [name, setName] = useState('');
	const [last_name, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [error, setError] = useState(false);
	const [errorName, setErrorName] = useState(false);
	const [errorLastName, setErrorLastName] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);

	const handleSubmit = event => {
		event.preventDefault();

		if ([name, last_name, email].includes('')) {
			setError('Todos los campos son obligatorios');
		} else {
			setError(false);
		}

		if ([name].includes('')) {
			setErrorName('El nombre es obligatorio');
		} else {
			setErrorName(false);
		}

		if ([last_name].includes('')) {
			setErrorLastName('El apellido es obligatorio');
		} else {
			setErrorLastName(false);
		}

		if ([email].includes('')) {
			setErrorEmail('El email es obligatorio');
		} else {
			setErrorEmail(false);
		}

		axios
			.post(`${process.env.BASE_URL}/formularios`, {
				data: {
					name: name,
					lastname: last_name,
					email: email,
					message: message,
				},
			})
			.then(response => {
				console.log(response);
			});

		setName('');
		setEmail('');
		setMessage('');
		setLastName('');

		event.target.reset();
	};

	return (
		<Layout pagina={'Contact'}>
			<div
				className={
					'container mx-auto max-md:px-6 pb-[100px] max-md:pb-50 h-full flex flex-col gap-12'
				}
			>
				<div className={'pt-[100px] max-md:pt-[50px]'}>
					<div>
						<AnimatedText
							className={'h-2 max-md:h-1 bg-secondary w-36 mb-12'}
						></AnimatedText>
					</div>
					<div>
						<AnimatedText
							className={
								'text-7xl max-md:text-4xl text-secondary font-bold pb-3'
							}
							text={'¿Interesado en trabajar juntos?'}
						/>
					</div>
					<div>
						<p className={'text-lg max-md:text-base text-fourty font-semibold'}>
							Dejame tu mensaje!
						</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit}
					class="flex flex-col flex-1 w-[50%] max-md:w-full mx-auto]"
				>
					{error ? <Error className={'mb-3'}>{error}</Error> : ''}

					{errorName ? <Error>{errorName}</Error> : ''}
					<div class="w-full h-10 lg:h-16 mb-12 border-b-2 border-fourty">
						<input
							class="w-full h-full bg-primary focus:outline-none placeholder:font-bold placeholder:text-white placeholder:text-lg text-lg lg:placeholder:text-2xl lg:text-2xl text-font-bold text-secondary placeholder:text-secondary px-2"
							placeholder="Introduzca su nombre"
							name="name"
							type="text"
							required=""
							onChange={e => setName(e.target.value)}
							value={name}
						/>
					</div>
					{errorLastName ? <Error>{errorLastName}</Error> : ''}
					<div class="w-full h-10 lg:h-16 mb-12 border-b-2 border-fourty">
						<input
							class="w-full h-full bg-primary focus:outline-none placeholder:font-bold placeholder:text-white placeholder:text-lg text-lg lg:placeholder:text-2xl lg:text-2xl text-font-bold text-secondary placeholder:text-secondary px-2"
							placeholder="Introduzca su apellido"
							name="last_name"
							type="text"
							required=""
							onChange={e => setLastName(e.target.value)}
							value={last_name}
						/>
					</div>
					{errorEmail ? <Error>{errorLastName}</Error> : ''}
					<div class="w-full h-10 lg:h-16 mb-12 border-b-2 border-fourty">
						<input
							class="w-full h-full bg-primary focus:outline-none placeholder:font-bold placeholder:text-white placeholder:text-lg text-lg lg:placeholder:text-2xl lg:text-2xl text-font-bold text-secondary placeholder:text-secondary px-2"
							placeholder="Tu direccion de correo electronico"
							name="email"
							type="text"
							required=""
							onChange={e => setEmail(e.target.value)}
							value={email}
						/>
					</div>

					<div class="w-full h-10 lg:h-16 mb-12">
						<textarea
							class="w-full h-40 bg-five focus:outline-none placeholder:font-bold placeholder:text-white placeholder:text-lg text-lg lg:placeholder:text-2xl lg:text-2xl text-font-bold text-secondary placeholder:text-secondary px-6 rounded-lg py-3"
							placeholder="Mensaje que me quieras dejar ...."
							name="message"
							type="text"
							required=""
							onChange={e => setMessage(e.target.value)}
							value={message}
						/>
					</div>

					<div className={'mt-16 ml-2 max-md:mt-[84px]'}>
						<button
							type="submit"
							className="flex items-center gap-2 border-b-2 border-terciary w-fit h-12 hover:border-secondary transition-all duration-200 cursor-pointer group"
						>
							<p>
								<font styles="vertical-align: inherit;">
									<font
										className={
											'text-secondary font-bold text-2xl max-md:text-lg'
										}
										styles="vertical-align: inherit;"
									>
										Contáctame
									</font>
								</font>
							</p>
							<svg
								stroke="currentColor"
								fill="currentColor"
								stroke-width="0"
								viewBox="0 0 24 24"
								className="w-7 h-7 transition-all group-hover:translate-x-2 group-hover:text-secondary text-terciary"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
							</svg>
						</button>
					</div>
				</form>
			</div>
		</Layout>
	);
}

export default contact;
