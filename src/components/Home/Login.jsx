import React, { useState } from 'react';
import { Box, Button, FormField, Text, TextInput } from 'grommet';
import { useDispatch, useSelector } from 'react-redux';
import { string, object } from 'yup';
import styled from 'styled-components';
import { login } from '../../actions';
import Loader from '../Loader';
import Toast from '../../modules/toast';

const Wrapper = styled.div`
  display: flex;
  padding: 2rem;
  margin-right: 1rem;
  border: 1rem solid #000;
  flex-wrap: wrap;
  flex-direction: row;
`;
const LoginComponent = () => {
  const [values, setValues] = useState({ email: null, password: null });
  const [errors, setErrors] = useState({});
  const [register, setRegister] = useState(false);
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

  const signUpClick = () => {
    setRegister(true);
  };

  const submitRegisterForm = () => {
    dispatch(login(values));
  };

  if (user.status === 'exception') {
    Toast({ message: user.error.message });
  }

  if (register === true) {
    return user.status === 'loading' ? (
      <Loader />
    ) : (
      <Box direction="row-responsive" animation="fadeIn" width="large" justify="center" wrap={true}>
        <Wrapper>
          <Box justify="center" style={{ width: '100%' }} direction="row-responsive">
            <Text size="small" style={{lineHeight: '4rem'}} color="brand" weight="bold" textAlign="center">
              is account for a
            </Text>
            <Button
              onClick={() => {
                submitRegisterForm();
              }}
              margin={{ horizontal: 'small', vertical: 'small' }}
            >
              <Box
                round="xlarge"
                background="accent-1"
                pad={{ vertical: 'small', horizontal: 'medium' }}
              >
                <Text size="small" color="brand" weight="bold" textAlign="center">
                  organization
                </Text>
              </Box>
            </Button>
            <Button
              disabled={Object.keys(errors).length > 0}
              onClick={() => {
                submitRegisterForm();
              }}
              margin={{ horizontal: 'small' , vertical: 'small'}}
            >
              <Box
                round="xlarge"
                background="accent-1"
                pad={{ vertical: 'small', horizontal: 'medium' }}
              >
                <Text size="small" color="brand" weight="bold" textAlign="center">
                  user
                </Text>
              </Box>
            </Button>
          </Box>
          <Box justify="center" direction="row-responsive">
            <FormField label="email" style={{ margin: '1rem' }} error={errors.email}>
              <TextInput
                plain
                name="email"
                placeholder={<Text size="medium">email@gmail.com</Text>}
                value={values.email}
                onChange={handleChange}
              />
            </FormField>

            <FormField label="password" style={{ margin: '1rem' }} error={errors.password}>
              <TextInput
                plain
                type="password"
                name="password"
                placeholder={<Text size="medium">*******</Text>}
                value={values.password}
                onChange={handleChange}
              />
            </FormField>
            <Button
              disabled={Object.keys(errors).length > 0}
              onClick={() => {
                submitRegisterForm();
              }}
            >
              <Box
                round="xlarge"
                background="accent-1"
                pad={{ vertical: 'small', horizontal: 'medium' }}
              >
                <Text size="small" color="brand" weight="bold" textAlign="center">
                  register
                </Text>
              </Box>
            </Button>
          </Box>
        </Wrapper>
      </Box>
    );
  }

  return user.status === 'loading' ? (
    <Loader />
  ) : (
    <Box direction="row-responsive" animation="fadeIn" width="large" justify="center" wrap={true}>
      <Wrapper>
        <Box justify="center" direction="row-responsive">
          <FormField label="email" style={{ margin: '1rem' }} error={errors.email}>
            <TextInput
              plain
              name="email"
              placeholder={<Text size="medium">email@gmail.com</Text>}
              value={values.email}
              onChange={handleChange}
            />
          </FormField>

          <FormField label="password" style={{ margin: '1rem' }} error={errors.password}>
            <TextInput
              plain
              type="password"
              name="password"
              placeholder={<Text size="medium">*******</Text>}
              value={values.password}
              onChange={handleChange}
            />
          </FormField>
          <Button
            disabled={Object.keys(errors).length > 0}
            onClick={() => {
              handleClickLogin();
            }}
          >
            <Box
              round="xlarge"
              background="accent-1"
              pad={{ vertical: 'small', horizontal: 'medium' }}
            >
              <Text size="small" color="brand" weight="bold" textAlign="center">
                login
              </Text>
            </Box>
          </Button>
        </Box>
      </Wrapper>
      <Box fill={true} margin={{ vertical: 'small', horizontal: 'medium' }}>
        <Text size="small" color="brand" weight="bold" textAlign="center">
          Don't have an account?
        </Text>
      </Box>
      <Button
        onClick={() => {
          signUpClick();
        }}
      >
        <Box
          background="blue"
          margin={{ vertical: 'small', horizontal: 'medium' }}
          pad={{ vertical: 'small', horizontal: 'medium' }}
        >
          <Text size="small" color="white" weight="bold" textAlign="center">
            Sign up
          </Text>
        </Box>
      </Button>
    </Box>
  );
};

export { LoginComponent };
