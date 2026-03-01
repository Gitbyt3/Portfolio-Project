function Intersection({ x, y, onClick }) {
    return (
        <circle
            cx={x}
            cy={y}
            r="20"
            fill="white"
            stroke="black"
            strokeWidth="15"
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            className={`cursor-pointer transition-all duration-300 ease-out hover:scale-[1.2]`}
            onClick={onClick} />
    )
}

export default Intersection