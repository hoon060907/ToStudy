import { useState } from "react";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, update } from "firebase/database";
import './Login.scss';

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [tell, setTell] = useState('');

    const onChangeEmail = e => {
        setEmail(e.target.value);
    };

    const onChangePw = e => {
        setPassword(e.target.value);
    };
    const onChangeNm = e => {
        setName(e.target.value);
    };
    const onChangeBth = e => {
        setBirth(e.target.value);
    };
    const onChangeT = e =>{
        setTell(e.target.value);
    }

    const register = async () => {
        try {
            const CreatedUser = await createUserWithEmailAndPassword(auth, email, password);
            const useremail = CreatedUser.user.email;
            const usersRef = ref(db, 'users');
            const newUser = {
                [CreatedUser.user.uid]: {
                    useremail: useremail,
                    todos: ["empty"],
                    diaries: ["empty"],
                    name,
                    birth,
                    tell
                }
            };
            update(usersRef, newUser);
            navigate('/');
            console.log(CreatedUser);   
        } catch (e) {
            switch (e.code) {
                case 'auth/weak-password':
                    alert('비밀번호는 6자리 이상이어야 합니다');
                    break;
                case 'auth/invalid-email':
                    alert('잘못된 이메일 주소입니다');
                    break;
                case 'auth/email-already-in-use':
                    alert('이미 가입되어 있는 계정입니다');
                    break;
                default: alert("오류가 발생하였습니다.");
            }
        }
    }

    return (
        <div className="loginbody">
            <div className="box">
                <h1 className="title">SIGN UP</h1>
                <div className="innerbox">
                    <p className="text">email</p>
                    <input className="input" type="text" onChange={onChangeEmail} />
                </div>
                <div className="innerbox">
                    <p className="text">password</p>
                    <input className="input" type="password" onChange={onChangePw} />
                </div>
                <div className="innerbox">
                    <p className="text">name</p>
                    <input className="input" type="text" onChange={onChangeNm} />
                </div>
                <div className="innerbox">
                    <p className="text">birth</p>
                    <input className="input" type="text" onChange={onChangeBth} />
                </div>
                <div className="innerbox">
                    <p className="text">Tell</p>
                    <input className="input" type="text" onChange={onChangeT} />
                </div>
                <button onClick={register} className="btn">Sign Up</button>
            </div>
        </div>
    );
};

export default Signup;