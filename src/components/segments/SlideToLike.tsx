const SlideToLike = () => {
  return (
    <div className="bg-white p-2 rounded-2xl shadow-xs border border-neutral-200">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

const Card = () => {
  return (
    <div className="w-72 h-16 bg-neutral-200 rounded-xl flex items-center px-3 gap-4">
      <div className="min-w-12 min-h-12 border rounded-full"></div>
      <div className="flex justify-between items-center w-full gap-2">
        <div className="w-full">
          <p className="font-semibold">Title</p>
        </div>
        <div>
          <p className="text-xs">03:40</p>
        </div>
      </div>
    </div>
  );
};

export default SlideToLike;
