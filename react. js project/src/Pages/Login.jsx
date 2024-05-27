import { useFormik } from "formik";
import axios from "axios";
import '../Assets/css/Login.css'
import { useNavigate } from "react-router-dom";
import { ENDPOINT } from "../config";

const Login = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: (values) => {
            let errors = {}
            if (!values.email) {
                errors.email = "Please enter email"
            }
            if (!values.password) {
                errors.password = "Please enter password"
            }
            return errors
        },
        onSubmit: (values) => {
            try {
                axios.post(`${ENDPOINT}/auth/login`, {
                    username: values.email,
                    password: values.password
                }).then(res => {
                    if (res?.status == 200 && res?.data?.token) {
                        localStorage.setItem('token', res?.data?.token)
                        localStorage.setItem('userData', JSON.stringify(res?.data))
                        navigate('/')
                    }
                }).catch(error => {
                    console.log(error);
                })
            } catch (error) {
                console.log(error);
            }
        }
    })

    return (
        <div className="bodyDiv"><br />
            <div className="mainDiv"><br />
                <h1 className="h1">LOGIN </h1>
                <a style={{textDecoration: 'none', color: 'orange'}} href='/'>/Home</a>
                <br /><br />
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            placeholder="Enter Email"
                            className={formik.errors.email ? 'isError' : ''}
                            style={{width: '500px'}}
                        />
                        {formik.errors.email && <p className="error-txt">{formik.errors.email}</p>}
                    </div>
                    <br />
                    <div>
                        <input
                            type="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            placeholder="Enter password"
                            className={formik.errors.email ? 'isError' : ''}
                            style={{width: '500px'}}
                        />
                        {formik.errors.password && <p className="error-txt">{formik.errors.password}</p>}
                    </div>
                    <br /><br />
                    <div>
                        <button className="btn">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
