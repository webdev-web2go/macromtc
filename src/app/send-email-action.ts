"use server";

import { sendEmail } from "@/send-email";
import type { FormState } from "@/types";

export async function sendEmailAction(
  previousState: FormState,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  const errors: FormState["errors"] = previousState["errors"];

  if (name === "") {
    errors["name"] = "El nombre es necesario.";
  } else if (name !== "") errors["name"] = "";

  if (phone !== "" && !/^\d{10}$/.test(phone)) {
    errors["phone"] =
      "El número telefónico debe tener éste formato 9999999999.";
  } else if (phone === "") {
    errors["phone"] = "El teléfono es necesario.";
  } else errors["phone"] = "";

  if (email === "") {
    errors["email"] = "El correo es necesario";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
    errors["email"] = "El correo debe tener el formato ejemplo@correo.com.";
  } else if (email !== "") errors["email"] = "";

  if (Object.values(errors).some((value) => value.length > 0)) {
    return {
      ...previousState,
      status: "missing fields",
      errors,
    };
  }

  try {
    await sendEmail(name, email, phone, message);
  } catch (error) {
    return {
      ...previousState,
      status: "error",
    };
  }

  return {
    status: "success",
    name: "",
    email: "",
    phone: "",
    message: "",
    errors,
  };
}
