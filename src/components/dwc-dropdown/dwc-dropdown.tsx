import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'dwc-dropdown',
  styleUrl: 'dwc-dropdown.scss',
  shadow: true
})

export class Card {
  @Prop() block: boolean;
  @Prop() placeholder: string;
  @Prop() values: Array<Object> = [
    {
      id: 1,
      value: 'Hello World'
    }, {
      id: 2,
      value: 'Value 2'
    }];
  toggle = false;
  toggleDropdown() {
    this.toggle = !this.toggle;
  }
  render() {
    return (
      <div onClick={() => this.toggleDropdown()} class={{'block': this.block, 'Dropdown__Container': true}}>
        <div class="Dropdown__Label">{this.placeholder}</div>
        <div class="Dropdown__Values">
          {this.values.map(value => {
          <div class="Dropdown__Value">{value}</div>
        })}
        </div>
        <div class="arrow"></div>
      </div>
    )
  }
}
