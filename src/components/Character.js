import React from "react";

const Character = props => {
  return( 
  <tr>
    <td className="collection-item " >
      {props.character.name}
    </td>
  </tr>
  )
};

export default Character;
