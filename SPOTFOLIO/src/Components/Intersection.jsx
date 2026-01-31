function Intersection({ x, y, onClick }) {
    return (
        <circle cx={x} cy={y} r="20" className="fill-white stroke-black stroke-12" onClick={onClick} />
    )
}

export default Intersection