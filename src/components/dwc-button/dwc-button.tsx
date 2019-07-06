import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'dwc-button',
  // styles
  styleUrl: 'dwc-button.scss',
  // native shadow-dom encapsulation (scoped styles to the web platform)
  shadow: true
})

export class Button {
  // Props
  @Prop() disabled: boolean;
  @Prop() block: boolean;
  // Render HTML
  render() {
    return (
      <button
        class={{'block': this.block}}
        disabled={this.disabled}
      >
        <slot/>
      </button>
    )
  }
}
