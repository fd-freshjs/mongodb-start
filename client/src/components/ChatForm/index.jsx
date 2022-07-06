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
            <Field type="text" name="author_id" placeholder="Author Id" />

            <Field type="text" name="body" placeholder="text" />

            <button type="submit">Send</button>
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
