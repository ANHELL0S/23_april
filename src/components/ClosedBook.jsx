export function ClosedBook({ onClick, shakeCount }) {
	const isShaking = shakeCount > 0
	return (
		<div className='flex flex-col items-center justify-center' style={{ minHeight: '70vh' }}>
			{/* Instruction hint */}
			<div
				className='mb-10 text-center anim-fadeIn'
				style={{ animationDelay: '0.5s', animationFillMode: 'both', opacity: 0 }}>
				<p
					style={{
						fontFamily: "'Playfair Display',serif",
						fontStyle: 'italic',
						color: '#d4c5e2',
						fontSize: 'clamp(1rem,2.5vw,1.3rem)',
						marginBottom: '6px',
						marginTop: '50px',
					}}>
					Para Amelia, con amor
				</p>
			</div>

			{/* Book wrapper */}
			<div
				className={isShaking ? 'anim-bookShake' : ''}
				onClick={onClick}
				style={{ cursor: 'pointer', position: 'relative', userSelect: 'none' }}
				title='Toca para abrir'>
				{/* Glow background */}
				<div
					style={{
						position: 'absolute',
						inset: '-20px',
						background: 'radial-gradient(ellipse, rgba(139,26,46,0.25) 0%, transparent 70%)',
						borderRadius: '50%',
						pointerEvents: 'none',
						animation: 'glowRose 2.5s ease-in-out infinite',
					}}
				/>

				{/* Book 3D */}
				<div
					style={{
						position: 'relative',
						width: 'clamp(180px,32vw,240px)',
						height: 'clamp(240px,42vw,320px)',
						background: 'linear-gradient(150deg,#5a0f1e 0%,#2a0810 35%,#8b1a2e 70%,#5a0f1e 100%)',
						borderRadius: '4px 14px 14px 4px',
						boxShadow:
							'-10px 10px 35px rgba(0,0,0,0.8), inset -4px 0 10px rgba(0,0,0,0.5), 6px 6px 20px rgba(139,26,46,0.2)',
						border: '1px solid rgba(201,168,76,0.25)',
						transition: 'transform 0.2s ease',
					}}
					onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04) rotate(1deg)')}
					onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1) rotate(0deg)')}>
					{/* Spine */}
					<div
						style={{
							position: 'absolute',
							left: 0,
							top: 0,
							bottom: 0,
							width: '16px',
							background: 'linear-gradient(90deg,#2a0810 0%,#4a0f1a 100%)',
							borderRight: '1px solid rgba(201,168,76,0.15)',
							borderRadius: '4px 0 0 4px',
						}}
					/>
					{/* Inner frame */}
					<div
						style={{
							position: 'absolute',
							inset: '12px',
							border: '1px solid rgba(201,168,76,0.2)',
							borderRadius: '2px',
						}}
					/>
					<div
						style={{
							position: 'absolute',
							inset: '18px',
							border: '1px solid rgba(201,168,76,0.1)',
							borderRadius: '1px',
						}}
					/>

					{/* Cover content */}
					<div
						style={{
							position: 'absolute',
							inset: 0,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							gap: '8px',
							padding: '24px 20px',
						}}>
						<div
							style={{
								fontFamily: "'Playfair Display',serif",
								color: '#e8c96a',
								fontSize: 'clamp(0.75rem,1.8vw,0.95rem)',
								fontWeight: 700,
								textAlign: 'center',
								lineHeight: 1.3,
							}}>
							La Mecánica del Corazón
						</div>
						<div style={{ width: '40px', height: '1px', background: 'rgba(201,168,76,0.4)', margin: '12px 0' }} />
						<div
							style={{
								color: '#a08090',
								fontSize: '0.6rem',
								fontFamily: "'Special Elite',monospace",
								letterSpacing: '0.12em',
								textAlign: 'center',
							}}>
							MATHIAS MALZIEU
						</div>
						{/* Gear decoration */}
						<div style={{ fontSize: '1.6rem', marginTop: '8px', opacity: 0.7 }}>⚙️</div>
						<div style={{ fontSize: '1rem', color: '#8b1a2e', opacity: 0.8 }}>❤️</div>
					</div>

					{/* Page edges illusion */}
					<div
						style={{
							position: 'absolute',
							right: '-3px',
							top: '4px',
							bottom: '4px',
							width: '6px',
							background: 'linear-gradient(90deg,#c8bda8,#e8d8c0)',
							borderRadius: '0 2px 2px 0',
							boxShadow: '1px 0 3px rgba(0,0,0,0.3)',
						}}
					/>
				</div>

				{/* ROSA encima del libro */}
				<div
					className='anim-float'
					style={{
						position: 'absolute',
						top: '-28px',
						left: '50%',
						transform: 'translateX(-20%)',
						fontSize: 'clamp(2.8rem,7vw,4.2rem)',
						filter: 'drop-shadow(0 4px 12px rgba(139,26,46,0.7))',
						zIndex: 10,
					}}>
					🌹
				</div>

				{/* LAZO / RIBBON */}
				<div
					style={{
						position: 'absolute',
						top: '30%',
						left: '-12px',
						right: '-12px',
						height: '22px',
						zIndex: 9,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					{/* Ribbon band */}
					<div
						style={{
							position: 'absolute',
							left: 0,
							right: 0,
							height: '14px',
							background: 'linear-gradient(180deg,#c4425a,#8b1a2e,#c4425a)',
							boxShadow: '0 2px 8px rgba(139,26,46,0.6)',
							animation: 'ribbonWave 3s ease-in-out infinite',
						}}
					/>
					{/* Bow left */}
					<div
						style={{
							position: 'absolute',
							left: '50%',
							transform: 'translateX(-50%)',
							zIndex: 10,
							display: 'flex',
							alignItems: 'center',
							gap: '2px',
						}}>
						<div
							style={{
								width: '22px',
								height: '14px',
								background: '#c4425a',
								borderRadius: '50% 0 0 50%',
								transformOrigin: 'right center',
								transform: 'rotate(-25deg)',
								boxShadow: '0 2px 5px rgba(0,0,0,0.4)',
							}}
						/>
						<div
							style={{
								width: '12px',
								height: '12px',
								background: '#e05070',
								borderRadius: '50%',
								boxShadow: '0 0 6px rgba(196,66,90,0.6)',
							}}
						/>
						<div
							style={{
								width: '22px',
								height: '14px',
								background: '#c4425a',
								borderRadius: '0 50% 50% 0',
								transformOrigin: 'left center',
								transform: 'rotate(25deg)',
								boxShadow: '0 2px 5px rgba(0,0,0,0.4)',
							}}
						/>
					</div>
					{/* Tails */}
					<div
						style={{
							position: 'absolute',
							left: 'calc(50% - 2px)',
							top: '10px',
							width: '18px',
							height: '30px',
							background: 'linear-gradient(180deg,#c4425a,transparent)',
							transform: 'rotate(-15deg)',
							transformOrigin: 'top center',
							zIndex: 8,
						}}
					/>
					<div
						style={{
							position: 'absolute',
							left: 'calc(50% - 18px)',
							top: '10px',
							width: '18px',
							height: '30px',
							background: 'linear-gradient(180deg,#c4425a,transparent)',
							transform: 'rotate(15deg)',
							transformOrigin: 'top center',
							zIndex: 8,
						}}
					/>
				</div>

				{/* Sparkles on hover hint */}
				<div
					style={{
						position: 'absolute',
						top: '-10px',
						right: '-10px',
						fontSize: '1rem',
						animation: 'starPop 2s ease-in-out infinite',
						animationDelay: '0.5s',
					}}>
					✨
				</div>
				<div
					style={{
						position: 'absolute',
						bottom: '10px',
						left: '-8px',
						fontSize: '0.8rem',
						animation: 'starPop 2s ease-in-out infinite',
						animationDelay: '1.2s',
					}}>
					✦
				</div>
			</div>

			{/* Click counter hint */}
			<div className='mt-10 anim-fadeIn' style={{ animationDelay: '1s', animationFillMode: 'both', opacity: 0 }}>
				<div
					style={{
						fontFamily: "'Crimson Text',serif",
						fontStyle: 'italic',
						color: '#6b5b7b',
						fontSize: '0.9rem',
						textAlign: 'center',
					}}>
					Haz clic para desatar el lazo...
				</div>
			</div>
		</div>
	)
}
