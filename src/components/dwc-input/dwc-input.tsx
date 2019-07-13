import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'dwc-input',
  styleUrl: 'dwc-input.scss',
  shadow: true
})

export class Input {
  @Prop() disabled: boolean;
  @Prop() label: string;
  @Prop() type: string;
  @Prop() hint: string;
  @Event() valueChange: EventEmitter;
  detectContent(ev) {
    ev.path[0].value ? ev.path[0].classList.add('content-filled') : ev.path[0].classList.remove('content-filled');
    this.valueChange.emit(ev.path[0].value)
  }
  render() {
    return (
      <div class="text-field">
        <input
          class="input"
          type={this.type}
          onInput={(ev) => {this.detectContent(ev)}}
          disabled={this.disabled}
        />
        <label>{this.label}</label>
        <div class="hint">{this.hint}</div>
      </div>
    )
  }
}
