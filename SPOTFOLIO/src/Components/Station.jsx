function Station({ x, y, colour, onClick }) {
    return (
        <circle 
            cx={x} cy={y} r="7"
            className={`fill-white ${colour} stroke-4`}
            onClick={onClick}
        />
    )
}

export default Station