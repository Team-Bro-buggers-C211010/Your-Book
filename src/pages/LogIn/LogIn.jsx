import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { sendEmailVerification, updateProfile } from "firebase/auth";

const LogIn = () => {
    const naviGate = useNavigate();
    const { user, signInUser, signInWithGoogle } = useContext(AuthContext);
    console.log(user);
    const handleSignIn = e => {
        e.preventDefault();
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
        signInUser(email, password)
            .then(res => {
                console.log(res.user);
                const user = res.user;
                if (user.emailVerified) {
                    setSuccess("User Created Successfully.");
                    setUser(user);
                }
                else {
                    alert("You are not verified your email yet!");
                    sendEmailVerification(user)
                        .then(() => {
                            alert("send you a verification email!!");
                    });
                }
                e.target.reset();
                naviGate('/');
            })
            .catch(err => {
                console.error(err);
            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                console.log(res.user);
                if (res.user.emailVerified) {
                    setSuccess("User Created Successfully.");
                    setUser(res.user);
                }
                else {
                    alert("You are not verified your email yet!");
                    sendEmailVerification(res.user)
                        .then(() => {
                            alert("send you a verification email!!");
                    });
                }
                e.target.reset();
                naviGate('/');
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div>
            <div className="hero rounded-2xl md:h-[800px] bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignIn now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
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
                                <p className="text-xs md:text-base">New in AuthContext? <Link to="/signup" className="font-bold">SignUp Now!</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign In</button>
                            </div>
                            <p onClick={handleGoogleSignIn} className="flex justify-center"><button className="text-white btn btn-success">Google</button></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;