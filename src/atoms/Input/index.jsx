export default function Input({ name, image, placeholder, register, rules, error }) {
    return (
        <div className="relative flex flex-col mt-5 w-full">
            <div className="relative flex h-12 w-full">
                <div className="absolute left-0 flex items-center pl-3 h-full pointer-events-none">
                    <img src={image} alt="" className="h-6 w-6" />
                </div>
                <input
                    className="w-[470px] pl-12 py-2 border-2 border-gray rounded-3xl focus:ring-2 focus:ring-purple"
                    type={name === "password" || name === "confirmPassword" ? "password" : name === "email" ? "email" : "text"} 
                    placeholder={placeholder}
                    {...register(name, rules)}
                />
            </div>
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
    );
}
/*
    <div class="relative">
    <input id="hs-toggle-password" type="password" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter password" value="12345qwerty">
    <button type="button" data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }' class="absolute top-0 end-0 p-3.5 rounded-e-md">
      
    </button>
  </div>
*/