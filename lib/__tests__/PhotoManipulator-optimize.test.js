import { NativeModules } from 'react-native';
import 'jest-extended';
import PhotoManipulator from '../PhotoManipulator';
import { toImageNative } from '../ParamUtils';
describe('Photo Manipulator', function () {
    describe('optimize()', function () {
        var imageUrl = 'https://image.freepik.com/free-photo/tulips-bouquet-pink-background-with-copyspace_24972-271.jpg';
        var imageRequire = require.resolve('../../docs/test.png');
        var quality = 60;
        test('with network source', function () {
            PhotoManipulator.optimize(imageUrl, quality);
            expect(NativeModules.RNPhotoManipulator.optimize).toBeCalledWith(imageUrl, quality);
        });
        test('with require source', function () {
            PhotoManipulator.optimize(imageRequire, quality);
            expect(NativeModules.RNPhotoManipulator.optimize).toBeCalledWith(toImageNative(imageRequire), quality);
        });
    });
});
