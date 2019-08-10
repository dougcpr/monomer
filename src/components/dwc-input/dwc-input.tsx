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
  @Prop() value: string;
  @Event() valueChange: EventEmitter<string>;
  // propagate value change from view to model
  inputChanged(ev: any) {
    let val = ev.target && ev.target.value;
    ev.target.value ? ev.target.classList.add('content-filled') : ev.target.classList.remove('content-filled');
    this.value = val;
    this.valueChange.emit(this.value);
  }
  render() {
    return (
      <div class="text-field">
        <input
          class="input"
          type={this.type}
          value={this.value}
          onInput={this.inputChanged.bind(this)}
          disabled={this.disabled}
        />
        <label>{this.label}</label>
        <div class="hint">{this.hint}</div>
      </div>
    )
  }
}
