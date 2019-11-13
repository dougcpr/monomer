import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'dwc-card',
  styleUrl: 'card.scss',
  shadow: true
})

export class Card {
  @Prop() subject: string;
  render() {
    return (
      <div
        class="card"
      >
        <div class="subject">{this.subject}</div>
        <slot />
      </div>
    )
  }
}
