import { useNavigate, useParams } from "react-router-dom";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { format } from "date-fns";
import { toast } from "react-toastify";

import { IParticipantExceptId } from "../../types";
import { addParticipant } from "../../api";
import { ParticipantRegisterSchema } from "../../schemas";
import { Loader } from "../Loader/Loader";
import { useState } from "react";

export const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { eventId } = useParams<{ eventId: string }>();

  if (!eventId) return;

  return (
    <>
      <h2 className="font-semibold text-[26px] text-center mb-[15px]">
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
        onSubmit={(
          values: IParticipantExceptId,
          { resetForm }: FormikHelpers<IParticipantExceptId>
        ) => {
          setIsLoading(true);
          addParticipant(values)
            .then(() => {
              toast.success(
                "You have been successfully registered for the event."
              );
              resetForm();
              setTimeout(() => {
                navigate(`/participants/${eventId}`);
              }, 2000);
            })
            .catch((e) => {
              toast.error(e.response.data.message);
            })
            .finally(() => {
              setIsLoading(false);
            });
        }}
      >
        {({ errors, touched }) => (
          <Form className=" w-[350px] md:w-[450px] mx-auto flex flex-col gap-[30px] justify-center shadow-custom-inset p-[40px] rounded-[18px]">
            <div className="relative">
              <Field
                className="fieldStyles"
                type="text"
                name="name"
                placeholder="Enter full name"
              />
              {errors.name && touched.name ? (
                <p className="errorDesc">{errors.name}</p>
              ) : null}
            </div>
            <div className="relative">
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
              <p className="text-[16px] md:text-[18px] mb-[6px]">
                Where did you hear about this event?
              </p>
              <div className="flex gap-[8px]">
                <label className="labelStyles">
                  <Field
                    className="real-radio"
                    type="radio"
                    name="eventAdvertisementSource"
                    value="Social media"
                  />
                  <span className="custom-radio"></span>
                  Social media
                </label>
                <label className="labelStyles">
                  <Field
                    className="real-radio"
                    type="radio"
                    name="eventAdvertisementSource"
                    value="Friends"
                  />
                  <span className="custom-radio"></span>
                  Friends
                </label>
                <label className="labelStyles">
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
              className="w-full px-[10px] py-[12px] border border-slate-700 rounded-[10px] bg-[#3c3d46] text-[#cdcdce] hover:scale-[1.05] hover:text-[#fbfbfc] hover:border-transparent transition duration-300 disabled:cursor-not-allowed disabled:bg-[#f0f8ff] disabled:opacity-[0.7]"
              type="submit"
              disabled={isLoading}
            >
              Register
              {isLoading && <Loader size="20" classTitle="insideButton" />}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
