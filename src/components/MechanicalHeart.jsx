import { useEffect, useState } from 'react'

export function MechanicalHeart() {
	const [phase, setPhase] = useState(0)

	useEffect(() => {
		const t1 = setTimeout(() => setPhase(1), 300)
		const t2 = setTimeout(() => setPhase(2), 1200)
		const t3 = setTimeout(() => setPhase(3), 2400)
		return () => [t1, t2, t3].forEach(clearTimeout)
	}, [])

	return (
		<div
			style={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				background: 'radial-gradient(ellipse at center, #1a0810 0%, #0d0a0e 70%)',
				padding: '40px 24px',
				textAlign: 'center',
			}}>
			{/* The mechanical heart SVG */}
			{phase >= 1 && (
				<div className='anim-fadeIn' style={{ animationFillMode: 'both', opacity: 0, marginBottom: '40px' }}>
					<div style={{ position: 'relative', width: '220px', height: '220px', margin: '0 auto' }}>
						{/* Outer glow */}
						<div
							style={{
								position: 'absolute',
								inset: '-30px',
								borderRadius: '50%',
								background: 'radial-gradient(ellipse, rgba(139,26,46,0.3) 0%, transparent 70%)',
								animation: 'glowRose 2.5s ease-in-out infinite',
							}}
						/>

						{/* Main heart */}
						<div
							className='anim-heartbeatBig'
							style={{
								position: 'absolute',
								inset: 0,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								fontSize: '120px',
								filter: 'drop-shadow(0 0 25px rgba(139,26,46,0.8))',
								animation:
									'heartExplode 0.8s cubic-bezier(0.34,1.56,0.64,1) forwards, heartbeatBig 2s ease-in-out 0.8s infinite',
							}}>
							❤️
						</div>

						{/* Gear top-left */}
						<div
							style={{
								position: 'absolute',
								top: '-10px',
								left: '-10px',
								fontSize: '2.4rem',
								animation: 'gearSpin 6s linear infinite',
								filter: 'drop-shadow(0 0 6px rgba(201,168,76,0.5))',
							}}>
							⚙️
						</div>
						{/* Gear bottom-right */}
						<div
							style={{
								position: 'absolute',
								bottom: '-10px',
								right: '-10px',
								fontSize: '1.8rem',
								animation: 'gearSpinR 4s linear infinite',
								filter: 'drop-shadow(0 0 6px rgba(201,168,76,0.4))',
							}}>
							⚙️
						</div>
						{/* Gear top-right */}
						<div
							style={{
								position: 'absolute',
								top: '10px',
								right: '-15px',
								fontSize: '1.4rem',
								animation: 'gearSpin 3s linear infinite',
								filter: 'drop-shadow(0 0 5px rgba(201,168,76,0.3))',
							}}>
							⚙️
						</div>

						{/* Clock hands overlay */}
						<div
							style={{
								position: 'absolute',
								inset: 0,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								pointerEvents: 'none',
							}}>
							<div style={{ position: 'relative', width: '60px', height: '60px' }}>
								<div
									style={{
										position: 'absolute',
										bottom: '50%',
										left: 'calc(50% - 1px)',
										width: '2px',
										height: '22px',
										background: 'rgba(201,168,76,0.7)',
										borderRadius: '1px',
										transformOrigin: 'bottom center',
										animation: 'clockHandMin 10s linear infinite',
									}}
								/>
								<div
									style={{
										position: 'absolute',
										bottom: '50%',
										left: 'calc(50% - 1px)',
										width: '1.5px',
										height: '28px',
										background: 'rgba(196,66,90,0.8)',
										borderRadius: '1px',
										transformOrigin: 'bottom center',
										animation: 'clockHandSec 3s linear infinite',
									}}
								/>
								<div
									style={{
										position: 'absolute',
										top: '50%',
										left: '50%',
										transform: 'translate(-50%,-50%)',
										width: '6px',
										height: '6px',
										borderRadius: '50%',
										background: '#c9a84c',
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Text reveal */}
			{phase >= 2 && (
				<div className='anim-fadeUp' style={{ animationFillMode: 'both', opacity: 0, maxWidth: '520px' }}>
					<h2
						style={{
							fontFamily: "'Playfair Display',serif",
							fontSize: 'clamp(1.8rem,5vw,3.2rem)',
							fontWeight: 900,
							lineHeight: 1.15,
							marginBottom: '20px',
						}}>
						<span className='shimmer-text'>La Mecánica</span>
						<br />
						<em style={{ color: '#c4425a' }}>del Corazón</em>
					</h2>
				</div>
			)}

			{phase >= 3 && (
				<div className='anim-fadeUp' style={{ animationFillMode: 'both', opacity: 0, maxWidth: '500px' }}>
					<div style={{ width: '60px', height: '1px', background: 'rgba(139,26,46,0.5)', margin: '0 auto 24px' }} />
					<blockquote
						style={{
							fontFamily: "'Crimson Text',serif",
							fontStyle: 'italic',
							fontSize: 'clamp(1.05rem,2.5vw,1.3rem)',
							color: '#d4c5e2',
							lineHeight: 1.85,
							marginBottom: '12px',
						}}>
						"Un corazón roto y remendado con cuerdas de reloj
						<br />
						late con más fuerza que uno entero —<br />
						porque sabe lo que cuesta cada latido."
					</blockquote>
					<div
						style={{
							color: '#c9a84c',
							fontFamily: "'Special Elite',monospace",
							fontSize: '0.75rem',
							letterSpacing: '0.25em',
							marginBottom: '36px',
						}}>
						— Mathias Malzieu
					</div>

					<div
						style={{
							fontFamily: "'Special Elite',monospace",
							fontSize: '0.7rem',
							color: '#5a4a6a',
							letterSpacing: '0.2em',
						}}>
						07-10-2025
					</div>

					<div
						style={{
							fontFamily: "'Special Elite',monospace",
							fontSize: '0.7rem',
							color: '#5a4a6a',
							letterSpacing: '0.2em',
						}}>
						ANGELLO & AMELIA
					</div>
				</div>
			)}
		</div>
	)
}
