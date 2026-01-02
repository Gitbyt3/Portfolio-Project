function Line({ route, colour }) {
    return (
        <path d={route} fill="none" className={`${colour} stroke-5`}/>
    )
}

export default Line