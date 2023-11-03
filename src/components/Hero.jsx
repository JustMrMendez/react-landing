/* eslint-disable react/no-unescaped-entities */
function Hero() {
    return (
        <div id="hero" className="grid"
        style={{
            scrollMarginTop: '100px',
        }}
        >
            <div
                className=""
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                <h1 className="">Welcome to this MasterClass </h1>
                <p className="">
                    Dive into React's superpowers with our masterclass—where our
                    Hero greets you first, flexes its responsive muscles, and
                    teases with a picture that says, "There's more if you
                    click!" Join the adventure.
                </p>
                <button className="" style={{ margin: 0 }}>
                    Learn More
                </button>
            </div>
            <div style={{ height: '450px' }}>
                <img
                    className=""
                    style={{borderRadius: '.5rem', height: '100%', width: '100%', objectFit: 'cover'}}
                    src="https://source.unsplash.com/random/?code,react"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Hero
