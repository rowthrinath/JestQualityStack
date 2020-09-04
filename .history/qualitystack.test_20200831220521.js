import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

test('Lauc', () => {
  const component = renderer.create(
    <Link page="http://localhost:3000/">Qiuality Stack</Link>,
  );
});