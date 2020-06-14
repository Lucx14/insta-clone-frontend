import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../components/UI/Buttons/SubmitButton';
import { Wrapper, StyledHelper, FieldWrapper, Input } from './style';
import * as actions from '../../store/actions';

const Signup = (props) => {
  const { onAuthSignup } = props;

  return (
    <Wrapper>
      <Formik
        initialValues={{
          name: '',
          username: '',
          email: '',
          password: '',
          password_confirmation: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(30, 'Must be 30 characters or less')
            .required('Required'),
          username: Yup.string()
            .max(25, 'Must be 25 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(6, 'Must be 6 characters or more')
            .required('Required'),
          password_confirmation: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          onAuthSignup(
            values.name,
            values.username,
            values.email,
            values.password,
            values.password_confirmation
          );
          setSubmitting(false);
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <FieldWrapper>
                <Field
                  name="name"
                  type="text"
                  as={Input}
                  placeholder="Name"
                  errors={errors.name && touched.name}
                />
                <StyledHelper errors={errors.name && touched.name}>
                  <ErrorMessage name="name" />
                </StyledHelper>
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name="username"
                  type="text"
                  as={Input}
                  placeholder="Username"
                  errors={errors.username && touched.username}
                />
                <StyledHelper errors={errors.username && touched.username}>
                  <ErrorMessage name="username" />
                </StyledHelper>
              </FieldWrapper>
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
              <FieldWrapper>
                <Field
                  name="password_confirmation"
                  type="text"
                  as={Input}
                  placeholder="Password Confirmation"
                  errors={
                    errors.password_confirmation &&
                    touched.password_confirmation
                  }
                />
                <StyledHelper
                  errors={
                    errors.password_confirmation &&
                    touched.password_confirmation
                  }
                >
                  <ErrorMessage name="password_confirmation" />
                </StyledHelper>
              </FieldWrapper>
              <Button>Sign up</Button>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onAuthSignup: (name, username, email, password, passwordConfirmation) =>
    dispatch(
      actions.authSignup(name, username, email, password, passwordConfirmation)
    ),
});

Signup.propTypes = {
  onAuthSignup: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Signup);
