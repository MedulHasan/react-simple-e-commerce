import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../context/useAuth';
import './Shipping.css';
const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const { user } = useAuth()
    return (
        <form className="shippng-form" onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={user.displayName} {...register("name")} />
            <input defaultValue={user.email} {...register("email", { required: true })} />
            <input placeholder="Address" {...register("address")} />
            <input placeholder="City" {...register("city")} />
            <input placeholder="Phone No." {...register("phone")} />
            {errors.email && <span className="error">This field is required</span>}
            <input type="submit" />
        </form>
    );
};

export default Shipping;