import fs from "fs/promises";

export default async function Acesso() {
  // Criando o arquivo
  await fs.appendFile("./arquivos/acesso.txt", `${Date.now()} - `, "utf-8");

  const data = await fs.readFile("./arquivos/acesso.txt", "utf-8");

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}
