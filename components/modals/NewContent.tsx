import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { palette } from "../../styles";
import { Session } from "../sessions/types/Session";
import { ListForm, TextfieldForm } from "./modal_components";

export const NewContent = () => {
  const [sessionData, setSessionData] = useState<any>();
  const [verifiedSessionData, setVerifiedSessionData] = useState<any>();
  const [startNewSession, setStartNewSession] = useState<boolean>(false);
  const [formPrompt, setFormPrompt] = useState<number>(0);
  const [triggerSubmit, setTriggerSubmit] = useState<number>(0);
  const [inputArray, setInputArray] = useState<any[]>([]);
  const textInput = useRef<HTMLInputElement>(null);
  const { register, handleSubmit, setValue } = useForm<Session>({
    defaultValues: {
      parameters: ["title"],
      id: undefined,
    },
  });

  const addInputArray = () => {
    let textField = textInput.current.value;
    switch (formPrompt) {
      case 2:
        if (inputArray.length <= 11) {
          setInputArray((inputArray) => [...inputArray, textField]);
        } else {
          alert(`Maximum Number of Tracks Reached`);
        }
        break;
      case 3:
        if (inputArray.length <= 10) {
          setInputArray((inputArray) => [...inputArray, textField]);
        } else {
          alert(`Maximum Number of Elements Reached`);
        }
        break;
      default:
        alert(`Invalid title`);
    }
  };

  const removeInputArray = (title) => {
    setInputArray((inputArray) =>
      inputArray.filter((titles) => titles !== title)
    );
  };

  const addParameterList = (title) => {
    if (inputArray.length <= 10) {
      setInputArray((inputArray) => [...inputArray, title]);
    } else {
      alert(`Maximum Number of Elements Reached`);
    }
  };

  const checkDuplicates = () => {
    setInputArray((inputArray) =>
      inputArray.filter((input, index, array) => array.indexOf(input) === index)
    );
  };

  useEffect(() => {
    checkDuplicates();
    textInput.current.value = "";
  }, [inputArray.length]);

  const submitInputArray = () => {
    inputArray.forEach((title, index) => {
      formPrompt === 2
        ? setValue(`tracks.${index}.title`, title)
        : submitParameters();
    });

    setTriggerSubmit(triggerSubmit + 1);
  };

  const submitParameters = () => {
    formPrompt === 3 &&
      inputArray.forEach((paramTitle, paramIndex) => {
        setValue(`parameters.${paramIndex + 1}`, paramTitle);
      });
    sessionData.tracks.forEach((track, trackIndex) => {
      inputArray.forEach((parameterName, parameterIndex) => {
        if (parameterName !== "title") {
          setValue(
            `tracks[${trackIndex}].parameters[${parameterIndex}].parameter` as any,
            parameterName
          );
          setValue(
            `tracks[${trackIndex}].parameters[${parameterIndex}].colour` as any,
            `${palette._grey}`
          );
          setValue(
            `tracks[${trackIndex}].parameters[${parameterIndex}].comment` as any,
            ``
          );
        }
      });
    });
  };

  useEffect(() => {
    if (triggerSubmit >= 1) {
      handleSubmit((data) => submitSessionData(data))();
    }
  }, [triggerSubmit, handleSubmit]);

  const submitSessionData = (data) => {
    setSessionData({ ...data });

    switch (formPrompt) {
      case 0 || 1:
        sessionData && textInput.current.value && setFormPrompt(formPrompt + 1);
        textInput.current.value = "";

        break;
      case 2:
        sessionData.tracks && setFormPrompt(formPrompt + 1);
        setInputArray([]);

        break;
      case 3:
        sessionData.parameters.length > 1 && setFormPrompt(formPrompt + 1);

        break;
      case 4:
        console.log("yo yo");

        break;
      default:
        break;
    }
  };

  return formPrompt <= 1 ? (
    <TextfieldForm
      handleSubmit={handleSubmit}
      onSubmitForm={submitSessionData}
      textInput={textInput}
      formPrompt={formPrompt}
      register={register}
    />
  ) : formPrompt <= 3 ? (
    <ListForm
      addInputArray={addInputArray}
      removeInputArray={removeInputArray}
      addParameterList={addParameterList}
      submitInputArray={submitInputArray}
      formPrompt={formPrompt}
      sessionData={sessionData}
      textInput={textInput}
      inputArray={inputArray}
    />
  ) : (
    startNewSession && <>Hello!</>
  );
};
