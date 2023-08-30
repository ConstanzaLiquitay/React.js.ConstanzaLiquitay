import PropTypes from "prop-types";

const ItemDetail = ({item}) => {
    if(!item){
        return null;

    };


    return (
        <div>
            <img src={item.imagen} alt="" />
            <h1>{item.title}</h1>
            <h2>{item.bodega}</h2>
            <p>{item.description}</p>

        </div>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.object,
};

export default ItemDetail
