import { PropTypes } from 'prop-types';

const Bottle = ({bottle,handleBuy}) => {
    const{img,name,price,seller} = bottle;
    return (
        <div className="card card-body rounded-3xl mb-10 ml-10 bg-slate-300 shadow-lg text-left">
            <figure>
                <img src={img} alt="" className="h-52 rounded-3xl"/>
            </figure>
            <h1 className="card-title">{name}</h1>
            <p>Price:{price}$</p>
            <h5>Brand:{seller}</h5>
            <button onClick={()=>handleBuy(bottle)} className="btn btn-accent font-sans w-28">Buy Now</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle:PropTypes.object.isRequired,
    handleBuy: PropTypes.func.isRequired
}

export default Bottle;