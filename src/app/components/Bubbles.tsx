const Bubbles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="bubble animate-bubble"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Bubbles;