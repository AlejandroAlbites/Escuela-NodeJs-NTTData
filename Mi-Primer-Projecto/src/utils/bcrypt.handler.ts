import { compare, hash } from "bcryptjs";

const encrypt = async (value: string) => {
  const valueHash = await hash(value, 8);
  return valueHash;
};

const decrypt = async (value: string, valueHash: string) => {
  const isCorrect = await compare(value, valueHash);

  return isCorrect;
};

export { encrypt, decrypt };
