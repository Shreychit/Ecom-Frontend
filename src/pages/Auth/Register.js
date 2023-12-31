import React, { useState } from 'react'
import Layout from '../../components/layout/layout';
import toast from 'react-hot-toast';


const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    // form function 

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, password, address, phone)
        toast.success('Successfully Registered');
    }

    return (
        <Layout title='Register-Ecommerce App'>
            <div className='register fs-4 fw-normal'>
                <h1>Register Page</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 fs-4 fw-normal">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            id="exampleInputName"
                            placeholder="Name"
                            required />

                    </div>
                    <div className="mb-3 fs-4 fw-normal">
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder='Email'
                            required />
                    </div>
                    <div className="mb-3 fs-4 fw-normal">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder='Enter your Password'
                            required />
                    </div>
                    <div className="mb-3 fs-4 fw-normal">
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control"
                            id="exampleInputPhone"
                            placeholder='Enter Your Phone'
                            required />
                    </div>
                    <div className="mb-3 fs-4 fw-normal">
                        <input type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control"
                            id="exampleInputAddress"
                            placeholder='Enter your Address'
                            required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>


            </div>
        </Layout>
    )
}

export default Register;