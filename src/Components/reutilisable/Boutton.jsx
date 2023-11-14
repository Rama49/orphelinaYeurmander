import React from 'react'

const bouttonText = {
    backgroundColor: "black",
    color: "white",
    margin: 20,
}

function Boutton(props) {
    return (
        <div>
          <button type="button"  style={bouttonText} onClick={props.onClick}>
            {props.text}
          </button>
        </div>
      );
}

export default Boutton