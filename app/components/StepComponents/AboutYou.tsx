"use client";
import React, { useEffect, useState } from "react";
import { initialValue } from "../Stepper";
import { retrieveDownloadUrl } from "@/app/firebase/db/addData";

interface AboutYouProps {
  nextStep: () => void;
  data: typeof initialValue;
  onChange?: {
    (stepNumber: string): (name: string, value: string | number) => void;
  };
}

const AboutYou = (props: AboutYouProps) => {
  const [name, setName] = useState(props?.data?.stepOne?.name || "");
  const [fileUrl, setFileUrl] = useState<string>("");
    const [disabled, setDisabled] = useState(true);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (props.onChange) {
      const stepOne = props.onChange("One");
      stepOne("name", event.target.value);
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const uploadedFile = event.target.files?.[0];
    const id = sessionStorage.getItem("sessionId") ?? "";
    const url = await retrieveDownloadUrl("userOnboarding", id, uploadedFile as File);
    setFileUrl(url?.downloadURL ?? "");
    if (props.onChange) {
      const stepOne = props.onChange("One");
      stepOne("picture", url?.downloadURL ?? '');
    }
  };

  useEffect(() => {
    if(props?.data?.stepOne?.name && props?.data?.stepOne?.picture) {
        setDisabled(false);
    }
  }, [props?.data?.stepOne])

  

  return (
    <div className="w-full md:w-1/2 p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-y-3">
      <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {`Hello! What's your name ?`}
      </h6>
      {/* Input name */}
      <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your name"
          required
          value={name}
          onChange={handleNameChange}
        />
      </div>

      {/* File Upload */}
      <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {`Add your picture below`}
      </h6>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>
      {fileUrl && (
        <div>
          <p>
            File uploaded successfully!{" "}
            <a href={fileUrl} className="text-blue-600">
              Download
            </a>
          </p>
        </div>
      )}
      <button
        onClick={props?.nextStep}
        type="button"
        disabled={disabled}
        className="disabled:bg-gray-500 disabled:hover:bg-gray-500 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Next
      </button>
    </div>
  );
};

export default AboutYou;
