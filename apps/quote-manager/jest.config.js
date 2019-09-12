module.exports = {
  name: 'quote-manager',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/quote-manager',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
