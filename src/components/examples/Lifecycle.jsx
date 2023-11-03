import { useState, useEffect } from 'react'

export function Lifecycle() {
    const [count, setCount] = useState(0)

    // Mount
    useEffect(() => {
        console.log('Component did mount')
    }, [])

    // Unmount
    useEffect(() => {
        return () => alert('Component will unmount')
    }, [])

    // Update
    useEffect(() => {
        console.log('Component did update')
    }, [count])

    return (
        <div className="grid" style={{ textAlign: 'center' }}>
            <button onClick={() => setCount(count + 1)}>
                Increase Counter
            </button>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count - 1)}>
                Decrease Counter
            </button>
        </div>
    )
}
