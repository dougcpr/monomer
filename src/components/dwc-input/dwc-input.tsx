import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'dwc-input',
  styleUrl: 'dwc-input.scss',
  shadow: true
})

export class Input {
  @Prop() disabled: boolean;
  @Prop() label: string;
  static detectContent(ev) {
    console.log(ev);
    // ev.path[0].value ? ev.path[0].classList.add('label-stick') : ev.path[0].classList.remove('label-stick');
  }
  render() {
    return (
      <div class="text-field">
        <input onKeyUp={Input.detectContent} disabled={this.disabled}/>
        <label>{this.label}</label>
      </div>
    )
  }
}
