import { Link} from 'react-router-dom';
import Wrapper from "../assets/wrappers/RegisterAndLoginPage.js";
import {FormRow, Logo} from "../components";
const Login = () => {
    return (
       <Wrapper>
           <form className={'form'}>
               <Logo />
               <h4> login</h4>
               <FormRow type={'email'} name={'email'}
                        defaultValue={'joe@vetslearntocode.org'} />
               <FormRow type={'password'} name={'password'}
                        defaultValue={'secret123'} />
               <button type ='submit' className={'btn btn-block'} >
                   Sneak Peak
               </button>
               Not a Reviewer?
               <Link to='/register' className={'member=btn'}>
                   Register
               </Link>

           </form>
       </Wrapper>
    );
};

export default Login;