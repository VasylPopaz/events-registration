import { Field, Form, Formik } from "formik";
import { ParticipantsListProps } from "../../types";

export const Filter: React.FC<ParticipantsListProps> = ({ participants }) => {
  console.log(participants);
  return (
    <Formik
      initialValues={{
        filter: "",
      }}
      onSubmit={() => {}}
    >
      {() => (
        <Form className=" w-[450px] mx-auto flex flex-col gap-[30px] justify-center shadow-custom-inset p-[40px] rounded-[18px]">
          <Field
            className="fieldStyles"
            placeholder="Find participants by name"
            type="text"
          />
        </Form>
      )}
    </Formik>
  );
};
