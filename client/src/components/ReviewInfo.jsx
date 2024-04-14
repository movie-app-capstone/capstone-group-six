import Wrapper from '../assets/wrappers/ReviewInfo';
import ReviewInfo from "./ReviewInfo.js";

const JobInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className='review-icon'>{icon}</span>
      <span className='review-text'>{text}</span>
    </Wrapper>
  );
};
export default ReviewInfo;
