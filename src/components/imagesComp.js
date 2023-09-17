import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Images = () => {
    const { imgArrProps } = useSelector((state) => state.cart);

    return (
        <div>
            {
                imgArrProps.length > 1 ?
                    imgArrProps.map(
                        (image) => (
                            <Link key={image.id} to={`/product/${image.id}`}>
                                <img src={image.img} key={image.id} value={image.id} />
                            </Link>)
                    )
                    :
                    <span style={{ padding: '55px 0px', fontSize: '21px' }}>Loading.....</span>
            }
        </div>
    )
}