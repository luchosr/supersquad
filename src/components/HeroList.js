import React from "react";
import { connect } from "react-redux";

function HeroList(props) {
  return (
    <div className="">
      <h4>Your Hero Squad:</h4>
      <ul className="list-group">
        {props.heroes.map((hero) => (
          <li key={hero.id} className="list-group-item">
            <div className="list-item">{hero.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes,
  };
}

export default connect(mapStateToProps, null)(HeroList);
