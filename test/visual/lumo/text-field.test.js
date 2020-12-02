import { visualDiff } from '../../../src/regression/browser/commands.mjs';
import '@vaadin/vaadin-text-field';

describe('text-field', () => {
  let div, element;

  async function visualTest(name) {
    await visualDiff(div, `lumo:text-field:${name}`);
  }

  before(() => {
    const range = new Range().createContextualFragment(
      '<div style="padding: 10px; display: inline-block"></div>'
    );
    div = range.firstElementChild;
    document.body.appendChild(div);
  });

  beforeEach(() => {
    element = document.createElement('vaadin-text-field');
    div.appendChild(element);
  });

  afterEach(() => {
    div.removeChild(element);
  });

  it('basic', async () => {
    await visualTest('basic');
  });

  it('disabled', async () => {
    element.disabled = true;
    await visualTest('disabled');
  });

  it('readonly', async () => {
    element.disabled = true;
    await visualTest('readonly');
  });

  it('label', async () => {
    element.label = 'Label';
    await visualTest('label');
  });

  it('placeholder', async () => {
    element.placeholder = 'Placeholder';
    await visualTest('placeholder');
  });

  it('value', async () => {
    element.value = 'value';
    await visualTest('value');
  });

  it('required', async () => {
    element.label = 'Label';
    element.required = true;
    await visualTest('required');
  });

  it('error message', async () => {
    element.label = 'Label';
    element.errorMessage = 'This field is required';
    element.required = true;
    element.validate();
    await visualTest('error-message');
  });

  it('helper text', async () => {
    element.helperText = 'Helper text';
    await visualTest('helper-text');
  });
});
