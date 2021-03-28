import { NativeModules } from 'react-native';
import 'jest-extended';
import PhotoManipulator from '../PhotoManipulator';
import { toImageNative } from '../ParamUtils';
import { MimeType } from '../PhotoManipulatorTypes';
describe('Photo Manipulator', function () {
    describe('crop()', function () {
        var imageUrl = 'https://image.freepik.com/free-photo/tulips-bouquet-pink-background-with-copyspace_24972-271.jpg';
        var imageRequire = require.resolve('../../docs/test.png');
        var cropRegion = { x: 30, y: 10, height: 400, width: 300 };
        var targetSize = { width: 300, height: 200 };
        test('all parameters', function () {
            PhotoManipulator.crop(imageUrl, cropRegion, targetSize);
            expect(NativeModules.RNPhotoManipulator.crop).toBeCalledWith(imageUrl, cropRegion, targetSize, MimeType.JPEG);
        });
        test('support png', function () {
            PhotoManipulator.crop(imageUrl, cropRegion, targetSize, MimeType.PNG);
            expect(NativeModules.RNPhotoManipulator.crop).toBeCalledWith(imageUrl, cropRegion, targetSize, MimeType.PNG);
        });
        test('missing targetSize', function () {
            PhotoManipulator.crop(imageUrl, cropRegion);
            expect(NativeModules.RNPhotoManipulator.crop).toBeCalledWith(imageUrl, cropRegion, undefined, MimeType.JPEG);
        });
        test('require image source', function () {
            PhotoManipulator.crop(imageRequire, cropRegion);
            expect(NativeModules.RNPhotoManipulator.crop).toBeCalledWith(toImageNative(imageRequire), cropRegion, undefined, MimeType.JPEG);
        });
    });
});
