const SkeletonCard = () => (
  <div className="bg-gray-300 animate-pulse h-50 rounded-lg mb-3" />
);

const TaskColumnSkeleton = () => {
  return (
    <div>
      {[1, 2, 3].map((i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export default TaskColumnSkeleton;
