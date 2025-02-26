import Question from "../../models/question";
import { Controller, useFormContext } from "react-hook-form";
import Input from "../common/Input";
import Dropdown from "../common/Dropdown";
import Textarea, { AutoGrow } from "../common/Textarea";
import Radio from "../common/Radio";
import Checkbox from "../common/Checkbox";

interface Props {
  question: Question;
}

const QuestionForm = ({ question }: Props) => {
  debugger;
  const { control, register } = useFormContext();
  switch (question.type) {
    case "shortText":
      return (
        <Input
          className="pb-16 pt-0 border-b-2 focus:border-b-main focus:bg-transparent w-full"
          {...register(`${question.id}`, {
            required: {
              value: question.required,
              message: "필수 항목입니다.",
            },
          })}
        />
      );
    case "date":
      return (
        <Input
          type="date"
          {...register(`${question.id}`, {
            required: {
              value: question.required,
              message: "필수 항목입니다.",
            },
          })}
        />
      );
    case "time":
      return (
        <Input
          type="time"
          {...register(`${question.id}`, {
            required: {
              value: question.required,
              message: "필수 항목입니다.",
            },
          })}
        />
      );
    case "dropdown":
      return (
        <Controller
          name={`${question.id}`}
          control={control}
          render={({ field }) => (
            <Dropdown
              options={question.options!.map((option) => ({
                label: <span>{option}</span>,
                value: { option },
              }))}
              onChange={field.onChange}
            />
          )}
          rules={{ required: question.required }}
        />
      );
    case "longText":
      return (
        <AutoGrow className="w-full" forTextarea={`${question.id}`}>
          <Textarea
            className="w-full border-b-2 focus:border-b-main focus:bg-transparent"
            {...register(`${question.id}`, {
              required: {
                value: question.required,
                message: "필수 항목입니다.",
              },
            })}
          ></Textarea>
        </AutoGrow>
      );
    case "multipleChoice":
      return (
        <div className="flex flex-col gap-y-20">
          {question.options?.map((option) => (
            <Radio
              key={option}
              label={option}
              value={option}
              {...register(`${question.id}`, {
                required: {
                  value: question.required,
                  message: "필수 항목입니다.",
                },
              })}
            />
          ))}
        </div>
      );
    case "checkbox":
      return (
        <div className="flex flex-col gap-y-20">
          {question.options?.map((option) => (
            <Checkbox
              key={option}
              label={option}
              value={option}
              {...register(`${question.id}`)}
            />
          ))}
        </div>
      );

    default:
      return null;
  }
};

export default QuestionForm;
