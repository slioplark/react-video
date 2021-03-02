import { createGlobalStyle } from 'styled-components';

const IconFontStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('iconfont.eot?t=1614674280664'); /* IE9 */
    src: url('iconfont.eot?t=1614674280664#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAANgAAsAAAAAB2gAAAMSAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqCTIIxATYCJAMMCwgABCAFhG0HOxt8BhHVmzfIfhzkpql7p0+miONkTaja/Pfgobfl3t+/OR/YiJhUaMkFEZleTPogegmuJbS3uRm6RkUYpuQ8+F++I+kCwoX8CoCDY6ZL8Tzb2iUjORJwggOKahrZP8gL+g9jNxE0xPMQgAk/YhAlZTUtGFAB0wQgZibHBzFkdKgNxQIDAl3FWhWxEwcMyiblPrCD/774TZIwgIKDBMxtGCsdoeBb7fcj0mq39lAE/OksgLEJJBADqCD6Km0dyCgWg8TkydTmbB0qAmWqoN0O5/kSHfyHBwoChA5QaAEgQtEoXBQfk6HA9yOCq75EAqADVGAM2KSoXIY+rGQbHR2H5+bbFxbabbZW2/MKzHL2ZLh5bMR8+DgKobMeCzEdOSHkwAvR4we2uI4ePxdiUioQlnle7Vfvzt7ZfMt6e3j87sI8OOx5TkPT080Nj62No3s3u43Nz7YvbGlFe9qsLc/Xfiwd1xUYC3qaCimkt8lQkOlbOv6xy9bqtEHTsrwhm7o3OLW2krSQDZpVWxmXtz0NLD2+ai5gTj6kNPDpq9VppRatrRRRzwd7pb0CD+Y/TUlOHp0ePYWFPWz/wE2HhrY2p24Na9h0L/BmQ0N13cPq+vrqh/WCq7JD8UPlMgYAsNvkWxkNIM9Jrz/yN+TH957uX5zzz2BWAXgz4jXBfXabSve4AQUM/vvnd2xRfSHQS9XlYV7okJQMtCggF5kAO8DlxLvhKtd7TAgMuCagoMcXJAZCkCo2BhwwkwI6DOSDiWjKN5txZgkSoRqBKNZJINA4CwqLuAsSjQdIFfsWHHDjL+jQhAQTbcJ5TzNmmMimWNAqBnB/yJ4PQkY1oviG8b1ZSQs57oVy5SCM3ZBPrnigTLHg+sRJlYCEd1iky3DbGE7hgl67pHrOfU9VX+o8742hWNAqBsD9gez5INpdTeHnbxjfm5WGih7rC+XKvQMjHUMH5Co7OlXcyifXJ06oEkDCO7BIFtxgjIGzelRBrx1pQOSc6ZVO1FXWLa/YXyDXqAHsJYUipFBRJ3hHM5h/+Wix1x5NAwAA') format('woff2'),
    url('iconfont.woff?t=1614674280664') format('woff'),
    url('iconfont.ttf?t=1614674280664') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('iconfont.svg?t=1614674280664#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-home:before {
    content: "\e7a6";
  }

  .icon-aixin-xian:before {
    content: "\e64d";
  }
`;

export default IconFontStyle;

