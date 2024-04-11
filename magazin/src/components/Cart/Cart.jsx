
function Card({img, h3}) {
    return (
        <div>
            <img src={img} className="w-[180px]" alt="" />
            <h3 className="text-center text-gray-500 mt-[30px] pb-[15px]">{h3}</h3>
        </div>
    )
}
export default Card