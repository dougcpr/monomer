import { newE2EPage } from '@stencil/core/testing';

describe('itr-button', () => {
  it('renders web component with hydrated class', async () => {
    const page = await newE2EPage();

    await page.setContent('<dwc-button></dwc-button>');
    const element = await page.find('itr-button');
    expect(element).toHaveClass('hydrated');
  });
  it('evokes a click event', async () => {
    const page = await newE2EPage();

    await page.setContent('<dwc-button></dwc-button>');
    const element = await page.find('itr-button');
    element.click().then(() => {console.log('Button Clicked');})
  });
});
