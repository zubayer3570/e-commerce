import Link from "next/link";

const Card = ({ data }) => {
    const { id, image, title, description } = data
    const shortDes = description.split(' ').slice(0, 5).join(' ')
    const shortTitle = title.split(' ').slice(0, 3).join(' ')
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className='h-[200px] overflow-hidden'>
                <figure className='px-4 pt-4'><img src={image} /></figure>
            </div>
            <div className="card-body">
                <h5 className="text-[18px] font-bold">{shortTitle}</h5>
                <p>{shortDes}...</p>
                <div className="card-actions justify-center">
                    <Link href={`/product/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;