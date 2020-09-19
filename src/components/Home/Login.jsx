import React, { useEffect, useState } from 'react';
import { Box, Button, FormField, Text, TextInput } from 'grommet';
import { useDispatch, useSelector } from 'react-redux';
import { string, object } from 'yup';
import { login } from '../../actions';
import Loader from '../Loader';
import Toast from '../../modules/toast';

const LoginComponent = () => {
  const [values, setValues] = useState({ email: null, password: null });
  const [errors, setErrors] = useState({});
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const schema = object().shape({
    email: string('Please enter a valid email')
      .email('Please enter a valid email')
      .required('email is required'),
    password: string('password is required').required('password is required'),
  });
  const handleChange = event => {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    schema
      .validate({ ...values, [name]: value })
      .then(() => {
        setErrors({});
      })
      .catch(error => {
        setErrors({ ...errors, [error.path]: error.message });
      });
    setValues({ ...values, [name]: value });
  };

  const handleClickLogin = () => {
    dispatch(login(values));
  };

  if (user.status === 'exception') {
    Toast({ message: user.error.message });
  }

  return user.status === 'loading' ? (
    <Loader />
  ) : (
    <Box direction="row" width="large" justify="center" wrap={true}>
      <Box direction="column" align="center" fill={true}>
        <FormField label="email" error={errors.email}>
          <TextInput
            plain
            name="email"
            placeholder={<Text size="medium">email@gmail.com</Text>}
            value={values.email}
            onChange={handleChange}
          />
        </FormField>
      </Box>
      <Box direction="column" align="center" fill={true}>
        <FormField label="password">
          <TextInput
            plain
            type="password"
            name="password"
            placeholder={<Text size="medium">*******</Text>}
            value={values.password}
            onChange={handleChange}
          />
        </FormField>
      </Box>
      <Button
        disabled={Object.keys(errors).length > 0}
        onClick={() => {
          handleClickLogin();
        }}
      >
        <Box round="xlarge" background="accent-1" pad={{ vertical: 'small', horizontal: 'medium' }}>
          <Text size="small" color="brand" weight="bold" textAlign="center">
            login
          </Text>
        </Box>
      </Button>
    </Box>
  );
};

export { LoginComponent };
