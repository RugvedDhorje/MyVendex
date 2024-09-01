const ServiveCard = ({url, text, buttonText, height}: {url: string, text: string, buttonText: string, height: string}) => {
    return (
        <div
            className="relative w-full rounded-lg bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${url})`, height: height }}
        >
            <div className="absolute inset-0 bg-black rounded-lg bg-opacity-50 flex items-center justify-center">
                <div className='flex flex-col justify-between items-start w-full p-16'>
                    <h2 className="text-white text-4xl font-medium">{text}</h2>
                    {buttonText && <button className="bg-white mt-8 px-4 py-2 rounded-lg border">{buttonText}</button>}
                </div>
            </div>
        </div>
    )
}

export default ServiveCard;
