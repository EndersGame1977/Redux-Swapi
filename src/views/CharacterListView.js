import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// [x] import actions
import { getCharacters } from '../actions';

import ReactLoading from 'react-loading';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // [x] call our action
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return(
      <ReactLoading type={'spin'} color={'black'} height={66} width={37} />
      )

    } else if (this.props.error) {
      return (
        <div className="error">
          <h1>Error!</h1>
          <p>{this.props.error}</p>
        </div>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// [x] our mapStateToProps needs to have two properties inherited from state
// [x] the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching
});

export default connect(
  //null /* [x] mapStateToProps replaces null here */,
  mapStateToProps,
  {
    /* [x] action creators go here */
    getCharacters
  }
)(CharacterListView);
