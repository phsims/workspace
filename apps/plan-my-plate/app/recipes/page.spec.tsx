import mockRouter from 'next-router-mock';
import { render } from '@testing-library/react';
import fetch from 'jest-fetch-mock';

import { mockRecipes } from '@workspace/components';
import { getSpoonConfig, ConfigProps } from '../middleware/setup';

import Recipes from './page';
jest.mock('next/navigation', () => require('next-router-mock'));
jest.mock('../middleware/setup');
describe('Recipes', () => {
  let appConfig: ConfigProps;

  beforeEach(() => {
    appConfig = getSpoonConfig();
    global.fetch = jest.fn().mockResolvedValue({
      ok: true, 
      json: jest.fn().mockResolvedValue(mockRecipes),
    });
  });

  afterEach(() => {
    fetch.resetMocks();
  });

  it('should render successfully', async () => {
    const { container } = render(await Recipes());
    expect(container).toBeDefined();
  });

  it('should use the mock getAppConfig function', () => {
    expect(appConfig.baseUrl).toBe('http://mock_base_url.com');
    expect(appConfig.headers['Content-Type']).toBe('application/json');
    expect(appConfig.env).toBe('development');
  });
});