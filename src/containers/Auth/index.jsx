import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../../components/UI/Buttons/SubmitButton';
import { Wrapper, StyledHelper, FieldWrapper, Input } from './style';

const Auth = () => {
  return (
    <Wrapper>
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
        onSubmit={() => {}}
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

export default Auth;
