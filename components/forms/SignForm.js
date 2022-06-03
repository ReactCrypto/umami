import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';
import Button from 'components/common/Button';
import FormLayout, {
  FormButtons,
  FormError,
  FormMessage,
  FormRow,
} from 'components/layout/FormLayout';
import Icon from 'components/common/Icon';
import useApi from 'hooks/useApi';
import Logo from 'assets/logo.svg';
import styles from './LoginForm.module.css';

const validate = ({ email, username, password }) => {
  const errors = {};
  if (!email) {
    errors.email = <FormattedMessage id="label.required" defaultMessage="Required" />;
  }
  if (!username) {
    errors.username = <FormattedMessage id="label.required" defaultMessage="Required" />;
  }
  if (!password) {
    errors.password = <FormattedMessage id="label.required" defaultMessage="Required" />;
  }

  return errors;
};

export default function SignForm() {
  const { post } = useApi();
  const router = useRouter();
  const [message, setMessage] = useState();

  const handleSubmit = async ({ email, username, password }) => {
    const { ok, status, data } = await post('/auth/sign', {
      email,
      username,
      password,
    });

    if (ok) {
      router.push('/login');
    } else {
      setMessage(
        status === 401 ? (
          <FormattedMessage
            id="message.incorrect-username-password"
            defaultMessage="Incorrect username/password."
          />
        ) : (
          data
        ),
      );
    }
  };

  return (
    <FormLayout className={styles.login}>
      <Formik
        initialValues={{
          email: '',
          username: '',
          password: '',
        }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className={styles.header}>
              <Icon icon={<Logo />} size="xlarge" className={styles.icon} />
              <h1 className="center">极光云</h1>
            </div>
            <FormRow>
              <label htmlFor="email">
                <FormattedMessage id="label.email" defaultMessage="邮箱" />
              </label>
              <div>
                <Field name="email" type="text" />
                <FormError name="email" />
              </div>
            </FormRow>
            <FormRow>
              <label htmlFor="username">
                <FormattedMessage id="label.username" defaultMessage="Username" />
              </label>
              <div>
                <Field name="username" type="text" />
                <FormError name="username" />
              </div>
            </FormRow>
            <FormRow>
              <label htmlFor="password">
                <FormattedMessage id="label.password" defaultMessage="Password" />
              </label>
              <div>
                <Field name="password" type="password" />
                <FormError name="password" />
              </div>
            </FormRow>
            <FormButtons>
              <Button type="submit" variant="action">
                <FormattedMessage id="label.sign" defaultMessage="注册" />
              </Button>
            </FormButtons>
            <FormMessage>{message}</FormMessage>
          </Form>
        )}
      </Formik>
    </FormLayout>
  );
}
