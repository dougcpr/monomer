import { Component, h } from '@stencil/core';

@Component({
  tag: 'dwc-card',
  styleUrl: 'dwc-card.scss',
  shadow: true
})

export class Card {
  render() {
    return <div class="card"><slot /></div>
  }
}
