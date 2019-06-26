import { Component, Listen, h, Prop, Watch } from '@stencil/core';

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
  @Prop() text: string;
  // Watches
  @Watch('text')
  // validated whether the user has passed in a title
  static validateTitle(newValue: string) {
    const isEmpty = typeof newValue == null;
    if (isEmpty) {throw new Error('Text Property is empty in iTrellis Button')}
  }
  @Listen('click', { capture: true })
  handleClick(event) {
    if (!this.disabled) {
      console.log(event);
    }
  }
  // Render HTML
  render() {
    return <button
      class="dwc-button"
      disabled={this.disabled}
    >{this.text}</button>
  }
}
