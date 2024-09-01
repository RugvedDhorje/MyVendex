import { useState } from "react";
import { FiSearch } from 'react-icons/fi';

const SearchBox = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event: any) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        alert("You just searched");
    };

    return (
        <div className="w-full flex justify-center">
            <div className="flex items-center justify-between w-[50vw] px-2 py-2 rounded-full shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500">
                <input
                    type="text"
                    className="text-gray-600 placeholder:text-gray-600 w-full px-4 py-2 focus:outline-none focus:ring-none"
                    placeholder="Search Keyword, Location, Service, Vendor..."
                    value={query}
                    onChange={handleInputChange}
                />
                <div onClick={handleSearch} className="text-white bg-[#6930D0] px-4 py-4 rounded-full">
                    <FiSearch />
                </div>
            </div>
        </div>
    )
}

export default SearchBox;
