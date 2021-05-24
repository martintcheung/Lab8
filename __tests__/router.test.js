/**
 * @jest-environment jsdom
 */

import { pushToHistory } from '../scripts/router.js';

 describe('testing pushToHistory function', () => {
    test('history length and state after pushing to empty state', () => {
        pushToHistory('settings', 0);
        expect(history.length).toBe(2);
        expect(history.state).toEqual({ page: 'settings' });
    });

    test('history length and state after pushing entry,1', () => {
        pushToHistory('entry', 1);
        expect(history.length).toBe(3);
        expect(history.state).toEqual({ page: 'entry1' });
    });

    test('history length and state after pushing "" state', () => {
        pushToHistory('', 0);
        expect(history.length).toBe(4);
        expect(history.state).toEqual({});
    });

 });
