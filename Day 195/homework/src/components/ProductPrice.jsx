function ProductPrice({originalPrice, discountPercent}){
    const finalPrice = originalPrice - (originalPrice * discountPercent) / 100
    return (
        <div className="card">
            <p className="discount">{discountPercent}</p>
            <h3 className="original">{finalPrice}</h3>
        </div>
    )
}

export {ProductPrice}