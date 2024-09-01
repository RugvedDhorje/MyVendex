import React from 'react';

const Card = ({ image, title, subtitle }: {image: string, title: string, subtitle: string}) => {
  return (
    <div className="overflow-hidden bg-white">
      <img className="w-full h-48 rounded-lg shadow-lg object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-lg text-start font-medium text-gray-800">{title}</h2>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
