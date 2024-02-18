import { facebook, instagram, twitter, youtube } from '@assets/index';
import { ReactSVG } from 'react-svg';

const Socials = () => {
  const socials = [facebook, instagram, twitter, youtube];

  return (
    <div className="footer-social">
      {socials.map((social, index) => (
        <a href="#" key={index}>
          <ReactSVG
            src={social}
            loading={() => <div className="social-skeleton"></div>}
          />
        </a>
      ))}
    </div>
  );
};

export default Socials;
