import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <table className="highlight centered" >
      <thead>
        <tr>
          <th><h5>Name</h5></th>
        </tr>
      </thead>
      <tbody>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
      </tbody>
    </table>
  );
};

export default CharacterList;

