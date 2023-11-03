import Card from './shared/Card'

/* eslint-disable react/no-unescaped-entities */
function FeaturesSection() {
    return (
        <div
            id="features"
            className="grid"
            style={{
                scrollMarginTop: '80px',
                borderBottom: '1px solid rgba(0, 0, 0, .1)',
            }}
        >
            <Card
                title="State & Props Magic"
                img="https://source.unsplash.com/random/?magic"
                text="Discover the sorcery of state management. Dance with data down the DOM, pass props like pros, and watch as components come alive."
            />
            <Card
                title="Component Alchemy"
                img="https://source.unsplash.com/random/?alchemy"
                text="Unlock UI alchemy. Brew delightful interfaces by combining components, adding a sprinkle of state, and a pinch of props."
            />
            <Card
                title="Hook Spells"
                img="https://source.unsplash.com/random/?spells"
                text="Master the incantations of Hooks. useState, useEffect, and custom hooks await to empower your applications."
            />
        </div>
    )
}

function TestimonialsSection() {
    return (
        <div
            id="testimonials"
            className="grid"
            style={{ scrollMarginTop: '80px' }}
        >
            <Card
                title="Charlie the Coder"
                img="https://source.unsplash.com/random/?wizard"
                text="React has unbound my chains to traditional DOM manipulation!"
            />
            <Card
                title="Vanessa the Visionary"
                img="https://source.unsplash.com/random/?vision"
                text="My components are now re-rendering with such elegance and grace!"
            />
            <Card
                title="Derek the Developer"
                img="https://source.unsplash.com/random/?developer"
                text="The context API was a game-changer! Hooks have me hooked! Routing feels like a joyride!"
            />
        </div>
    )
}

export { FeaturesSection, TestimonialsSection }
