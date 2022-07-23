const RateLimit = ({ rateLimit }) => (
  <div>
    {rateLimit && (
      <small>
        <span className="num">LIMIT {`${rateLimit.remaining} / ${rateLimit.limit}`}</span>
      </small>
    )}
  </div>
);

export default RateLimit;