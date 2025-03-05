



export function MentorData() {
    return (
        <div className="w-full px-3 h-full flex flex-col items-center  bg-white">
            <form className=" flex flex-col gap-3 w-full max-w-96">

                <div>
                    <img src=""/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Fist Name</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        defaultValue={"Ricardo"}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        defaultValue={"Albuquerque"}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Email</label>
                    <input
                        type="email"
                        name="_email"
                        placeholder="Enter your email"
                        defaultValue={"ricardoalbuquerque@gmail.com"}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        defaultValue={"123456"}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Country</label>
                    <input
                        type="text"
                        name="country"
                        placeholder="Enter your country"
                        defaultValue={"Brazil"}
                    />
                </div>
            </form>
        </div>
    )
}