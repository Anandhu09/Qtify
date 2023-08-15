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
      default:
        return <></>;
    }
  };
  return getCard(type);
};

export default Card;
