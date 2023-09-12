import { PropTypes } from 'prop-types';
import { getStoredCart } from "../../utilities/localstorage";

const Cart = ({buy,handleRemove,handleRemoveAll}) => {
    return (
        <div className="card card-body w-10/12 px-3 border text-left h-full bg-accent rounded-none">
                <h2 className="text-2xl card-title px-2 w-80">Shopping Carts: {getStoredCart().length} items</h2>
                {
                buy.map(bottle=>
                    <div key={bottle?.id} className="flex gap-2 items-end ">
                        <li className="list-inside list-decimal mt-4 w-72 text-sm">{bottle.name}</li>
                        <button onClick={()=>handleRemove(bottle?.id)} className="btn btn-xs normal-case border-none">Remove</button>
                    </div>
                    )
                }
                <button onClick={handleRemoveAll} className='btn mt-10 btn-xs w-32 mx-auto'>Remove All</button> 
         </div>
    );
};

Cart.propTypes ={
    buy: PropTypes.array.isRequired,
    handleRemove: PropTypes.func.isRequired,
    handleRemoveAll: PropTypes.func.isRequired
}

export default Cart;


