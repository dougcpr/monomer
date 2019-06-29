import { newE2EPage } from '@stencil/core/testing';

describe('dwc-save-animation', () => {
  it('renders web component with hydrated class', async () => {
    const page = await newE2EPage();

    await page.setContent('<dwc-loader></dwc-loader>');
    const element = await page.find('dwc-save-animation');
    expect(element).toHaveClass('hydrated');
  });
});
