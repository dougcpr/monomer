import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'dwc-card',
  styleUrl: 'dwc-card.scss',
  shadow: true
})

export class Card {
  @Prop() subject: string;
  render() {
    return <div class="card">
      <div>{this.subject}</div>
      <slot
      />
    </div>
  }
}
