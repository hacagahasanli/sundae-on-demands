import "@testing-library/jest-dom";

import { afterAll, afterEach, beforeAll } from "vitest";

import { server } from "./mocks/server.js";

// Establish APU mocking before all tests
beforeAll(() => server.listen());

// Reset any request handler that we may add during the tests,
// so they don't affect other tests
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished
afterAll(() => server.close());
