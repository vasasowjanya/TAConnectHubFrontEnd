const SingleFeedback = () => {
  return (
    <div>
      <h1 className="text-lg">Leave a feedback</h1>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Type feedback here"
          className="mt-4 input input-bordered input-primary w-full max-w-xs rounded-none"
        />
        <button className="mt-4 btn bg-purple-700 hover:bg-purple-800 text-white">
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default SingleFeedback;
