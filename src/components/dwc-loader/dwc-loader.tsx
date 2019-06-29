import { Component, h } from '@stencil/core';

@Component({
  tag: 'dwc-loader',
  // styles
  styleUrl: 'dwc-loader.css',
  // native shadow-dom encapsulation (scoped styles to the web platform)
  shadow: true
})

export class Loader {
  // Render HTML
  render() {
    return <div class="loader"/>
  }
}

