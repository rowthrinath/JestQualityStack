import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

test('Lau', () => {
  const component = renderer.create(
    <Link page="http://localhost:3000/">Qiuality Stack</Link>,
  );
});