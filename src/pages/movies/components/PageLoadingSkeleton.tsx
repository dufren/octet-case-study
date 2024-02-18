import CardSkeleton from './card/skeleton/CardSkeleton';

const PageLoadingSkeleton = () => {
  const arr = new Array(8).fill({}).map(() => ({}));
  return (
    <div className="content">
      {arr.map((_, index) => (
        <div key={index} className="card-container">
          <CardSkeleton key={index} />
        </div>
      ))}
    </div>
  );
};

export default PageLoadingSkeleton;
