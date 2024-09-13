import React from 'react';

const Card = ({ image, title, subtitle }: {image: string, title: string, subtitle: string}) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg bg-white">
      <img className="w-full h-48 rounded-t-lg shadow-md object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-lg text-start font-medium text-gray-80">{title}</h2>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
