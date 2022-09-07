import {
  BsStarFill,
  BsStar /* <= outline */,
  BsStarHalf,
} from "react-icons/bs";

const Rating = (props) => {
  const { rating, numReviews } = props;

  return (
    <div className="rating d-flex justify-content-between">
      <div className="d-flex flex-nowrap me-1">
        <span>
          {rating >= 1 ? (
            <BsStarFill />
          ) : rating >= 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span>
          {rating >= 2 ? (
            <BsStarFill />
          ) : rating >= 1.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span>
          {rating >= 3 ? (
            <BsStarFill />
          ) : rating >= 2.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span>
          {rating >= 4 ? (
            <BsStarFill />
          ) : rating >= 3.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span>
          {rating >= 5 ? (
            <BsStarFill />
          ) : rating >= 4.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
      </div>
      <div
        className="d-flex flex-nowrap align-items-center"
        style={{ minHeight: 30 }}
      >
        <span className="me-1">{numReviews}</span> <span>Reviews</span>
      </div>
    </div>
  );
};

export default Rating;
