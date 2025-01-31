import PropTypes from 'prop-types'

const Cook = ({cook,idx,handleCooking}) => {
    const {recipe_name,calories,preparing_time} = cook
    
  
    
    return (
        < >
           
            <tr className="bg-[#28282805] p-3 lg:p-5">
                    <th>{idx+1}</th>
                    <td>{recipe_name}</td>
                    <td>{preparing_time} minutes</td>
                    <td>{calories} calories</td>
                    <td><button onClick={()=> handleCooking(cook)}  className="text-[#150B2B] p-1 font-medium lg:px-4 lg:py-2 bg-[#0BE58A] rounded-[50px]">Preparing</button></td>
                </tr>
                        
        </>
    );
};

Cook.propTypes = {
    cook: PropTypes.array,
    idx: PropTypes.number,
    handleCooking: PropTypes.func
    
}

export default Cook;