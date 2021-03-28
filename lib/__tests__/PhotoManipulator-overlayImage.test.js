import { NativeModules } from 'react-native';
import 'jest-extended';
import PhotoManipulator from '../PhotoManipulator';
import { toImageNative } from '../ParamUtils';
import { MimeType } from '../PhotoManipulatorTypes';
describe('Photo Manipulator', function () {
    describe('overlayImage()', function () {
        var imageUrl = 'https://image.freepik.com/free-photo/tulips-bouquet-pink-background-with-copyspace_24972-271.jpg';
        var imageRequire = require.resolve('../../docs/test.png');
        var position = { x: 30, y: 20 };
        test('with network source', function () {
            PhotoManipulator.overlayImage(imageUrl, imageUrl, position);
            expect(NativeModules.RNPhotoManipulator.overlayImage).toBeCalledWith(imageUrl, imageUrl, position, MimeType.JPEG);
        });
        test('support png', function () {
            PhotoManipulator.overlayImage(imageUrl, imageUrl, position, MimeType.PNG);
            expect(NativeModules.RNPhotoManipulator.overlayImage).toBeCalledWith(imageUrl, imageUrl, position, MimeType.PNG);
        });
        test('with require source', function () {
            PhotoManipulator.overlayImage(imageRequire, imageRequire, position);
            expect(NativeModules.RNPhotoManipulator.overlayImage).toBeCalledWith(toImageNative(imageRequire), toImageNative(imageRequire), position, MimeType.JPEG);
        });
    });
});
