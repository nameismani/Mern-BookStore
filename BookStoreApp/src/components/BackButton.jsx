import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit flex justify-center gap-x-2'
      >
        <BsArrowLeft className='text-md my-auto' /><span>Back</span>
      </Link>
    </div>
  );
};

export default BackButton;