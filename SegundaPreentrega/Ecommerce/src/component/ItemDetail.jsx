import PropTypes from "prop-types";

const ItemDetail = ({item}) => {
    if(!item){
        return null;

    };


    return (
        <div>
            <h1>{item.title}</h1>
            <h2>{item.category}</h2>
        </div>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.object,
};

export default ItemDetail
