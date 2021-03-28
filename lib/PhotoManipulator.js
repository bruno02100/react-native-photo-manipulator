import { NativeModules } from 'react-native';
import * as ParamUtils from './ParamUtils';
import { MimeType } from './PhotoManipulatorTypes';
var RNPhotoManipulator = NativeModules.RNPhotoManipulator;
var PhotoManipulator = {
    batch: function (image, operations, cropRegion, targetSize, quality, mimeType) {
        if (quality === void 0) { quality = 100; }
        if (mimeType === void 0) { mimeType = MimeType.JPEG; }
        return RNPhotoManipulator.batch(ParamUtils.toImageNative(image), operations.map(ParamUtils.toBatchNative), cropRegion, targetSize, quality, mimeType);
    },
    crop: function (image, cropRegion, targetSize, mimeType) {
        if (mimeType === void 0) { mimeType = MimeType.JPEG; }
        return RNPhotoManipulator.crop(ParamUtils.toImageNative(image), cropRegion, targetSize, mimeType);
    },
    overlayImage: function (image, overlay, position, mimeType) {
        if (mimeType === void 0) { mimeType = MimeType.JPEG; }
        return RNPhotoManipulator.overlayImage(ParamUtils.toImageNative(image), ParamUtils.toImageNative(overlay), position, mimeType);
    },
    printText: function (image, texts, mimeType) {
        if (mimeType === void 0) { mimeType = MimeType.JPEG; }
        return RNPhotoManipulator.printText(ParamUtils.toImageNative(image), texts.map(ParamUtils.toTextOptionsNative), mimeType);
    },
    optimize: function (image, quality) { return RNPhotoManipulator.optimize(ParamUtils.toImageNative(image), quality); }
};
export default PhotoManipulator;
