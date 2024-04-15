import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { sendEmailVerification, updateProfile } from "firebase/auth";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const naviGate = useNavigate();
    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            setLoginError("Password should be at least 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setLoginError("Password should have one uppercase character");
            return;
        }
        else if (!/[0-9]/.test(password)) {
            setLoginError("Password should have one number init.");
            return;
        }
        else if (!/[@,!,#,%,$,^,&,*,(,)]/.test(password)) {
            setLoginError("Password should have at least one special character init.");
            return;
        }
        console.log(name, email, password);
        createUser(email, password)
            .then(res => {
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: photo,
                })
                /// send verification email
                sendEmailVerification(res.user)
                    .then(() => {
                        alert("send you a verification email!!");
                    });
                e.target.reset();
                naviGate('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <div className="hero rounded-2xl md:h-[800px] bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <p className="text-xs md:text-base">Already in family? <Link to="/signin" className="font-bold">SignIn Now!</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;