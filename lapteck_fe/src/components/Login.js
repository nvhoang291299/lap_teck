import { Field, Form, Formik } from 'formik';
import '../css/login.css';
import { useState } from 'react';
import { postLogin } from '../service/ServiceLogin';
import {useNavigate} from "react-router-dom";

function Login() {
    const [failedAccount, setFailedAccount] = useState();
    
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{
                email: "",
                password: ""
            }}

            onSubmit={(values) => {
                postLogin(values)
                    .then((e) => {
                        sessionStorage.setItem('TOKEN', e.accessToken);
                        sessionStorage.setItem('EMAIL', e.email);
                        sessionStorage.setItem('ROLES', e.roles[0].authority)
                        sessionStorage.setItem('status', e.statusAuth)
                        if (sessionStorage.getItem('ROLES')  == 'ROLE_ADMIN') {
                            navigate('/admin')
                        } else {
                            navigate('/')
                        }
                        // window.location.href = '/';
                    })
                    .catch(() => {
                            setFailedAccount("Tên tài khoản hoặc mật khẩu không đúng")
                        }
                    );
            }}
        >
            {
                <Form>
                    <div className="form-floating mb-3">
                        <Field type="email" className="form-control" id="floatingInput" placeholder="Nhập email" name="email"/>
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <Field type="password" className="form-control" id="floatingPassword" placeholder="Nhập mật khẩu" name="password"/>
                        <label htmlFor="floatingPassword">Mật khẩu</label>
                    </div>

                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                        <label className="form-check-label" htmlFor="rememberPasswordCheck">
                            Ghi nhớ đăng nhập
                        </label>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-red btn-login text-uppercase fw-bold" type="submit">Đăng nhập</button>
                    </div>
                    <hr className="my-4" />
                    <div className="d-grid mb-2">
                        <button className="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                            <i className="fa-brands fa-facebook me-2"></i> Đăng nhập với facebook
                        </button>
                    </div>
                </Form>
            }
        </Formik>

    )
}

export default Login;