function Line({ route, colour }) {
    return (
        <path d={route} fill="none" stroke={colour} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    )
}

export default Line