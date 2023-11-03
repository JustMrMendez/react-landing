// import "./navbar.css";

export function Navbar() {
    return (
        <nav
        style={{
            position: 'sticky',
            top: 0,
            left: 0,
            background: 'rgba(255, 255, 255, 0.1)',
            paddingInline: '1rem',
            backdropFilter: 'blur(10px)',
            borderRadius: '0 0 1rem 1rem',
            zIndex: 1,
        }}
        >
            <ul>
                <li>
                    <a href="#hero" >
                        <strong>MrOpinions</strong>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#features">Features</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#" role="button">
                        Buy Now
                    </a>
                </li>
            </ul>
        </nav>
    )
}
