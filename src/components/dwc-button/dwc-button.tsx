import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'dwc-button',
  // styles
  styleUrl: 'dwc-button.css',
  // native shadow-dom encapsulation (scoped styles to the web platform)
  shadow: true
})

export class Button {
  // Props
  @Prop() disabled: boolean;
  @Prop() outline: boolean;
  // Render HTML
  render() {
    return (
      <button
        class={{'outline': this.outline}}
        disabled={this.disabled}
      >
        <slot/>
      </button>
    )
  }
}
