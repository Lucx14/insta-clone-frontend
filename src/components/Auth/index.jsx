import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import AuthProps from './propTypes';
import Button from '../UI/Buttons/SubmitButton';
import {
  Wrapper,
  StyledHelper,
  FieldWrapper,
  Input,
  StyledError,
} from './style';

const Auth = (props) => {
  const { onAuthInit, isAuthenticated, error } = props;

  let authRedirect;
  if (isAuthenticated) {
    authRedirect = <Redirect to="/" />;
  }

  let errorMessage;
  if (error) {
    errorMessage = (
      <StyledError>
        There was a problem with your request, please try again
      </StyledError>
    );
  }

  return (
    <Wrapper>
      {authRedirect}
      {errorMessage}
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(6, 'Must be 6 characters or more')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          onAuthInit(values.email, values.password);
          setSubmitting(false);
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <FieldWrapper>
                <Field
                  name="email"
                  type="email"
                  as={Input}
                  placeholder="Email"
                  errors={errors.email && touched.email}
                />
                <StyledHelper errors={errors.email && touched.email}>
                  <ErrorMessage name="email" />
                </StyledHelper>
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name="password"
                  type="text"
                  as={Input}
                  placeholder="Password"
                  errors={errors.password && touched.password}
                />
                <StyledHelper errors={errors.password && touched.password}>
                  <ErrorMessage name="password" />
                </StyledHelper>
              </FieldWrapper>
              <Button>Login</Button>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

Auth.propTypes = AuthProps;

export default Auth;
