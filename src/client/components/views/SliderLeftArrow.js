import React, { Component } from "react";
class SliderLeftArrow extends Component {
  displayName = "SliderLeftArrow";

  render = () => {
    return (
      <div {...this.props} className="SliderLeftArrow">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
        </svg>
      </div>
    );
  };
}

export default SliderLeftArrow;