import React from 'react';
import Layout from 'components/layout/Layout';
import SignForm from 'components/forms/SignForm';
import styles from 'components/forms/LoginForm.module.css';

export default function SingupPage() {
  if (process.env.DISABLE_LOGIN) {
    return null;
  }

  return (
    <div className={styles.background}>
      <Layout title="sign" header={false} footer={false} center>
        <SignForm />
      </Layout>
    </div>
  );
}
