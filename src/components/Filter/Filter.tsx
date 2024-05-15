import { Field, Form, Formik } from "formik";

export const Filter = () => {
  return (
    <Formik
      initialValues={{
        filter: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleChange }) => (
        <Form className="mb-[10px]">
          <Field
            className="fieldStyles"
            name="filter"
            placeholder="Find participants by name or email"
            type="text"
            onChange={handleChange}
          />
        </Form>
      )}
    </Formik>
  );
};
