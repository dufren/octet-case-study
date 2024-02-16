import { facebook, instagram, twitter, youtube } from '@assets/index';
import { ReactSVG } from 'react-svg';

const Socials = () => {
  return (
    <div className="footer-social">
      <a href="#">
        <ReactSVG src={facebook} />
      </a>
      <a href="#">
        <ReactSVG src={instagram} />
      </a>
      <a href="#">
        <ReactSVG src={twitter} />
      </a>
      <a href="#">
        <ReactSVG src={youtube} />
      </a>
    </div>
  );
};

export default Socials;
