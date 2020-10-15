export function encrypt(pwd: string) {
  return Buffer.from(pwd).toString("base64");
}

export function decrypt(password: string) {
  return Buffer.from(password, "base64").toString("utf-8");
}
