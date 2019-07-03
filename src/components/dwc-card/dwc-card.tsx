import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'dwc-card',
  styleUrl: 'dwc-card.scss',
  shadow: true
})

export class Card {
  @Prop() title: string;
  render() {
    return <div class="card">
      <div>{this.title}</div>
      <slot
      />
    </div>
  }
}
