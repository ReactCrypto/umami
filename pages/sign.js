import React from 'react';
import Layout from 'components/layout/Layout';
import SignForm from 'components/forms/SignForm';

export default function SingupPage() {
  if (process.env.DISABLE_LOGIN) {
    return null;
  }

  return (
    <Layout title="sign" header={false} footer={false} center>
      <SignForm />
    </Layout>
  );
}
