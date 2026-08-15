function DogOrCat(){
    let res
    const fiftyFifty = Math.random() > 0.5
    if(fiftyFifty){
        res = <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0IQhVr9DDJCq61QX28zCoiqDrvezBh5ylw&s" className="img"/>
    }
    else{
        res = <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqiISDJBvoYZaVYR_h0dsHzeAgTiRG_EEXQQ&s" className="img"/>
    }
    return res
}

export default DogOrCat