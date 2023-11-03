import { useState } from 'react'
import { Lifecycle } from './components/examples/Lifecycle'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero'
import { FeaturesSection, TestimonialsSection } from './components/Sections'

function App() {
    const [mounted, setMounted] = useState(false)

    return (
        <div
		style={{
			background: 'linear-gradient(45deg, rgb(255, 255, 255) 30%, hsl(205, 16%, 77%) 90%)',
		}}
		>
			<div
				className="container"
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '5rem',
				}}
			>
				<Navbar />
				<Hero />
				<FeaturesSection />
				<TestimonialsSection />
				<footer style={{
							height: '600px',
						}}>
					<button onClick={() => setMounted(!mounted)}>
						Mount / Unmount
					</button>
					{mounted ? <Lifecycle /> : null}
				</footer>
			</div>
		</div>
    )
}

export default App
