const ReviewsStats = ({ reviews }) => {
  const score =
    reviews
      .map((r) => (6 - r.difficulty) + r.teaching + (6 - r.workload))
      .reduce((x, y) => x + y, 0) /
    (3 * reviews.length);

  return <h1>{Math.round(score * 10) / 10}/5</h1>;
};

export default ReviewsStats;
