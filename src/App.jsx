import { useState, useRef } from 'react'
import { ClosedBook } from './components/ClosedBook'
import { MechanicalHeart } from './components/MechanicalHeart'
import { OpenBook } from './components/OpenBook'
import { PetalRain } from './components/PetalRain'
import { Stars } from './components/Stars'

export default function App() {
	const [stage, setStage] = useState('closed')
	const [clickCount, setClickCount] = useState(0)
	const [shakeCount, setShakeCount] = useState(0)
	const shakeTimer = useRef(null)

	const handleBookClick = () => {
		const next = clickCount + 1
		setClickCount(next)
		setShakeCount(s => s + 1)
		clearTimeout(shakeTimer.current)
		shakeTimer.current = setTimeout(() => setShakeCount(0), 600)

		if (next >= 2) setTimeout(() => setStage('open'), 300)
	}

	return (
		<div style={{ background: '#0d0a0e', minHeight: '100vh' }}>
			{stage !== 'welcome' && <PetalRain count={12} />}

			{/* Sticky header (not on welcome) */}
			{stage !== 'welcome' && (
				<header
					style={{
						position: 'sticky',
						top: 0,
						zIndex: 50,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						padding: '10px 20px',
						background: 'rgba(13,10,14,0.93)',
						backdropFilter: 'blur(12px)',
						borderBottom: '1px solid rgba(139,26,46,0.2)',
					}}>
					<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<span style={{ fontSize: '1.1rem' }}>🌹</span>
						<span
							style={{
								fontFamily: "'Playfair Display',serif",
								fontSize: '0.95rem',
								color: '#f5edd8',
								fontStyle: 'italic',
							}}>
							La Mecánica del Corazón
						</span>
					</div>
					<div
						style={{
							fontFamily: "'Special Elite',monospace",
							fontSize: '0.65rem',
							color: '#c9a84c',
							letterSpacing: '0.25em',
						}}>
						23 ABR
					</div>
				</header>
			)}

			{stage === 'closed' && (
				<div
					style={{
						background: 'radial-gradient(ellipse at center, #1a0d20 0%, #0d0a0e 70%)',
						minHeight: 'calc(100vh - 52px)',
						position: 'relative',
					}}>
					<Stars n={40} />
					<ClosedBook onClick={handleBookClick} shakeCount={shakeCount} />
					{/* Click hint */}
					{clickCount === 1 && (
						<div style={{ textAlign: 'center', marginTop: '-20px', paddingBottom: '20px' }}>
							<p
								style={{
									fontFamily: "'Crimson Text',serif",
									fontStyle: 'italic',
									color: '#c4425a',
									fontSize: '1rem',
									animation: 'fadeIn 0.4s ease forwards',
								}}>
								✦ Una vez más... ✦
							</p>
						</div>
					)}
				</div>
			)}

			{stage === 'open' && (
				<div
					style={{
						background: 'radial-gradient(ellipse at center, #1a0810 0%, #0d0a0e 70%)',
						minHeight: 'calc(100vh - 52px)',
						position: 'relative',
					}}>
					<Stars n={30} />
					<OpenBook onDone={() => setStage('heart')} />
				</div>
			)}

			{stage === 'heart' && <MechanicalHeart />}
		</div>
	)
}
