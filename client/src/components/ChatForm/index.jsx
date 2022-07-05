import React from "react";
import { Formik, Form, Field } from "formik";

function ChatForm(props) {
  const initialData = {
    author_id: '',
    body: '',
  };

  return (
    <Formik initialValues={initialData} onSubmit={props.onSubmit}>
      {() => {
        return (
          <Form>
            <Field type="text" name="author_id" />

            <Field type="text" name="body" />

            <button type="submit"></button>
          </Form>
        );
      }}
    </Formik>
  );
}

// Formik
//  {(formikProps) => {

// return form onSubmit=() => {}
//     inputs value onChange = () => {} name=myname
//     button type=submit
//   /form
//  }}
// /Formik

export default ChatForm;
