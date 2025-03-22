import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOtherApi } from '../../redux/OtherApi/OtherApi';
import Cart from '../Cart/Cart';

function OtherApi() {
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.other)
    console.log(data);
    
    useEffect(() => {
        if (!data.length) {
            dispatch(getOtherApi());
        }
    }, [dispatch, data.length])
  return (
    <div>
        {
            data.map((item) => (
                <Cart key={item.id} data={item}/>
            ))
        }
    </div>
  )
}

export default OtherApi
