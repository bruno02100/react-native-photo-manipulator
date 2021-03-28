import { toBatchNative, toColorNative, toImageNative, toTextOptionsNative } from '../ParamUtils';
import 'jest-extended';
describe('ParamUtils', function () {
    test('toColorNative', function () {
        expect(toColorNative('#000000')).toEqual({ r: 0, g: 0, b: 0, a: 255 });
        expect(toColorNative('#ffffff')).toEqual({ r: 255, g: 255, b: 255, a: 255 });
        expect(toColorNative('#54f313')).toEqual({ r: 84, g: 243, b: 19, a: 255 });
    });
    test('toImageNative with string', function () {
        expect(toImageNative('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1000px-React-icon.svg.png')).toEqual('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1000px-React-icon.svg.png');
    });
    test('toImageNative with require', function () {
        expect(toImageNative(require.resolve('../../docs/test.png'))).toEndWith('/docs/test.png');
    });
    test('toTextOptionsNative', function () {
        var value = toTextOptionsNative({
            color: '#663212',
            position: { x: 50, y: 10 },
            text: 'Bee',
            textSize: 32,
            thickness: 0
        });
        expect(value).toEqual({
            color: { r: 102, b: 18, g: 50, a: 255 },
            position: { x: 50, y: 10 },
            text: 'Bee',
            textSize: 32,
            thickness: 0
        });
    });
    test('toBatchNative', function () {
        var value = toBatchNative({
            operation: 'text',
            options: { color: '#a3426f', position: { x: 12, y: 27 }, text: 'TEXT', textSize: 22, thickness: 1 }
        });
        expect(value).toEqual({
            operation: 'text',
            options: {
                color: { r: 163, b: 111, g: 66, a: 255 },
                position: { x: 12, y: 27 },
                text: 'TEXT',
                textSize: 22,
                thickness: 1
            }
        });
        value = toBatchNative({
            operation: 'overlay',
            overlay: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1000px-React-icon.svg.png',
            position: { x: 22, y: 73 }
        });
        expect(value).toEqual({
            operation: 'overlay',
            overlay: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1000px-React-icon.svg.png',
            position: { x: 22, y: 73 }
        });
    });
});
