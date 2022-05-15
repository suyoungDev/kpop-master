import '@testing-library/jest-dom/extend-expect';
import { server } from './mocks';

beforeAll(() => server.listen);
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
