function Station({ x, y, colour, onClick, isSelected, isFound }) {
    return (
        <circle 
            cx={x}
            cy={y}
            r="10"
            fill={ isFound ? colour : "white" }
            stroke={colour}
            strokeWidth="4"
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            className={`
                cursor-pointer transition-all duration-300 ease-out hover:scale-[1.8]
                ${isSelected ? "scale-[1.8]" : "scale-100"}
            `}
            onClick={onClick}
        />
    )
}

export default Station