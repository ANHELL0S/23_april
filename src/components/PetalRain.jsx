export function PetalRain({ count = 16 }) {
	const petals = Array.from({ length: count }, (_, i) => ({
		id: i,
		left: Math.random() * 100,
		delay: Math.random() * 10,
		dur: 7 + Math.random() * 8,
		size: 10 + Math.random() * 12,
		emoji: ['🌹', '🌸', '🍂', '❤️', '🌺'][Math.floor(Math.random() * 5)],
	}))

	return (
		<>
			{petals.map(p => (
				<span
					key={p.id}
					className='petal'
					style={{
						left: `${p.left}%`,
						fontSize: `${p.size}px`,
						animationDuration: `${p.dur}s`,
						animationDelay: `${p.delay}s`,
					}}>
					{p.emoji}
				</span>
			))}
		</>
	)
}
