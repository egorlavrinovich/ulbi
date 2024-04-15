import { classNames } from './classNames';

describe('classNames', () => {
    test('cls only', () => {
        expect(classNames({ cls: 'btn' })).toBe('btn');
    });
    test('clx and additional', () => {
        expect(classNames({ cls: 'main', additional: ['green', 'yellow'] })).toBe('main green yellow');
    });
    test('clx and mods', () => {
        expect(classNames({ cls: 'main', mods: { fix: true } })).toBe('main fix');
    });
    test('clx, mods and additional', () => {
        expect(classNames({ cls: 'main', mods: { fix: false }, additional: [] })).toBe('main ');
    });
});
