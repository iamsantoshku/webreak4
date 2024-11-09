import { useContext } from 'react';
import Context from '../context';
import Order from '../pages/Order';

const OrderWrapper = () => {
    const { userId } = useContext(Context); // Access userId from context

    return <Order userId={userId} />;
};

export default OrderWrapper;
