import { useEffect, useState } from 'react'
import { PAGES } from '../const/page'

/* ── OPEN BOOK ── */
export function OpenBook({ onDone }) {
	const [pageIndex, setPageIndex] = useState(-1) // -1 = opening animation
	const [flipping, setFlipping] = useState(false)
	const [flipDir, setFlipDir] = useState('open')
	const [closing, setClosing] = useState(false)

	useEffect(() => {
		// Book opens with a small delay
		const t = setTimeout(() => setPageIndex(0), 700)
		return () => clearTimeout(t)
	}, [])

	const nextPage = () => {
		if (flipping || closing) return
		if (pageIndex >= PAGES.length - 1) {
			// Close the book
			setClosing(true)
			setTimeout(() => onDone(), 1400)
			return
		}
		setFlipping(true)
		setTimeout(() => {
			setPageIndex(i => i + 1)
			setFlipping(false)
		}, 500)
	}

	const cur = pageIndex >= 0 && pageIndex < PAGES.length ? PAGES[pageIndex] : null

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: '80vh',
				padding: '20px',
			}}>
			{/* Chapter hint */}
			{cur && (
				<div className='anim-fadeUp mb-8' style={{ animationFillMode: 'both', opacity: 0, animationDelay: '0.2s' }}>
					<div
						style={{
							fontFamily: "'Special Elite',monospace",
							fontSize: '0.7rem',
							color: '#c9a84c',
							letterSpacing: '0.35em',
							textAlign: 'center',
							textTransform: 'uppercase',
						}}>
						✦ Hoja {pageIndex + 1} de {PAGES.length} ✦
					</div>
				</div>
			)}

			{/* Book spread */}
			<div className='perspective-book' style={{ width: '100%', maxWidth: '700px' }}>
				<div
					style={{
						position: 'relative',
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						minHeight: 'clamp(280px,45vw,420px)',
						opacity: closing ? 0 : 1,
						transform: closing ? 'scaleX(0.05) scaleY(0.9)' : 'scaleX(1)',
						transition: closing ? 'all 0.9s cubic-bezier(0.4,0,0.2,1)' : 'none',
						transformOrigin: 'center center',
					}}>
					{/* Left cover/page */}
					<div
						style={{
							background: 'linear-gradient(145deg,#2a0810 0%,#1a0810 100%)',
							borderRadius: '8px 0 0 8px',
							border: '1px solid rgba(201,168,76,0.12)',
							borderRight: '2px solid rgba(100,30,50,0.5)',
							boxShadow: 'inset -12px 0 30px rgba(0,0,0,0.5),-4px 4px 20px rgba(0,0,0,0.6)',
							padding: 'clamp(20px,4vw,40px)',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							position: 'relative',
							overflow: 'hidden',
						}}>
						{/* lined paper texture */}
						<div
							style={{
								position: 'absolute',
								inset: 0,
								opacity: 0.04,
								backgroundImage:
									'repeating-linear-gradient(0deg,transparent,transparent 27px,rgba(245,237,216,1) 27px,rgba(245,237,216,1) 28px)',
							}}
						/>

						{cur ? (
							<div
								key={pageIndex}
								className='anim-fadeUp'
								style={{
									animationFillMode: 'both',
									opacity: 0,
									animationDelay: '0.1s',
									textAlign: 'center',
									position: 'relative',
									zIndex: 1,
								}}>
								<div
									style={{ fontSize: '2.8rem', marginBottom: '18px', filter: `drop-shadow(0 0 12px ${cur.accent}80)` }}>
									{cur.emoji}
								</div>
								<div
									style={{
										fontFamily: "'Playfair Display',serif",
										fontSize: 'clamp(0.8rem,1.8vw,1rem)',
										color: '#8a7a9b',
										letterSpacing: '0.15em',
										marginBottom: '16px',
										textTransform: 'uppercase',
										fontSize: '0.65rem',
									}}>
									La Mecánica del Corazón
								</div>
								<div style={{ width: '40px', height: '1px', background: `${cur.accent}60`, margin: '0 auto 16px' }} />
								<p
									style={{
										fontFamily: "'Crimson Text',serif",
										fontSize: 'clamp(1rem,2.2vw,1.2rem)',
										color: '#d4c5e2',
										lineHeight: 1.85,
										fontStyle: 'italic',
										whiteSpace: 'pre-line',
									}}>
									{cur.quote}
								</p>
								<div
									style={{
										marginTop: '18px',
										color: cur.accent,
										fontFamily: "'Special Elite',monospace",
										fontSize: '0.7rem',
										letterSpacing: '0.15em',
									}}>
									{cur.from}
								</div>
							</div>
						) : (
							<div
								style={{
									color: '#3a2a4a',
									fontFamily: "'Special Elite',monospace",
									fontSize: '0.8rem',
									letterSpacing: '0.2em',
								}}>
								abriendo...
							</div>
						)}

						{/* page number */}
						<div
							style={{
								position: 'absolute',
								bottom: '12px',
								left: 0,
								right: 0,
								textAlign: 'center',
								color: '#4a3a5a',
								fontSize: '0.65rem',
								fontFamily: "'Special Elite',monospace",
							}}>
							{pageIndex >= 0 ? pageIndex * 2 + 1 : ''}
						</div>
					</div>

					{/* Right decorative page */}
					<div
						style={{
							background: 'linear-gradient(225deg,#1a0d20 0%,#150d18 100%)',
							borderRadius: '0 8px 8px 0',
							border: '1px solid rgba(201,168,76,0.1)',
							borderLeft: 'none',
							boxShadow: 'inset 12px 0 30px rgba(0,0,0,0.5),4px 4px 20px rgba(0,0,0,0.6)',
							padding: 'clamp(20px,4vw,40px)',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							position: 'relative',
							overflow: 'hidden',
						}}>
						<div
							style={{
								position: 'absolute',
								inset: 0,
								opacity: 0.04,
								backgroundImage:
									'repeating-linear-gradient(0deg,transparent,transparent 27px,rgba(245,237,216,1) 27px,rgba(245,237,216,1) 28px)',
							}}
						/>

						<div
							className='anim-fadeUp'
							style={{
								animationFillMode: 'both',
								opacity: 0,
								animationDelay: '0.3s',
								textAlign: 'center',
								position: 'relative',
								zIndex: 1,
							}}>
							{/* Decorative clock */}
							<div style={{ position: 'relative', width: '90px', height: '90px', margin: '0 auto 20px' }}>
								<div
									style={{
										position: 'absolute',
										inset: 0,
										borderRadius: '50%',
										border: '2px solid rgba(201,168,76,0.25)',
										boxShadow: '0 0 20px rgba(139,26,46,0.2)',
									}}
								/>
								{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => (
									<div
										key={i}
										style={{
											position: 'absolute',
											width: '2px',
											height: '7px',
											background: 'rgba(201,168,76,0.4)',
											top: '4px',
											left: 'calc(50% - 1px)',
											transformOrigin: '1px 41px',
											transform: `rotate(${i * 30}deg)`,
										}}
									/>
								))}
								{/* hour hand */}
								<div
									style={{
										position: 'absolute',
										bottom: '50%',
										left: 'calc(50% - 1px)',
										width: '2px',
										height: '28px',
										background: '#c9a84c',
										borderRadius: '2px',
										transformOrigin: 'bottom center',
										transform: 'rotate(-30deg)',
										animation: 'clockHandMin 60s linear infinite',
									}}
								/>
								{/* min hand */}
								<div
									style={{
										position: 'absolute',
										bottom: '50%',
										left: 'calc(50% - 1px)',
										width: '1.5px',
										height: '36px',
										background: '#c4425a',
										borderRadius: '2px',
										transformOrigin: 'bottom center',
										animation: 'clockHandSec 8s linear infinite',
									}}
								/>
								<div
									style={{
										position: 'absolute',
										top: '50%',
										left: '50%',
										transform: 'translate(-50%,-50%)',
										width: '8px',
										height: '8px',
										borderRadius: '50%',
										background: '#8b1a2e',
										boxShadow: '0 0 8px rgba(139,26,46,0.8)',
									}}
								/>
							</div>

							<div style={{ color: 'rgba(201,168,76,0.6)', fontSize: '1.8rem', marginBottom: '12px' }}>
								{cur?.isLast ? '🌹' : '⚙️'}
							</div>
							<p
								style={{
									fontFamily: "'Crimson Text',serif",
									fontStyle: 'italic',
									color: '#6b5b7b',
									fontSize: 'clamp(0.8rem,1.6vw,0.92rem)',
									lineHeight: 1.7,
									maxWidth: '160px',
								}}>
								{cur?.isLast
									? '"El amor que no puede expresarse late de todas formas."'
									: '"El tiempo late distinto cuando el corazón es de madera."'}
							</p>
						</div>

						<div
							style={{
								position: 'absolute',
								bottom: '12px',
								left: 0,
								right: 0,
								textAlign: 'center',
								color: '#4a3a5a',
								fontSize: '0.65rem',
								fontFamily: "'Special Elite',monospace",
							}}>
							{pageIndex >= 0 ? pageIndex * 2 + 2 : ''}
						</div>
					</div>

					{/* Spine center shadow */}
					<div
						style={{
							position: 'absolute',
							inset: '0',
							left: 'calc(50% - 10px)',
							width: '20px',
							background: 'linear-gradient(90deg,rgba(0,0,0,0.5),rgba(80,10,25,0.2),rgba(0,0,0,0.5))',
							pointerEvents: 'none',
							zIndex: 10,
						}}
					/>
				</div>
			</div>

			{/* Navigation */}
			{cur && !closing && (
				<div
					className='mt-8 flex flex-col items-center gap-4 anim-fadeUp'
					style={{ animationFillMode: 'both', opacity: 0, animationDelay: '0.5s' }}>
					<button
						onClick={nextPage}
						style={{
							padding: '12px 40px',
							background: cur.isLast
								? 'linear-gradient(135deg,#5a0f1e,#8b1a2e)'
								: 'linear-gradient(135deg,#2a0810,#5a1020)',
							border: `1px solid ${cur.isLast ? '#c4425a' : '#8b1a2e'}`,
							color: '#f5edd8',
							fontFamily: "'Playfair Display',serif",
							fontSize: '0.95rem',
							letterSpacing: '0.08em',
							cursor: flipping ? 'wait' : 'pointer',
							borderRadius: '2px',
							transition: 'all 0.3s',
							boxShadow: cur.isLast ? '0 0 20px rgba(139,26,46,0.4)' : 'none',
						}}
						onMouseEnter={e =>
							(e.currentTarget.style.background = `linear-gradient(135deg,${cur.isLast ? '#8b1a2e,#c4425a' : '#5a1020,#8b1a2e'})`)
						}
						onMouseLeave={e =>
							(e.currentTarget.style.background = `linear-gradient(135deg,${cur.isLast ? '#5a0f1e,#8b1a2e' : '#2a0810,#5a1020'})`)
						}>
						{cur.isLast ? 'Cerrar el libro' : 'Pasar la hoja'}
					</button>
					{/* dots */}
					<div style={{ display: 'flex', gap: '8px' }}>
						{PAGES.map((_, i) => (
							<div
								key={i}
								style={{
									width: i === pageIndex ? '24px' : '8px',
									height: '8px',
									borderRadius: '4px',
									background: i === pageIndex ? '#8b1a2e' : 'rgba(139,26,46,0.25)',
									transition: 'all 0.3s',
								}}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
