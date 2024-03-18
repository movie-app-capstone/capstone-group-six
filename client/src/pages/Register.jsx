import { Link} from 'react-router-dom';
import Wrapper from "../assets/wrappers/RegisterAndLoginPage.js";
import {FormRow, Logo} from "../components";
const Register = () => {
 return (
 <Wrapper>
     <form className='form'>
         <Logo />
         <h4>Register</h4>
        <FormRow type="text" name={"name"}
                 defaultValue={"Joe"}/>
         <FormRow type="text" name={"lastName"}
                  labeltext='last name'
                  defaultValue={"Smith"}/>
         <FormRow type="text"
                  name={"location"}
                  defaultValue={"earth"}/>
         <FormRow type="email"
                  name={"email"}
                  defaultValue={"Joe@vetslearntocode.org"}/>
         <FormRow type="password"
                  name={"password"}
                  defaultValue={"secret123"}/>
         <button type={'submit'} className='btn btn-block'>
             Submit
         </button>
         <p>
             Already a Reviewer?
             <Link to='/login' className={'member=btn'}>
                 Login
             </Link>
         </p>
     </form>

 </Wrapper>
 );
};

export default Register;