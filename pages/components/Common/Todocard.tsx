type name = {
    name: string
    text: string
}

var min = 1;
var max = 3;


export const Todocard = ({ name, id, date }: { name: string, id: number, date: Date }) => {
    const a = Math.floor(Math.random() * (max + 1 - min)) + min;
    const img1 = `./0${a}.png`
    console.log({ a })
    return (
        <>
            <div className="max-w-sm w-full lg:max-w-full m-auto">
                <img src={img1} className=" m-auto p-4" />
                <p className="text-center p-4">{name}</p>
                {/* <p className="text-center">{id}</p> */}
                {/* <p className="text-center">{date}</p> */}
            </div>
        </>
    )
}