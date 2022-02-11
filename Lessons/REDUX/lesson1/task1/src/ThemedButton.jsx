import React from 'react';
import { ThemeContext } from './themes-context';

class ThemedButton extends React.Component {
  render() {
    console.log(this.context);
    return (
      <button
        style={{
          backgroundColor: this.context.background,
          color: this.context.fontColor,
        }}
        {...this.props}
        className="btn"
      />
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
