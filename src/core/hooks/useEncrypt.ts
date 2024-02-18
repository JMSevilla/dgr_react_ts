import React from "react";

interface Props {
  password?: string;
  encryptedPassword?: string;
}

export const useEncrypt = () => {
  function encryptPassword({ password }: Props) {
    const encrypted = btoa(password ?? "");
    return encrypted;
  }

  function decryptPassword({ encryptedPassword }: Props) {
    const decryptedPassword = atob(encryptedPassword ?? "");
    return decryptedPassword;
  }

  return {
    encrypt: encryptPassword,
    decrypt: decryptPassword,
  };
};
