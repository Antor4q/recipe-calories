import PropTypes from 'prop-types'
const Cooking = ({cooking,idx}) => {
    console.log(cooking)
    const {recipe_name,calories,preparing_time} = cooking
    return (
        <>
           
            <tr className="bg-[#28282805] p-4">
                    <th>{idx+1}</th>
                    <td>{recipe_name}</td>
                    <td>{preparing_time}</td>
                    <td>{calories}</td>
                    
                </tr>
        </>
    );
};


Cooking.propTypes = {
    cooking: PropTypes.array,
    idx: PropTypes.number
}

export default Cooking;