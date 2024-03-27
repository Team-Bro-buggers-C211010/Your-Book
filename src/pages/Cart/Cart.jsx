const Cart = () => {
    return (
        <div className="fontWorkSans">
            <div className="mb-6 border border-[#23BE0A] w-full fontWorkSans font-bold text-[28px] rounded-2xl flex items-center justify-center h-24 bg-[#1313130D]">Thank You For the Order</div>
            <div className="text-center font-semibold mb-5 text-2xl fontWorkSans">Details:</div>
            <div className="flex flex-col gap-y-3">
                <label className="input input-bordered flex items-center gap-2">
                    Name :
                    <input type="text" className="grow" placeholder="Hero Alam" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Email :
                    <input type="text" className="grow" placeholder="hablu@site.com" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Book Name :
                    <input type="text" className="grow" placeholder="Takurmar Juli" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Quantity
                    <input type="text" className="grow" placeholder="01" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Gifted ?
                    <input type="text" className="grow" placeholder="Yes/No" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Delivery Address" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="AtDoor Delivery" />
                    <span className="badge bg-green-600 text-white badge-info">Optional</span>
                </label>
            </div>
            <div className="mt-3 md:gap-x-2 gap-y-2 md:gap-y-0 flex justify-center font-semibold"><button className="btn bg-[#42b653e2] text-white">Place Order</button> <button className="btn bg-[#42b653e2] text-white">Cancel Order</button></div>
        </div>
    )
}

export default Cart