// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#Common_image_file_types
// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers#Browser_compatibility
const regex =
  /.+\.(apng|bmp|gif|ico|cur|jpg|jpeg|jfif|pjpeg|pjp|png|svg|tif|tiff|webp|3gp|aac|flac|mpg|mpeg|mp3|mp4|m4a|oga|ogg|wav|webm)$/i;

/**
 * Appends `default` property to CommonJS `require` that match certain media extensions.
 *
 * @see {@link https://github.com/remarkablemark/require-default-codemod}
 * @see {@link https://github.com/facebook/jscodeshift}
 * @see {@link https://astexplorer.net/}
 *
 * @param {Object} fileInfo
 * @param {String} fileInfo.source
 * @param {Object} api
 * @param {Function} api.jscodeshift
 * @return {String}
 */
module.exports = (fileInfo, api) => {
  const j = api.jscodeshift;

  return j(fileInfo.source)
    .find(j.CallExpression, {
      callee: {
        type: 'Identifier',
        name: 'require',
      },
    })
    .filter(path => {
      const { property } = path.parent.node;
      if (property && property.name === 'default') {
        return false;
      }
      return regex.test(path.value.arguments[0].value);
    })
    .replaceWith(path =>
      j.memberExpression(path.value, j.identifier('default'))
    )
    .toSource();
};
