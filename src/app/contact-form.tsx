"use client";

import { useFormState, useFormStatus } from "react-dom";
import MainButton from "@/components/main-button";
import { sendEmailAction } from "./send-email-action";
import type { FormState } from "@/types";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [displayErrors, setDisplayErrors] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, formAction] = useFormState(sendEmailAction, {
    status: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    errors: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  } as FormState);

  useEffect(() => {
    if (!displayErrors) setDisplayErrors(true);
    if (formState.status === "error") {
      toast.error("Algo salió mal, intente nuevamente más tarde.");
    } else if (formState.status === "success") {
      formRef.current?.reset();
      toast.success(
        "El mensaje se envió exitosamente, en breve se le contactará."
      );
    }
  }, [formState]);

  return (
    <form
      action={formAction}
      className="max-w-[54ch] xl:max-w-lg w-full space-y-8 xl:justify-self-end"
      ref={formRef}
      onChange={() => {
        if (displayErrors) setDisplayErrors(false);
      }}
      noValidate
    >
      <div className="space-y-6">
        <fieldset className="relative text-sm">
          <label
            htmlFor="name"
            className="absolute bg-transparent px-2 text-xs -left-2 -top-4"
          >
            Nombre*
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nombre y apellido"
            defaultValue={formState.name}
            className="p-3 w-full focus:outline-secondary focus:outline-offset-4 text-black"
          />
          {formState.errors.name !== "" && displayErrors && (
            <p className="text-sm text-red-500">{formState.errors.name}</p>
          )}
        </fieldset>
        <fieldset className="relative text-sm">
          <label
            htmlFor="phone"
            className="absolute bg-transparent px-2 text-xs -left-2 -top-4"
          >
            Teléfono*
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="9999999999"
            defaultValue={formState.phone}
            className="p-3 w-full focus:outline-secondary focus:outline-offset-4 text-black"
          />
          {formState.errors.phone !== "" && displayErrors && (
            <p className="text-sm text-red-500">{formState.errors.phone}</p>
          )}
        </fieldset>
        <fieldset className="relative text-sm">
          <label
            htmlFor="email"
            className="absolute bg-transparent px-2 text-xs -left-2 -top-4"
          >
            Email*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="ejemplo@correo.com"
            defaultValue={formState.email}
            className="p-3 w-full focus:outline-secondary focus:outline-offset-4 text-black"
          />
          {formState.errors.email !== "" && displayErrors && (
            <p className="text-sm text-red-500">{formState.errors.email}</p>
          )}
        </fieldset>
        <fieldset className="relative text-sm">
          <label
            htmlFor="message"
            className="absolute bg-transparent px-2 text-xs -left-2 -top-4"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Hola, quisiera..."
            defaultValue={formState.message}
            rows={8}
            className="p-3 w-full focus:outline-secondary focus:outline-offset-4 text-black resize-none"
          />
        </fieldset>
      </div>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <MainButton
      disabled={pending}
      className={`flex items-center gap-2 ${
        pending ? "bg-secondary/70 text-main/70" : "bg-secondary"
      }`}
    >
      {pending ? "Enviando..." : "Enviar"}{" "}
      {pending && (
        <span
          aria-hidden
          className="size-5 rounded-full inline-block bg-transparent border-2 border-white border-t-transparent animate-spin"
        />
      )}
    </MainButton>
  );
}
