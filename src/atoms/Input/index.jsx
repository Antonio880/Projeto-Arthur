export default function Input({ image, placeholder }) {
    return (
        <div className="flex justify-center my-5 relative h-12">
            <div className="absolute left-[164px] top-3 pl-3 pointer-events-none">
                <img src={image} alt="" />
            </div>
            <input
                className="w-[420px] pl-12 py-2 border-2 border-gray rounded-3xl   focus:ring-2 focus:ring-purple"
                type="text"
                placeholder={placeholder}
            />
        </div>

    )
}