import React from 'react';

const BlogDetailCard = ({ data }) => {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg p-8 rounded-lg max-w-3xl w-full">
        {data ? (
          <div className="flex flex-col items-center">
            <img
              className="rounded-full object-cover w-32 h-32 mb-6"
              src={data.Image || "/dummy-image.png"}
              alt="Blog Cover"
            />
            <div className="text-4xl font-bold mb-4 text-center">{data.Title}</div>
            <p className="text-gray-600 leading-relaxed text-center">{data.Content}</p>
          </div>
        ) : (
          <div className="text-center text-gray-700">No data!</div>
        )}
      </div>
    </section>
  );
};

export default BlogDetailCard;
