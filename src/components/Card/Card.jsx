import "./Card.css";
import { Tooltip, Chip } from "@mui/material";
const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, slug, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <div className="card_wrapper">
              <div className="card">
                <img src={image} alt="album" />
                <div className="banner">
                  <Chip
                    label={`${follows} Follows`}
                    size="small"
                    className="chip"
                  />
                </div>
              </div>
              <div className="titleWrapper">
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }
      case "song": {
        const { image, likes, title } = data;
        return (
          <div className="card_wrapper">
            <div className="card">
              <img src={image} alt="song" loading="lazy" />
              <div className="banner">
                <div className="pill">
                  <p>{likes} Likes </p>
                </div>
              </div>
            </div>
            <div className="titleWrapper">
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
};

export default Card;
