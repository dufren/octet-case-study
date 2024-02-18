const CardSkeleton = () => {
  return (
    <div className="skeleton">
      <div className="image"></div>
      <div className="info">
        <p className="year"></p>
        <h2 className="name"></h2>
        <div className="score"></div>
        <p className="category"></p>
      </div>
    </div>
  );
};

export default CardSkeleton;
