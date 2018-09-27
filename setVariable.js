const fs = require('file-system');
const grab = require('ps-grab');

const maxWidthIpad = grab('--maxWidthIpad');
const maxWidthMobile = grab('--maxWidthMobile');
const revert = grab('--revert');

fs.copyFileSync('./src/less/config.less', './src/less/config.less', {
  process: function (content) {
    let maxWithMobileString = '@max-width-mobile: 767px';
    let maxWithIpadString = '@max-width-ipad: 1024px';

    if (revert === 'revert') {
      maxWithIpadString = '@max-width-mobile: 0px';
      maxWithMobileString = '@max-width-ipad: 0px'
    }

    let processedContent = content.replace(maxWithMobileString, `@max-width-mobile: ${maxWidthMobile}px`);
    processedContent = processedContent.replace(maxWithIpadString, `@max-width-ipad: ${maxWidthIpad}px`);

    return processedContent;
  }
});
