const Badge=()=>{
    return (
        <div className='w-[15rem]'>
            <div className="flex flex-column items-start ">
                <img className="w-[1rem] h-[rem]" src="https://cdn-icons-png.flaticon.com/128/3011/3011270.png"/>
                <div className="flex flex-row">
                    <h2 className="text-black mb-[1rem] mt-[rem]">Lorem Ipsum</h2> <button className="bg-red-950">Section 1</button>
                    <p className="text-gray-800">Dummy text is typed here for checking the visual representation </p>
                </div>
                <div className="flex items-center justify-around">
                    <img className="w-[rem] h-[rem]" src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"/>
                    <img src="https://cdn-icons-png.flaticon.com/128/2951/2951100.png"/>
                    <img src="https://cdn-icons-png.flaticon.com/128/929/929610.png"/>
                    <img src="https://cdn-icons-png.flaticon.com/128/709/709612.png"/>
                </div>
            </div>
        </div>
    )
}

export default Badge