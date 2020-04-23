import React from 'react';
import InputField from './Input.component'
import renderer from 'react-test-renderer';

test('Input Field renders correctly', () => {
  const inputField = renderer
    .create( <InputField onChange={() => null} value="Repo"/>)
    .toJSON();

  expect(inputField).toMatchSnapshot();
});