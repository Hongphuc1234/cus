import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import './serviceItem.css';

export const ServiceItem = ({ id, title, imgUrl, onClick }) => {
  return (
    <div className="service-wrapper" onClick={onClick}>
      <style>
        {`
            .service-wrapper {
              cursor: pointer;
              overflow: hidden;
            }
            
            .service-wrapper:hover .service-image {
              transform: scale(1.1);
            }
            
            .service-wrapper:hover .service-title {
              background-color: #000;
              color: rgb(246, 109, 109);
            }
            
            .service-title {
              background-color: rgb(246, 109, 109);
              color: #00;
              padding: 20px;
              max-height: 80px;
              text-align: center;
              font-size: 16px;
              position: relative;
              transition: all 0.6s;
              text-transform: uppercase;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            
            .service-image {
              aspect-ratio: 4 / 3;
              width: 100%;
              object-fit: cover;
              display: block;
              transition: all 0.6s;
              transform: scale(1);
            }
            @media screen and (max-width: 769px) {
              .service-image {
                width: 100%
              }
            }
          `}
      </style>
      {/* <Link to={`/service/${id}/details`}>
      </Link> */}
        <img className="service-image" src={imgUrl} alt="service" />
        <h3 className="service-title">{title}</h3>
    </div>
  );
};


ServiceItem.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  onClick: PropTypes.func
};
