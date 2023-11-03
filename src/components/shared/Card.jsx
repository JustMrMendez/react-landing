/* eslint-disable react/prop-types */
export default function Card({ title, img, text }) {
    return (
        <section style={{height: "fit-content"}}>
            <header>
                <h5>{title}</h5>
            </header>
            <img
                src={img}
                alt=""
                style={{ width: '100%', height: "300px", borderRadius: '.5rem', objectFit: 'cover' }}
            />
            <footer>
                <p>{text}</p>
            </footer>
        </section>
    )
}

Card.defaultProps = {
    title: 'State & Props Magic',
    img: 'https://source.unsplash.com/random/?react',
    text: 'Discover the sorcery of state management. Dance with data down the DOM, pass props like pros, and watch as components come alive.'
}
