function Station(details) {
    return (
        <circle cx={details.x} cy={details.y} r="7" className={`fill-white ${details.colour} stroke-4`}/>
    )
}

export default Station