import { useParams } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { format } from "date-fns";

import { IParticipantExceptId } from "../../types";
import { addParticipant } from "../../api";
import { ParticipantRegisterSchema } from "../../schemas";
import { toast } from "react-toastify";

export const RegisterForm = () => {
  const { eventId } = useParams<{ eventId: string }>();

  if (!eventId) return;

  return (
    <>
      <h2 className="font-semibold text-[32px] text-center">
        Event Registration
      </h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          dateOfBirth: format(new Date(), "yyyy-MM-dd"),
          dateOfRegistration: format(new Date(), "yyyy-MM-dd"),
          eventAdvertisementSource: "Social media",
          eventId,
        }}
        validationSchema={ParticipantRegisterSchema}
        onSubmit={(values: IParticipantExceptId) => {
          addParticipant(values)
            .then(() =>
              toast.success(
                "You have been successfully registered for the event."
              )
            )
            .catch((e) => {
              toast.error(e.response.data.message);
            });
        }}
      >
        {({ errors, touched }) => (
          <Form className=" w-[400px] mx-auto flex flex-col gap-[25px] justify-center shadow-custom-inset py-[40px] px-[20px] rounded-[10px]">
            <div className="relative">
              <Field
                className="fieldStyles"
                type="text"
                name="name"
                placeholder="Enter fullname"
              />
              {errors.name && touched.name ? (
                <p className="errorDesc">{errors.name}</p>
              ) : null}
            </div>
            <div>
              <Field
                className="fieldStyles"
                type="email"
                name="email"
                placeholder="Enter email"
              />
              {errors.email && touched.email ? (
                <p className="errorDesc">{errors.email}</p>
              ) : null}
            </div>
            <div>
              <Field
                className="fieldStyles"
                type="date"
                name="dateOfBirth"
                placeholder="Enter date of birth"
                max={format(new Date(), "yyyy-MM-dd")}
              />
              {errors.dateOfBirth && touched.dateOfBirth ? (
                <p className="errorDesc">{errors.dateOfBirth}</p>
              ) : null}
            </div>
            <div>
              <p className="text-[18px] mb-[6px]">
                Where did you hear about this event?
              </p>
              <div className="flex gap-[8px]">
                <label>
                  <Field
                    className="real-radio"
                    type="radio"
                    name="eventAdvertisementSource"
                    value="Social media"
                  />
                  <span className="custom-radio"></span>
                  Social media
                </label>
                <label>
                  <Field
                    className="real-radio"
                    type="radio"
                    name="eventAdvertisementSource"
                    value="Friends"
                  />
                  <span className="custom-radio"></span>
                  Friends
                </label>
                <label>
                  {" "}
                  <Field
                    className="real-radio"
                    type="radio"
                    name="eventAdvertisementSource"
                    value="Found myself"
                  />
                  <span className="custom-radio"></span>
                  Found myself
                </label>
              </div>
            </div>
            <button
              className="w-full p-[10px] border border-slate-700 rounded-[10px] bg-transparent hover:bg-[#3c3d46] hover:text-[#e3f6ff] hover:border-transparent transition-colors"
              type="submit"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
