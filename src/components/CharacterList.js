import React from "react";
import { connect } from "react-redux";

const CharacterList = (props) => {
  return (
    <div>
      <h4>Characters</h4>
      <ul>
        {props.characters.map((character) => (
          <li key={character.id}>
            <div>{character.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    characters: state.characters,
  };
}

export default connect(mapStateToProps, null)(CharacterList);
