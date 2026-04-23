/* ── STARS ── */
export function Stars({ n = 50 }) {
	const stars = Array.from({ length: n }, (_, i) => ({
		id: i,
		x: Math.random() * 100,
		y: Math.random() * 100,
		s: Math.random() * 2 + 0.5,
		op: Math.random() * 0.5 + 0.1,
		dur: 2 + Math.random() * 4,
		del: Math.random() * 5,
	}))
	return (
		<div className='absolute inset-0 pointer-events-none overflow-hidden'>
			{stars.map(s => (
				<div
					key={s.id}
					className='absolute rounded-full bg-white'
					style={{
						left: `${s.x}%`,
						top: `${s.y}%`,
						width: s.s + 'px',
						height: s.s + 'px',
						opacity: s.op,
						animation: `heartbeat ${s.dur}s ease-in-out infinite`,
						animationDelay: s.del + 's',
					}}
				/>
			))}
		</div>
	)
}
